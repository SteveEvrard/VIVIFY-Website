/* VIVIFY: Professional header with lime green branding and corporate navigation */

import { Button } from "@/components/ui/button";
import { buildContactMailto } from "@/lib/contactMailto";
import { ChevronDown, Menu, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const SHOW_FRAMEWORK_PAGE = false;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsroomOpen, setNewsroomOpen] = useState(false);
  const [newsroomMobileOpen, setNewsroomMobileOpen] = useState(false);
  const [location] = useLocation();

  const normalizePath = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  const isActive = (href: string) => normalizePath(location) === normalizePath(href);
  const isInNewsroom =
    normalizePath(location).startsWith("/news") ||
    normalizePath(location) === "/media-coverage";

  // Auto-expand the mobile Newsroom group when the user is on a Newsroom page.
  useEffect(() => {
    if (isInNewsroom) setNewsroomMobileOpen(true);
  }, [isInNewsroom]);

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
    // Close menus after navigation.
    setMobileMenuOpen(false);
    setNewsroomOpen(false);
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
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-muted-foreground">
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
            <Link
              href="/safety"
              aria-current={isActive("/safety") ? "page" : undefined}
              className={`transition-colors font-medium hover:text-primary ${isActive("/safety") ? "text-primary" : ""}`}
            >
              Safety
            </Link>
            <Link
              href="/leadership"
              aria-current={isActive("/leadership") ? "page" : undefined}
              className={`transition-colors font-medium hover:text-primary ${isActive("/leadership") ? "text-primary" : ""}`}
            >
              Leadership
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
            <div
              className="relative"
              onMouseEnter={() => setNewsroomOpen(true)}
              onMouseLeave={() => setNewsroomOpen(false)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setNewsroomOpen(false);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") setNewsroomOpen(false);
              }}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={newsroomOpen}
                onClick={() => setNewsroomOpen((v) => !v)}
                onFocus={() => setNewsroomOpen(true)}
                className={`flex items-center gap-1 transition-colors font-medium hover:text-primary ${isInNewsroom ? "text-primary" : ""}`}
              >
                Newsroom
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${newsroomOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {newsroomOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full min-w-[12rem] rounded-md border border-gray-200 bg-white shadow-lg py-2 z-50"
                >
                  <Link
                    href="/news"
                    role="menuitem"
                    aria-current={isActive("/news") ? "page" : undefined}
                    className={`block px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors ${isActive("/news") ? "text-primary" : "text-muted-foreground"}`}
                  >
                    Press Releases
                  </Link>
                  <Link
                    href="/media-coverage"
                    role="menuitem"
                    aria-current={isActive("/media-coverage") ? "page" : undefined}
                    className={`block px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors ${isActive("/media-coverage") ? "text-primary" : "text-muted-foreground"}`}
                  >
                    Media Coverage
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/faq"
              aria-current={isActive("/faq") ? "page" : undefined}
              className={`transition-colors font-medium hover:text-primary ${isActive("/faq") ? "text-primary" : ""}`}
            >
              FAQ
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
              className="xl:hidden text-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-4 space-y-3 text-muted-foreground">
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
            <Link
              href="/safety"
              className="block hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Safety
            </Link>
            <Link
              href="/leadership"
              className="block hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership
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
            <div>
              <button
                type="button"
                aria-expanded={newsroomMobileOpen}
                aria-controls="mobile-newsroom-submenu"
                onClick={() => setNewsroomMobileOpen((v) => !v)}
                className={`w-full flex items-center justify-between transition-colors font-medium hover:text-primary ${isInNewsroom ? "text-primary" : ""}`}
              >
                <span>Newsroom</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${newsroomMobileOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {newsroomMobileOpen && (
                <div
                  id="mobile-newsroom-submenu"
                  className="mt-3 ml-2 pl-4 border-l-2 border-primary/40 space-y-3"
                >
                  <Link
                    href="/news"
                    aria-current={isActive("/news") ? "page" : undefined}
                    className={`block hover:text-primary transition-colors font-medium ${isActive("/news") ? "text-primary" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Press Releases
                  </Link>
                  <Link
                    href="/media-coverage"
                    aria-current={isActive("/media-coverage") ? "page" : undefined}
                    className={`block hover:text-primary transition-colors font-medium ${isActive("/media-coverage") ? "text-primary" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Media Coverage
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/faq"
              className="block hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
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
