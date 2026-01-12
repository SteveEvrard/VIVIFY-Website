export type ContactMailtoOptions = {
  subject: string;
  bodyLines: string[];
};

/**
 * Build a mailto link with properly encoded subject/body.
 */
export function buildContactMailto({ subject, bodyLines }: ContactMailtoOptions) {
  const to = "info@vivify-technology.com";
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(bodyLines.join("\n"));
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}


