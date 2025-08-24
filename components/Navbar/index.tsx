"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  {
    label: "Projects",
    dropdown: [
      { label: "Web Development", href: "/projects/web-development" },
      { label: "Mobile App Development", href: "/projects/mobile-app-development" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md border-b border-gray-100 text-gray-800">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 lg:px-0">
        {/* Logo */}
        <Link href="/">
          <span className="font-extrabold text-xl tracking-wide">
            Portfolio.
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.dropdown ? (
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary-medium transition">
                  {item.label}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <Link
                  href={item.href!}
                  className="text-sm font-medium hover:text-primary-medium transition"
                >
                  {item.label}
                </Link>
              )}

              {item.dropdown && openDropdown === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 bg-white shadow-lg border rounded-lg mt-2 py-2 w-48 z-50"
                >
                  {item.dropdown.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {/* Get Started (Desktop) */}
          <Link
            href="/get-started"
            className="ml-6 px-5 py-3 rounded-full bg-primary-dark text-white text-sm font-semibold shadow hover:bg-primary-dark/90 transition"
          >
            Get Started <GoArrowUpRight size={16} className="ml-2 inline-block text-white" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <Link href="/">
                <span className="font-extrabold text-xl tracking-wide">
                  Portfolio.
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item.label} className="border-b">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                        className="flex justify-between items-center w-full px-4 py-4 text-left text-base font-medium hover:bg-gray-50"
                      >
                        {item.label}
                        <ChevronRight
                          size={18}
                          className={`transition-transform ${openDropdown === item.label ? "rotate-90" : ""
                            }`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="bg-gray-50">
                          {item.dropdown.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="block px-6 py-3 text-sm hover:bg-gray-100 hover:text-primary-medium"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block px-4 py-4 text-base font-medium hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Get Started (Mobile Bottom CTA) */}
            <div className="p-4 border-t">
              <Link
                href="/get-started"
                className="block w-full text-center px-5 py-3 rounded-full bg-primary-dark text-white text-base font-semibold shadow hover:bg-primary-dark/90 transition"
              >
                Get Started <GoArrowUpRight size={16} className="ml-2 inline-block text-white" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
