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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} VIVIFY. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
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
