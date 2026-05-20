import Seo from "@/components/Seo";

type Cookie = {
  name: string;
  purpose: string;
  provider: string;
  service: string;
  country: string;
  type: string;
  expires: string;
};

export default function Cookies() {
  const essentialCookies: Cookie[] = [
    {
      name: "__tlbcpv",
      purpose: "Used to record unique visitor views of the consent banner.",
      provider: ".termly.io",
      service: "Termly View Service Privacy Policy",
      country: "United States",
      type: "http_cookie",
      expires: "1 year",
    },
  ];

  const analyticsCookies: Cookie[] = [
    {
      name: "_ga",
      purpose:
        "It records a particular ID used to come up with data about website usage by the user. It is a HTTP cookie that expires after 2 years.",
      provider: ".vivify-technology.com",
      service: "Google Analytics View Service Privacy Policy",
      country: "United States",
      type: "http_cookie",
      expires: "1 year 11 months 29 days",
    },
    {
      name: "10831333105/",
      purpose: "—",
      provider: "vivify-technology.com",
      service: "—",
      country: "United States",
      type: "pixel_tracker",
      expires: "session",
    },
    {
      name: "_ga_#",
      purpose:
        "Used to distinguish individual users by means of designation of a randomly generated number as client identifier, which allows calculation of visits and sessions.",
      provider: ".vivify-technology.com",
      service: "Google Analytics View Service Privacy Policy",
      country: "United States",
      type: "http_cookie",
      expires: "1 year 11 months 29 days",
    },
    {
      name: "_gat#",
      purpose: "Enables Google Analytics regulate the rate of requesting. It is a HTTP cookie type that lasts for a session.",
      provider: ".vivify-technology.com",
      service: "Google Analytics View Service Privacy Policy",
      country: "United States",
      type: "http_cookie",
      expires: "1 minute",
    },
    {
      name: "_gid",
      purpose:
        "Keeps an entry of unique ID which is then used to come up with statistical data on website usage by visitors. It is a HTTP cookie type and expires after a browsing session.",
      provider: ".vivify-technology.com",
      service: "Google Analytics View Service Privacy Policy",
      country: "United States",
      type: "http_cookie",
      expires: "1 day",
    },
  ];

  const advertisingCookies: Cookie[] = [
    {
      name: "_gcl_au",
      purpose: "Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.",
      provider: ".vivify-technology.com",
      service: "AdSense View Service Privacy Policy",
      country: "United States",
      type: "http_cookie",
      expires: "2 months 29 days",
    },
    {
      name: "test_cookie",
      purpose: "A session cookie used to check if the user's browser supports cookies.",
      provider: ".doubleclick.net",
      service: "DoubleClick View Service Privacy Policy",
      country: "United States",
      type: "server_cookie",
      expires: "15 minutes",
    },
    {
      name: "ga-audiences",
      purpose:
        "Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor's online behaviour across websites.",
      provider: "vivify-technology.com",
      service: "AdWords View Service Privacy Policy",
      country: "United States",
      type: "pixel_tracker",
      expires: "session",
    },
  ];

  const renderCookieCard = (cookie: Cookie) => (
    <div
      key={cookie.name}
      className="rounded-xl border border-foreground/10 bg-white p-6 shadow-sm"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-foreground/10 pb-3">
        <code className="text-base md:text-lg font-mono font-bold text-foreground break-all">
          {cookie.name}
        </code>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {cookie.type}
        </span>
      </div>
      <p className="mt-4 text-base text-muted-foreground leading-relaxed">{cookie.purpose}</p>
      <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
        <div className="flex flex-col">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Provider
          </dt>
          <dd className="mt-1 text-foreground font-mono break-all">{cookie.provider}</dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Service
          </dt>
          <dd className="mt-1 text-foreground">{cookie.service}</dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Country
          </dt>
          <dd className="mt-1 text-foreground">{cookie.country}</dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Expires in
          </dt>
          <dd className="mt-1 text-foreground">{cookie.expires}</dd>
        </div>
      </dl>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo
        title="Cookie Policy"
        description="VIVIFY Technology, Inc. Cookie Policy — how we use cookies and similar tracking technologies on our website."
        path="/cookies"
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32"
        aria-labelledby="cookies-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1536px]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Legal
            </p>
            <h1
              id="cookies-hero-title"
              className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white"
            >
              Cookie <span className="text-primary">Policy</span>
            </h1>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Last updated August 02, 2022
            </p>
            <p className="mt-8 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
              This Cookie Policy explains how VIVIFY Technology, Inc. (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our websites at{" "}
              <a
                href="https://vivify-technology.com"
                className="underline underline-offset-4 hover:text-primary"
              >
                https://vivify-technology.com
              </a>
              {" "}(&quot;Websites&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them. In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-white"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Body */}
      <section className="relative bg-white py-16 md:py-24" aria-labelledby="cookies-body-title">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1536px]">
            <h2 id="cookies-body-title" className="sr-only">
              Cookie Policy Details
            </h2>

            <article id="what-are-cookies" className="scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                What are cookies?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Cookies set by the website owner (in this case, VIVIFY Technology, Inc.) are called &quot;first party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third party cookies&quot;. Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
            </article>

            <article id="why-cookies" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Why do we use cookies?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit).
              </p>
            </article>

            <article id="control-cookies" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                How can I control cookies?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser&apos;s help menu for more information.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit{" "}
                <a
                  href="https://youradchoices.com/"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://youradchoices.com/
                </a>{" "}
                or{" "}
                <a
                  href="https://www.youronlinechoices.com"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youronlinechoices.com
                </a>
                . The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit).
              </p>
            </article>

            <article id="essential-cookies" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Essential website cookies
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.
              </p>
              <div className="mt-6 grid gap-4">{essentialCookies.map(renderCookieCard)}</div>
            </article>

            <article id="analytics-cookies" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Analytics and customization cookies
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.
              </p>
              <div className="mt-6 grid gap-4">{analyticsCookies.map(renderCookieCard)}</div>
            </article>

            <article id="advertising-cookies" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Advertising cookies
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
              </p>
              <div className="mt-6 grid gap-4">{advertisingCookies.map(renderCookieCard)}</div>
            </article>

            <article id="web-beacons" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                What about other tracking technologies, like web beacons?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
              </p>
            </article>

            <article id="flash-cookies" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Do you use Flash cookies or Local Shared Objects?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Websites may also use so-called &quot;Flash Cookies&quot; (also known as Local Shared Objects or &quot;LSOs&quot;) to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations. If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to &quot;information&quot; on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time). Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.
              </p>
            </article>

            <article id="targeted-advertising" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Do you serve targeted advertising?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other details that directly identify you unless you choose to provide these.
              </p>
            </article>

            <article id="updates" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                How often will you update this Cookie Policy?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </article>

            <article id="contact" className="mt-16 scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Where can I get further information?
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies or other technologies, please email us at{" "}
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
                Boyton Beach, FL 33426
                <br />
                United States
              </address>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Phone:{" "}
                <a
                  href="tel:+18882778370"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  888.277.8370
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
