param(
  [Parameter(Mandatory = $true)]
  [string]$InputPath,

  [Parameter(Mandatory = $true)]
  [string]$OutputDirectory
)

$ErrorActionPreference = "Stop"

$resolvedInput = (Resolve-Path -LiteralPath $InputPath).Path
$resolvedOutput = [System.IO.Path]::GetFullPath($OutputDirectory)

New-Item -ItemType Directory -Force -Path $resolvedOutput | Out-Null
$mediaDirectory = Join-Path $resolvedOutput "media"
New-Item -ItemType Directory -Force -Path $mediaDirectory | Out-Null

Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [System.IO.Compression.ZipFile]::OpenRead($resolvedInput)

try {
  function Read-ZipEntryText {
    param([string]$EntryName)

    $entry = $archive.GetEntry($EntryName)
    if ($null -eq $entry) {
      return $null
    }

    $reader = [System.IO.StreamReader]::new($entry.Open())
    try {
      return $reader.ReadToEnd()
    }
    finally {
      $reader.Dispose()
    }
  }

  $documentXmlText = Read-ZipEntryText "word/document.xml"
  $relationshipsXmlText = Read-ZipEntryText "word/_rels/document.xml.rels"
  $stylesXmlText = Read-ZipEntryText "word/styles.xml"

  if (-not $documentXmlText) {
    throw "The DOCX does not contain word/document.xml."
  }

  [xml]$documentXml = $documentXmlText
  [xml]$relationshipsXml = $relationshipsXmlText
  [xml]$stylesXml = $stylesXmlText

  $namespaceManager = [System.Xml.XmlNamespaceManager]::new($documentXml.NameTable)
  $namespaceManager.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
  $namespaceManager.AddNamespace("r", "http://schemas.openxmlformats.org/officeDocument/2006/relationships")
  $namespaceManager.AddNamespace("a", "http://schemas.openxmlformats.org/drawingml/2006/main")
  $namespaceManager.AddNamespace("wp", "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing")
  $namespaceManager.AddNamespace("pic", "http://schemas.openxmlformats.org/drawingml/2006/picture")

  $relationshipMap = @{}
  foreach ($relationship in $relationshipsXml.Relationships.Relationship) {
    $relationshipMap[$relationship.Id] = @{
      target = [string]$relationship.Target
      type = [string]$relationship.Type
      targetMode = [string]$relationship.TargetMode
    }
  }

  $styleMap = @{}
  if ($stylesXmlText) {
    $styleNamespaceManager = [System.Xml.XmlNamespaceManager]::new($stylesXml.NameTable)
    $styleNamespaceManager.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
    foreach ($style in $stylesXml.SelectNodes("//w:style", $styleNamespaceManager)) {
      $styleId = $style.GetAttribute("styleId", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
      $nameNode = $style.SelectSingleNode("./w:name", $styleNamespaceManager)
      $styleName = if ($nameNode) {
        $nameNode.GetAttribute("val", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
      }
      else {
        $styleId
      }
      $styleMap[$styleId] = $styleName
    }
  }

  $media = @()
  foreach ($entry in $archive.Entries | Where-Object { $_.FullName -like "word/media/*" -and $_.Name }) {
    $destination = Join-Path $mediaDirectory $entry.Name
    $inputStream = $entry.Open()
    $outputStream = [System.IO.File]::Create($destination)
    try {
      $inputStream.CopyTo($outputStream)
    }
    finally {
      $outputStream.Dispose()
      $inputStream.Dispose()
    }

    $media += [ordered]@{
      name = $entry.Name
      packagePath = $entry.FullName
      extractedPath = $destination
      bytes = $entry.Length
    }
  }

  function Get-NodeText {
    param([System.Xml.XmlNode]$Node)

    $parts = [System.Collections.Generic.List[string]]::new()
    foreach ($descendant in $Node.SelectNodes(".//w:t | .//w:tab | .//w:br | .//w:cr", $namespaceManager)) {
      switch ($descendant.LocalName) {
        "t" { $parts.Add($descendant.InnerText) }
        "tab" { $parts.Add("`t") }
        default { $parts.Add("`n") }
      }
    }
    return ($parts -join "")
  }

  function Get-ParagraphRecord {
    param([System.Xml.XmlNode]$Paragraph)

    $styleNode = $Paragraph.SelectSingleNode("./w:pPr/w:pStyle", $namespaceManager)
    $styleId = if ($styleNode) {
      $styleNode.GetAttribute("val", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
    }
    else {
      ""
    }

    $hyperlinks = @()
    foreach ($hyperlink in $Paragraph.SelectNodes(".//w:hyperlink", $namespaceManager)) {
      $relationshipId = $hyperlink.GetAttribute("id", "http://schemas.openxmlformats.org/officeDocument/2006/relationships")
      $relationship = if ($relationshipId -and $relationshipMap.ContainsKey($relationshipId)) {
        $relationshipMap[$relationshipId]
      }
      else {
        $null
      }
      $hyperlinks += [ordered]@{
        text = Get-NodeText $hyperlink
        relationshipId = $relationshipId
        target = if ($relationship) { $relationship.target } else { $null }
      }
    }

    $images = @()
    foreach ($blip in $Paragraph.SelectNodes(".//a:blip", $namespaceManager)) {
      $relationshipId = $blip.GetAttribute("embed", "http://schemas.openxmlformats.org/officeDocument/2006/relationships")
      $relationship = if ($relationshipId -and $relationshipMap.ContainsKey($relationshipId)) {
        $relationshipMap[$relationshipId]
      }
      else {
        $null
      }
      $drawing = $blip.SelectSingleNode("ancestor::w:drawing[1]", $namespaceManager)
      $properties = if ($drawing) {
        $drawing.SelectSingleNode(".//wp:docPr", $namespaceManager)
      }
      else {
        $null
      }

      $images += [ordered]@{
        relationshipId = $relationshipId
        target = if ($relationship) { $relationship.target } else { $null }
        name = if ($properties) { $properties.GetAttribute("name") } else { $null }
        title = if ($properties) { $properties.GetAttribute("title") } else { $null }
        description = if ($properties) { $properties.GetAttribute("descr") } else { $null }
      }
    }

    $numberingNode = $Paragraph.SelectSingleNode("./w:pPr/w:numPr", $namespaceManager)
    $numbering = if ($numberingNode) {
      $numIdNode = $numberingNode.SelectSingleNode("./w:numId", $namespaceManager)
      $levelNode = $numberingNode.SelectSingleNode("./w:ilvl", $namespaceManager)
      [ordered]@{
        numId = if ($numIdNode) { $numIdNode.GetAttribute("val", "http://schemas.openxmlformats.org/wordprocessingml/2006/main") } else { $null }
        level = if ($levelNode) { $levelNode.GetAttribute("val", "http://schemas.openxmlformats.org/wordprocessingml/2006/main") } else { $null }
      }
    }
    else {
      $null
    }

    return [ordered]@{
      type = "paragraph"
      styleId = $styleId
      style = if ($styleMap.ContainsKey($styleId)) { $styleMap[$styleId] } else { $styleId }
      text = Get-NodeText $Paragraph
      numbering = $numbering
      hyperlinks = $hyperlinks
      images = $images
    }
  }

  $blocks = @()
  $body = $documentXml.SelectSingleNode("//w:body", $namespaceManager)
  foreach ($child in $body.ChildNodes) {
    if ($child.LocalName -eq "p") {
      $blocks += Get-ParagraphRecord $child
    }
    elseif ($child.LocalName -eq "tbl") {
      $rows = @()
      foreach ($row in $child.SelectNodes("./w:tr", $namespaceManager)) {
        $cells = @()
        foreach ($cell in $row.SelectNodes("./w:tc", $namespaceManager)) {
          $cells += (Get-NodeText $cell).Trim()
        }
        $rows += ,$cells
      }
      $blocks += [ordered]@{
        type = "table"
        rows = $rows
      }
    }
  }

  $result = [ordered]@{
    source = $resolvedInput
    blocks = $blocks
    media = $media
  }

  $jsonPath = Join-Path $resolvedOutput "document.json"
  $result | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath $jsonPath -Encoding UTF8
  Write-Output $jsonPath
}
finally {
  $archive.Dispose()
}
