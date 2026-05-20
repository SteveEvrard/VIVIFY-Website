import Seo from "@/components/Seo";

export default function Privacy() {
  const tocItems = [
    { id: "section-1", label: "What information do we collect?" },
    { id: "section-2", label: "How do we process your information?" },
    { id: "section-3", label: "What legal bases do we rely on to process your personal information?" },
    { id: "section-4", label: "When and with whom do we share your personal information?" },
    { id: "section-5", label: "Do we use cookies and other tracking technologies?" },
    { id: "section-6", label: "How long do we keep your information?" },
    { id: "section-7", label: "How do we keep your information safe?" },
    { id: "section-8", label: "What are your privacy rights?" },
    { id: "section-9", label: "Controls for Do-Not-Track features" },
    { id: "section-10", label: "Do California residents have specific privacy rights?" },
    { id: "section-11", label: "Do we make updates to this notice?" },
    { id: "section-12", label: "How can you contact us about this notice?" },
    { id: "section-13", label: "How can you review, update, or delete the data we collect from you?" },
  ];

  const ccpaCategories: { letter: string; name: string; examples: string; collected: "YES" | "NO" }[] = [
    {
      letter: "A.",
      name: "Identifiers",
      examples:
        "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
      collected: "YES",
    },
    {
      letter: "B.",
      name: "Personal information categories listed in the California Customer Records statute",
      examples: "Name, contact information, education, employment, employment history, and financial information",
      collected: "NO",
    },
    {
      letter: "C.",
      name: "Protected classification characteristics under California or federal law",
      examples: "Gender and date of birth",
      collected: "NO",
    },
    {
      letter: "D.",
      name: "Commercial information",
      examples: "Transaction information, purchase history, financial details, and payment information",
      collected: "NO",
    },
    {
      letter: "E.",
      name: "Biometric information",
      examples: "Fingerprints and voiceprints",
      collected: "NO",
    },
    {
      letter: "F.",
      name: "Internet or other similar network activity",
      examples:
        "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements",
      collected: "NO",
    },
    {
      letter: "G.",
      name: "Geolocation data",
      examples: "Device location",
      collected: "YES",
    },
    {
      letter: "H.",
      name: "Audio, electronic, visual, thermal, olfactory, or similar information",
      examples: "Images and audio, video or call recordings created in connection with our business activities",
      collected: "NO",
    },
    {
      letter: "I.",
      name: "Professional or employment-related information",
      examples:
        "Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
      collected: "NO",
    },
    {
      letter: "J.",
      name: "Education Information",
      examples: "Student records and directory information",
      collected: "NO",
    },
    {
      letter: "K.",
      name: "Inferences drawn from other personal information",
      examples:
        "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics",
      collected: "NO",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo
        title="Privacy Notice"
        description="VIVIFY Technology, Inc. Privacy Notice — how we collect, store, use, and share information when you use our services."
        path="/privacy"
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32"
        aria-labelledby="privacy-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1536px]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Legal
            </p>
            <h1
              id="privacy-hero-title"
              className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white"
            >
              Privacy <span className="text-primary">Notice</span>
            </h1>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Last updated January 01, 2021
            </p>
            <p className="mt-8 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
              This privacy notice for VIVIFY Technology, Inc. (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) describes how and why we might collect, store, use, and/or share (&quot;process&quot;) your information when you use our services (&quot;Services&quot;), such as when you:
            </p>
            <ul className="mt-4 space-y-2 text-base sm:text-lg text-white/85 leading-relaxed list-disc pl-6">
              <li>
                Visit our website at{" "}
                <a
                  href="https://vivify-technology.com"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  https://vivify-technology.com
                </a>
                , or any website of ours that links to this privacy notice
              </li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <p className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
              <strong className="font-semibold text-white">Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
              <a
                href="mailto:info@vivify-technology.com"
                className="underline underline-offset-4 hover:text-primary"
              >
                info@vivify-technology.com
              </a>
              .
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-white"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Summary of Key Points */}
      <section
        className="relative bg-white py-16 md:py-24"
        aria-labelledby="privacy-summary-title"
      >
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1536px]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Summary
            </p>
            <h2
              id="privacy-summary-title"
              className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              Summary of Key Points
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also{" "}
              <a href="#toc" className="text-primary underline underline-offset-4 hover:text-primary/80">
                click here
              </a>{" "}
              to go directly to our table of contents.
            </p>

            <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">What personal information do we process?</strong>{" "}
                When you visit, use, or navigate our Services, we may process personal information depending on how you interact with VIVIFY Technology, Inc. and the Services, the choices you make, and the products and features you use.{" "}
                <a href="#section-1" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Click here
                </a>{" "}
                to learn more.
              </p>
              <p>
                <strong className="text-foreground">Do we process any sensitive personal information?</strong>{" "}
                We do not process sensitive personal information.
              </p>
              <p>
                <strong className="text-foreground">Do we receive any information from third parties?</strong>{" "}
                We may receive information from public databases, marketing partners, social media platforms, and other outside sources.{" "}
                <a href="#section-1" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Click here
                </a>{" "}
                to learn more.
              </p>
              <p>
                <strong className="text-foreground">How do we process your information?</strong>{" "}
                We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.{" "}
                <a href="#section-2" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Click here
                </a>{" "}
                to learn more.
              </p>
              <p>
                <strong className="text-foreground">In what situations and with which parties do we share personal information?</strong>{" "}
                We may share information in specific situations and with specific third parties.{" "}
                <a href="#section-4" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Click here
                </a>{" "}
                to learn more.
              </p>
              <p>
                <strong className="text-foreground">How do we keep your information safe?</strong>{" "}
                We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.{" "}
                <a href="#section-7" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Click here
                </a>{" "}
                to learn more.
              </p>
              <p>
                <strong className="text-foreground">What are your rights?</strong>{" "}
                Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.{" "}
                <a href="#section-8" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Click here
                </a>{" "}
                to learn more.
              </p>
              <p>
                <strong className="text-foreground">How do you exercise your rights?</strong>{" "}
                The easiest way to exercise your rights is by filling out our data subject request form, or by{" "}
                <a href="#section-12" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  contacting us
                </a>
                . We will consider and act upon any request in accordance with applicable data protection laws.
              </p>
              <p>
                <strong className="text-foreground">Want to learn more about what VIVIFY Technology, Inc. does with any information we collect?</strong>{" "}
                <a href="#toc" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Click here
                </a>{" "}
                to review the notice in full.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section
        id="toc"
        className="relative bg-gray-50 py-16 md:py-24 border-y border-foreground/10 scroll-mt-24"
        aria-labelledby="privacy-toc-title"
      >
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1536px]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contents
            </p>
            <h2
              id="privacy-toc-title"
              className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              Table of Contents
            </h2>
            <ol className="mt-8 space-y-3 text-base md:text-lg">
              {tocItems.map((item, idx) => (
                <li key={item.id} className="flex gap-4">
                  <span className="text-primary font-semibold tabular-nums w-8 shrink-0">
                    {idx + 1}.
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-foreground hover:text-primary underline underline-offset-4 decoration-foreground/20 hover:decoration-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Full Notice */}
      <section className="relative bg-white py-16 md:py-24" aria-labelledby="privacy-full-title">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1536px]">
            <h2 id="privacy-full-title" className="sr-only">
              Full Privacy Notice
            </h2>

            {/* Section 1 */}
            <article id="section-1" className="scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                1. What Information Do We Collect?
              </h3>

              <h4 className="mt-8 text-xl font-semibold text-foreground">
                Personal information you disclose to us
              </h4>
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> We collect personal information that you provide to us.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="mt-3 space-y-1 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>names</li>
                <li>phone numbers</li>
                <li>email addresses</li>
                <li>mailing addresses</li>
              </ul>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Sensitive Information.</strong> We do not process sensitive information.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>

              <h4 className="mt-10 text-xl font-semibold text-foreground">
                Information automatically collected
              </h4>
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Like many businesses, we also collect information through cookies and similar technologies.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The information we collect includes:
              </p>
              <ul className="mt-3 space-y-3 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground">Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &quot;crash dumps&quot;), and hardware settings).
                </li>
                <li>
                  <strong className="text-foreground">Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                </li>
                <li>
                  <strong className="text-foreground">Location Data.</strong> We collect location data such as information about your device&apos;s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                </li>
              </ul>

              <h4 className="mt-10 text-xl font-semibold text-foreground">
                Information collected from other sources
              </h4>
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> We may collect limited data from public databases, marketing partners, and other outside sources.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.
              </p>
            </article>

            {/* Section 2 */}
            <article id="section-2" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                2. How Do We Process Your Information?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
              </p>
              <ul className="mt-3 space-y-3 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground">To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.
                </li>
                <li>
                  <strong className="text-foreground">To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                </li>
                <li>
                  <strong className="text-foreground">To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                </li>
                <li>
                  <strong className="text-foreground">To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.
                </li>
                <li>
                  <strong className="text-foreground">To save or protect an individual&apos;s vital interest.</strong> We may process your information when necessary to save or protect an individual&apos;s vital interest, such as to prevent harm.
                </li>
              </ul>
            </article>

            {/* Section 3 */}
            <article id="section-3" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                3. What Legal Bases Do We Rely on to Process Your Information?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
              </p>

              <p className="mt-6 text-base md:text-lg text-foreground font-semibold">
                If you are located in the EU or UK, this section applies to you.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
              </p>
              <ul className="mt-3 space-y-3 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground">Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.{" "}
                  <a href="#section-8" className="text-primary underline underline-offset-4 hover:text-primary/80">
                    Click here
                  </a>{" "}
                  to learn more.
                </li>
                <li>
                  <strong className="text-foreground">Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                </li>
                <li>
                  <strong className="text-foreground">Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                </li>
                <li>
                  <strong className="text-foreground">Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                </li>
              </ul>

              <p className="mt-8 text-base md:text-lg text-foreground font-semibold">
                If you are located in Canada, this section applies to you.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.{" "}
                <a href="#section-8" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Click here
                </a>{" "}
                to learn more.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                <li>For investigations and fraud detection and prevention</li>
                <li>For business transactions provided certain conditions are met</li>
                <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                <li>If the information is publicly available and is specified by the regulations</li>
              </ul>
            </article>

            {/* Section 4 */}
            <article id="section-4" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                4. When and With Whom Do We Share Your Personal Information?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We may need to share your personal information in the following situations:
              </p>
              <ul className="mt-3 space-y-3 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground">Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                </li>
              </ul>
            </article>

            {/* Section 5 */}
            <article id="section-5" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                5. Do We Use Cookies and Other Tracking Technologies?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
            </article>

            {/* Section 6 */}
            <article id="section-6" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                6. How Long Do We Keep Your Information?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </article>

            {/* Section 7 */}
            <article id="section-7" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                7. How Do We Keep Your Information Safe?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>
            </article>

            {/* Section 8 */}
            <article id="section-8" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                8. What Are Your Privacy Rights?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section{" "}
                <a href="#section-12" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  &quot;How can you contact us about this notice?&quot;
                </a>{" "}
                below.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We will consider and act upon any request in accordance with applicable data protection laws.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:{" "}
                <a
                  href="https://ec.europa.eu/newsroom/article29/items/612080"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/newsroom/article29/items/612080
                </a>
                .
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If you are located in Switzerland, the contact details for the data protection authorities are available here:{" "}
                <a
                  href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.edoeb.admin.ch/edoeb/en/home.html
                </a>
                .
              </p>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section{" "}
                <a href="#section-12" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  &quot;How can you contact us about this notice?&quot;
                </a>{" "}
                below.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
              </p>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section{" "}
                <a href="#section-12" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  &quot;How can you contact us about this notice?&quot;
                </a>{" "}
                below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
              </p>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit{" "}
                <a
                  href="https://youradchoices.com/"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://youradchoices.com/
                </a>
                .
              </p>
            </article>

            {/* Section 9 */}
            <article id="section-9" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                9. Controls for Do-Not-Track Features
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
              </p>
            </article>

            {/* Section 10 */}
            <article id="section-10" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                10. Do California Residents Have Specific Privacy Rights?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
              </p>

              <h4 className="mt-10 text-xl font-semibold text-foreground">CCPA Privacy Notice</h4>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The California Code of Regulations defines a &quot;resident&quot; as:
              </p>
              <ol className="mt-3 space-y-2 list-decimal pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>every individual who is in the State of California for other than a temporary or transitory purpose and</li>
                <li>every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
              </ol>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                All other individuals are defined as &quot;non-residents.&quot;
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If this definition of &quot;resident&quot; applies to you, we must adhere to certain rights and obligations regarding your personal information.
              </p>

              <h4 className="mt-10 text-xl font-semibold text-foreground">
                What categories of personal information do we collect?
              </h4>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We have collected the following categories of personal information in the past twelve (12) months:
              </p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-foreground/10">
                <table className="w-full text-sm md:text-base text-left">
                  <thead className="bg-gray-50 border-b border-foreground/10">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-foreground w-1/4">Category</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Examples</th>
                      <th className="px-4 py-3 font-semibold text-foreground w-24">Collected</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/10">
                    {ccpaCategories.map((cat) => (
                      <tr key={cat.letter} className="align-top">
                        <td className="px-4 py-3 font-medium text-foreground">
                          {cat.letter} {cat.name}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground leading-relaxed">{cat.examples}</td>
                        <td className="px-4 py-3">
                          <span
                            className={
                              cat.collected === "YES"
                                ? "inline-flex items-center rounded-full bg-primary/15 text-primary font-semibold px-2.5 py-0.5 text-xs"
                                : "inline-flex items-center rounded-full bg-foreground/5 text-foreground/70 font-semibold px-2.5 py-0.5 text-xs"
                            }
                          >
                            {cat.collected}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
              </ul>

              <h4 className="mt-10 text-xl font-semibold text-foreground">
                How do we use and share your personal information?
              </h4>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                More information about our data collection and sharing practices can be found in this privacy notice.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                You may contact us by email at{" "}
                <a
                  href="mailto:info@vivify-technology.com"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  info@vivify-technology.com
                </a>
                , or by referring to the contact details at the bottom of this document.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
              </p>

              <h4 className="mt-10 text-xl font-semibold text-foreground">
                Will your information be shared with anyone else?
              </h4>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your personal information.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                VIVIFY Technology, Inc. has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. VIVIFY Technology, Inc. will not sell personal information in the future belonging to website visitors, users, and other consumers.
              </p>

              <h4 className="mt-10 text-xl font-semibold text-foreground">
                Your rights with respect to your personal data
              </h4>

              <p className="mt-4 text-base md:text-lg text-foreground font-semibold">
                Right to request deletion of the data — Request to delete
              </p>
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
              </p>

              <p className="mt-6 text-base md:text-lg text-foreground font-semibold">
                Right to be informed — Request to know
              </p>
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                Depending on the circumstances, you have a right to know:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>whether we collect and use your personal information;</li>
                <li>the categories of personal information that we collect;</li>
                <li>the purposes for which the collected personal information is used;</li>
                <li>whether we sell your personal information to third parties;</li>
                <li>the categories of personal information that we sold or disclosed for a business purpose;</li>
                <li>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
                <li>the business or commercial purpose for collecting or selling personal information.</li>
              </ul>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
              </p>

              <p className="mt-6 text-base md:text-lg text-foreground font-semibold">
                Right to Non-Discrimination for the Exercise of a Consumer&apos;s Privacy Rights
              </p>
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                We will not discriminate against you if you exercise your privacy rights.
              </p>

              <p className="mt-6 text-base md:text-lg text-foreground font-semibold">Verification process</p>
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
              </p>

              <p className="mt-6 text-base md:text-lg text-foreground font-semibold">Other privacy rights</p>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>You may object to the processing of your personal information.</li>
                <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
                <li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
                <li>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
              </ul>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                To exercise these rights, you can contact us by email at{" "}
                <a
                  href="mailto:info@vivify-technology.com"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  info@vivify-technology.com
                </a>
                , or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
              </p>
            </article>

            {/* Section 11 */}
            <article id="section-11" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                11. Do We Make Updates to This Notice?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed italic">
                <strong className="not-italic text-foreground">In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
              </p>
            </article>

            {/* Section 12 */}
            <article id="section-12" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                12. How Can You Contact Us About This Notice?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If you have questions or comments about this notice, you may email us at{" "}
                <a
                  href="mailto:info@vivify-technology.com"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  info@vivify-technology.com
                </a>{" "}
                or by post to:
              </p>
              <address className="mt-4 not-italic text-base md:text-lg text-foreground leading-relaxed">
                VIVIFY Technology, Inc.
                <br />
                161 Commerce Road
                <br />
                Suite 1
                <br />
                Boyton Beach, FL 33426
                <br />
                United States
              </address>
            </article>

            {/* Section 13 */}
            <article id="section-13" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                13. How Can You Review, Update, or Delete the Data We Collect From You?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request by contacting us at{" "}
                <a
                  href="mailto:info@vivify-technology.com"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  info@vivify-technology.com
                </a>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
