/* VIVIFY: Professional footer with contact info and company details */

import { Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                Contact Us
              </h3>
              <div className="space-y-4">
                <a href="tel:8882778370" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">888.277.8370</span>
                </a>
                <a href="mailto:info@vivify-technology.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">info@vivify-technology.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Center Column - Branding */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link href="/" className="inline-flex">
              <img
                src="/vivify-logo.webp"
                alt="VIVIFY"
                className="h-20 cursor-pointer"
              />
            </Link>
            <p className="text-center text-muted-foreground max-w-xs">
              Revolutionary energy technologies for a sustainable future
            </p>
          </div>

          {/* Right Column - Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/technology" className="block text-muted-foreground hover:text-primary transition-colors">
                Technology
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/impact" className="block text-muted-foreground hover:text-primary transition-colors">
                Impact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} VIVIFY. All rights reserved.</p>
            </div>

            <div className="flex justify-center">
              <div className="flex items-center gap-4">

                {/**Instagram**/}
                <a
                  href="https://www.instagram.com/vivify_tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--primary)"
                      d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047s2.39-.008 3.233-.046c2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281M12 16.108a4.108 4.108 0 1 1 0-8.215 4.108 4.108 0 0 1 0 8.215m4.271-7.418a.96.96 0 1 1 0-1.92.96.96 0 0 1 0 1.92M14.667 12a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5m.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654C4.009 14.445 4 14.173 4 12s.009-2.445.048-3.298c.134-2.908 1.748-4.521 4.654-4.653C9.556 4.009 9.827 4 12 4s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298"></path>
                  </svg>
                </a>

                {/**LinkedIn**/}
                <a
                  href="https://www.linkedin.com/company/vivifytechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--primary)"
                      d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5M8 19H5V8h3zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764M20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476z"></path>
                  </svg>
                </a>

                {/**Facebook**/}
                <a
                  href="https://www.facebook.com/profile.php?id=61586714503615"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--primary)"
                      d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5m-3 7h-1.924C13.461 7 13 7.252 13 7.889V9h3l-.238 3H13v8h-3v-8H8V9h2V7.077C10 5.055 11.064 4 13.461 4H16z"></path>
                  </svg>
                </a>

                {/**X**/}
                <a
                  href="https://x.com/VIVIFY_Tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="var(--primary)"
                      d="M11 4a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h28a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7zm2.086 9h7.937l5.637 8.01L33.5 13H36l-8.21 9.613L37.913 37H29.98l-6.541-9.293L15.5 37H13l9.309-10.896zm3.828 2 14.107 20h3.065L19.979 15z"></path>
                  </svg>
                </a>

                {/**YouTube**/}
                <a
                  href="https://www.youtube.com/channel/UCMOW8_QNtZRf23-kKmvnB_Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--primary)"
                      d="m10 9.333 5.333 2.662L10 14.667zM24 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5m-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0C4.326 6.3 4.02 7.87 4 12c.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0C19.674 17.7 19.98 16.13 20 12"></path>
                  </svg>
                </a>

                {/**Truth Social**/}
                <a
                  href="https://truthsocial.com/@VIVIFY_Tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    width="28"
                    height="28"
                    strokeMiterlimit="2"
                    clipRule="evenodd"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="var(--primary)"
                      d="M11 4h28a7 7 0 0 1 7 7v28a7 7 0 0 1-7 7H11a7 7 0 0 1-7-7V11a7 7 0 0 1 7-7m28.221 26.655h-7.322v6.657h7.322zM18.587 12.683h-7.322v6.657h7.322zm2.662 0v24.629h7.322V19.34h10.65v-6.657z"></path>
                  </svg>
                </a>

                {/**Rumble**/}
                <a
                  href="https://rumble.com/user/VIVIFY_Tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    width="28"
                    height="28"
                    strokeMiterlimit="2"
                    clipRule="evenodd"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="var(--primary)"
                      d="M11 4h28a7 7 0 0 1 7 7v28a7 7 0 0 1-7 7H11a7 7 0 0 1-7-7V11a7 7 0 0 1 7-7m26.25 14.976c-3.181-3.12-12.424-9.542-18.08-9.542-2.406 0-4.812.802-6.415 4.812-1.604 4.009-1.604 10.425-1.604 10.425s0 6.416 1.604 10.426c1.603 4.009 4.009 4.811 6.415 4.811 5.656 0 14.899-6.422 18.08-9.542 1.331-1.306 2.771-2.951 2.771-5.695s-1.44-4.389-2.771-5.695m-17.701 2.358c.167-1.629 1.861-2.645 3.358-1.98a33 33 0 0 1 5.873 3.384c1.307.945 1.307 2.921 0 3.866a33 33 0 0 1-5.873 3.384c-1.497.665-3.191-.351-3.358-1.98a31.3 31.3 0 0 1 0-6.674"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
