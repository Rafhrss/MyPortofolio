"use client";
import { Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/#",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Project",
      link: "/#project",
    },
    {
      name: "Experience",
      link: "/#experience",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton href="/gallery" variant="primary">Gallery</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 w-full mb-4">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-white! hover:text-cyan-400 transition-colors text-sm! font-medium! py-2 font-mono!"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href="/gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                  Gallery
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}