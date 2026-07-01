"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NikeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NikeLogo = ({ white }) => (
    <svg
      width="60"
      height="22"
      viewBox="0 0 60 22"
      fill="currentColor"
      className={white ? "text-white" : "text-black"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6197 12.0791C14.9991 12.4982 13.5226 12.7059 12.2315 12.7059C10.6308 12.7059 9.32454 12.3808 8.41007 11.7306C3.77777 8.45792 8.01521 1.5177 8.49485 0.746499C6.45517 2.91803 4.36158 5.1907 2.71735 7.66806C-0.0539083 11.8997 -0.761864 15.9195 0.853898 18.4119C2.09903 20.3414 4.12539 21.3125 6.91422 21.3125C9.38873 21.3125 12.4664 20.5467 16.1182 19.0212L60 0.703755L59.9982 0.6875L16.6197 12.0791Z"
      />
    </svg>
  );

  const navItems = ["Home", "Career Areas", "Total Rewards", "Life@Nike", "Purpose"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* NIKE LOGO */}
        <div className="flex items-center">
          <Link href="#form">
            <NikeLogo white={!scrolled} />
          </Link>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item}
              href="#form"
              className={`text-sm font-medium transition-all duration-300 relative group ${
                scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200"
              }`}
            >
              {item}
              <span className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                scrolled ? "bg-black" : "bg-white"
              }`}></span>
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center space-x-3 sm:space-x-6">

          {/* LANGUAGE DROPDOWN - Hidden on mobile */}
          <div className="hidden sm:block relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className={`flex items-center space-x-2 text-sm ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                              <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25">
                              </path>
                          </svg>
              <span>Language</span>
              <svg width="12" height="12" fill="currentColor" className={`transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`}>
                <path d="M6 8l4-5H2z" />
              </svg>
            </button>

            {/* Language Dropdown Menu */}
            {languageDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 ${
                scrolled ? "bg-white" : "bg-black/95 backdrop-blur-lg"
              }`}>
                <div className="py-2">
                  {["English", "Español", "Français", "Deutsch", "Italiano", "日本語", "한국어", "中文"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguageDropdownOpen(false)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        scrolled 
                          ? "text-black hover:bg-gray-100" 
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SEARCH BUTTON */}
          <a
            href="#form"
            className={`px-3 sm:px-4 py-2 rounded-full flex items-center space-x-2 transition-all text-sm ${
              scrolled
                ? "bg-black text-white"
                : "bg-white/20 text-white backdrop-blur-lg"
            }`}
          >
            <svg width="16" height="16" fill="currentColor">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="font-medium hidden sm:inline">Careers</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${scrolled ? "text-black" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${scrolled ? "bg-white" : "bg-black/95 backdrop-blur-lg"}`}>
          <nav className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#form"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium py-2 transition-colors ${
                  scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#form"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-center px-4 py-3 rounded-full font-medium transition-all ${
                scrolled
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Search Careers
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
