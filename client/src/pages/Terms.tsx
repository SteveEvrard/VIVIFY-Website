import Seo from "@/components/Seo";

export default function Terms() {
  const tocItems = [
    { id: "section-1", label: "Agreement to Terms" },
    { id: "section-2", label: "Intellectual Property Rights" },
    { id: "section-3", label: "User Representations" },
    { id: "section-4", label: "Prohibited Activities" },
    { id: "section-5", label: "User Generated Contributions" },
    { id: "section-6", label: "Contribution License" },
    { id: "section-7", label: "Submissions" },
    { id: "section-8", label: "Site Management" },
    { id: "section-9", label: "Term and Termination" },
    { id: "section-10", label: "Modifications and Interruptions" },
    { id: "section-11", label: "Governing Law" },
    { id: "section-12", label: "Dispute Resolution" },
    { id: "section-13", label: "Corrections" },
    { id: "section-14", label: "Disclaimer" },
    { id: "section-15", label: "Limitations of Liability" },
    { id: "section-16", label: "Indemnification" },
    { id: "section-17", label: "User Data" },
    { id: "section-18", label: "Electronic Communications, Transactions, and Signatures" },
    { id: "section-19", label: "California Users and Residents" },
    { id: "section-20", label: "Miscellaneous" },
    { id: "section-21", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo
        title="Terms and Conditions"
        description="VIVIFY Technology, Inc. Terms and Conditions — the legally binding agreement governing your access to and use of our website."
        path="/terms"
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32"
        aria-labelledby="terms-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1536px]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Legal
            </p>
            <h1
              id="terms-hero-title"
              className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white"
            >
              Terms and <span className="text-primary">Conditions</span>
            </h1>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Last updated January 01, 2021
            </p>
            <p className="mt-8 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
              These Terms of Use constitute a legally binding agreement between you and VIVIFY Technology, Inc. concerning your access to and use of our website. Please read them carefully — by accessing the Site, you agree to be bound by them in full.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-gray-50"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Table of Contents */}
      <section
        id="toc"
        className="relative bg-gray-50 py-16 md:py-24 border-b border-foreground/10 scroll-mt-24"
        aria-labelledby="terms-toc-title"
      >
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1536px]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contents
            </p>
            <h2
              id="terms-toc-title"
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

      {/* Full Terms */}
      <section className="relative bg-white py-16 md:py-24" aria-labelledby="terms-full-title">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1536px]">
            <h2 id="terms-full-title" className="sr-only">
              Full Terms and Conditions
            </h2>

            {/* Section 1 */}
            <article id="section-1" className="scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                1. Agreement to Terms
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;) and VIVIFY Technology, Inc. (&quot;Company,&quot; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), concerning your access to and use of the{" "}
                <a
                  href="https://vivify-technology.com"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  https://vivify-technology.com
                </a>{" "}
                website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &ldquo;Site&rdquo;). We are registered in Florida, United States and have our registered office at 161 Commerce Road, Boyton Beach, FL 33426. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use.{" "}
                <strong className="text-foreground">
                  IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </strong>
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use from time to time. We will alert you about any changes by updating the &ldquo;Last updated&rdquo; date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The Site is intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the Site.
              </p>
            </article>

            {/* Section 2 */}
            <article id="section-2" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                2. Intellectual Property Rights
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &ldquo;Content&rdquo;) and the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site &ldquo;AS IS&rdquo; for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
              </p>
            </article>

            {/* Section 3 */}
            <article id="section-3" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                3. User Representations
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not under the age of 13; (3) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (4) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (5) you will not use the Site for any illegal or unauthorized purpose; and (6) your use of the Site will not violate any applicable law or regulation.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
              </p>
            </article>

            {/* Section 4 */}
            <article id="section-4" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                4. Prohibited Activities
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                As a user of the Site, you agree not to:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
                <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
                <li>Engage in unauthorized framing of or linking to the Site.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&rsquo;s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&ldquo;gifs&rdquo;), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &ldquo;spyware&rdquo; or &ldquo;passive collection mechanisms&rdquo; or &ldquo;pcms&rdquo;).</li>
                <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</li>
                <li>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
                <li>Copy or adapt the Site&rsquo;s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</li>
                <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</li>
                <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
                <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
              </ul>
            </article>

            {/* Section 5 */}
            <article id="section-5" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                5. User Generated Contributions
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The Site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.</li>
                <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.</li>
                <li>Your Contributions are not false, inaccurate, or misleading.</li>
                <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
                <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
                <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
                <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
                <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
                <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
                <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
                <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.</li>
              </ul>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.
              </p>
            </article>

            {/* Section 6 */}
            <article id="section-6" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                6. Contribution License
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                You and the Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
              </p>
            </article>

            {/* Section 7 */}
            <article id="section-7" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                7. Submissions
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (&quot;Submissions&quot;) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
              </p>
            </article>

            {/* Section 8 */}
            <article id="section-8" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                8. Site Management
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.
              </p>
            </article>

            {/* Section 9 */}
            <article id="section-9" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                9. Term and Termination
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                These Terms of Use shall remain in full force and effect while you use the Site.{" "}
                <strong className="text-foreground">
                  WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                </strong>
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
              </p>
            </article>

            {/* Section 10 */}
            <article id="section-10" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                10. Modifications and Interruptions
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.
              </p>
            </article>

            {/* Section 11 */}
            <article id="section-11" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                11. Governing Law
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of Florida applicable to agreements made and to be entirely performed within the State of Florida, without regard to its conflict of law principles.
              </p>
            </article>

            {/* Section 12 */}
            <article id="section-12" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                12. Dispute Resolution
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Any legal action of whatever nature brought by either you or us (collectively, the &ldquo;Parties&rdquo; and individually, a &ldquo;Party&rdquo;) shall be commenced or prosecuted in the state and federal courts located in Palm Beach County, Florida, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Terms of Use. In no event shall any claim, action, or proceeding brought by either Party related in any way to the Site be commenced more than one (1) years after the cause of action arose.
              </p>
            </article>

            {/* Section 13 */}
            <article id="section-13" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                13. Corrections
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
              </p>
            </article>

            {/* Section 14 */}
            <article id="section-14" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                14. Disclaimer
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </strong>{" "}
                WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE&rsquo;S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
              </p>
            </article>

            {/* Section 15 */}
            <article id="section-15" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                15. Limitations of Liability
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </strong>{" "}
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR $100.00 USD. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
              </p>
            </article>

            {/* Section 16 */}
            <article id="section-16" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                16. Indemnification
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&rsquo; fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
              </p>
            </article>

            {/* Section 17 */}
            <article id="section-17" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                17. User Data
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
              </p>
            </article>

            {/* Section 18 */}
            <article id="section-18" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                18. Electronic Communications, Transactions, and Signatures
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing.{" "}
                <strong className="text-foreground">
                  YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE.
                </strong>{" "}
                You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
              </p>
            </article>

            {/* Section 19 */}
            <article id="section-19" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                19. California Users and Residents
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
              </p>
            </article>

            {/* Section 20 */}
            <article id="section-20" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                20. Miscellaneous
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.
              </p>
            </article>

            {/* Section 21 */}
            <article id="section-21" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                21. Contact Us
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <address className="mt-4 not-italic text-base md:text-lg text-foreground leading-relaxed">
                VIVIFY Technology, Inc.
                <br />
                161 Commerce Road
                <br />
                Boyton Beach, FL 33426
                <br />
                United States
              </address>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Phone:{" "}
                <a href="tel:+15614089522" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  561-408-9522
                </a>
                <br />
                Fax: 561-408-9523
                <br />
                Email:{" "}
                <a
                  href="mailto:info@vivify-technology.com"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  info@vivify-technology.com
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
