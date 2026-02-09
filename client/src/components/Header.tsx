/* VIVIFY: Professional header with lime green branding and corporate navigation */

import { Button } from "@/components/ui/button";
import { buildContactMailto } from "@/lib/contactMailto";
import { Menu, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const SHOW_FRAMEWORK_PAGE = false;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const normalizePath = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  const isActive = (href: string) => normalizePath(location) === normalizePath(href);

  const contactHref = buildContactMailto({
    subject: "VIVIFY — Clean Energy Intelligence Inquiry",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I'm interested in learning more about VIVIFY’s Renewable Infrastructure Framework (clean energy, data, smart grids, and AI) for an upcoming project.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Project type (city / mobility / data center / industrial / mixed-use):",
      "Project details:",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  useEffect(() => {
    // Close the mobile menu after navigation.
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <img 
              src="/vivify-logo.webp" 
              alt="VIVIFY" 
              className="h-12 md:h-16 cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-muted-foreground">
            <Link
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={`transition-colors font-medium hover:text-primary ${isActive("/") ? "text-primary" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/technology"
              aria-current={isActive("/technology") ? "page" : undefined}
              className={`transition-colors font-medium hover:text-primary ${isActive("/technology") ? "text-primary" : ""}`}
            >
              Technology
            </Link>
            <Link
              href="/about"
              aria-current={isActive("/about") ? "page" : undefined}
              className={`transition-colors font-medium hover:text-primary ${isActive("/about") ? "text-primary" : ""}`}
            >
              About
            </Link>
            <Link
              href="/applications"
              aria-current={isActive("/applications") ? "page" : undefined}
              className={`transition-colors font-medium hover:text-primary ${isActive("/applications") ? "text-primary" : ""}`}
            >
              Applications
            </Link>
            {SHOW_FRAMEWORK_PAGE && (
              <Link
                href="/framework"
                aria-current={isActive("/framework") ? "page" : undefined}
                className={`transition-colors font-medium hover:text-primary ${isActive("/framework") ? "text-primary" : ""}`}
              >
                Framework
              </Link>
            )}
            <Link
              href="/news"
              aria-current={isActive("/news") ? "page" : undefined}
              className={`transition-colors font-medium hover:text-primary ${isActive("/news") ? "text-primary" : ""}`}
            >
              News
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <a href="tel:8882778370" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">888.277.8370</span>
            </a>
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-black font-semibold"
              asChild
            >
              <a href={contactHref}>Contact</a>
            </Button>
            <button
              className="lg:hidden text-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-3 text-muted-foreground">
            <Link
              href="/"
              className="block hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/technology"
              className="block hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/about"
              className="block hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/applications"
              className="block hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Applications
            </Link>
            {SHOW_FRAMEWORK_PAGE && (
              <Link
                href="/framework"
                className="block hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Framework
              </Link>
            )}
            <Link
              href="/news"
              className="block hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <a href="tel:8882778370" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>888.277.8370</span>
            </a>
            <a href={contactHref} className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@vivify-technology.com</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
