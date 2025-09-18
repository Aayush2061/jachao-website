import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "features", "screenshots", "download"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo added here */}
            <div className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <Image
                  src="/logo.jpg" // Path to your logo in public folder
                  alt="Jachao Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">Jachao</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`${
                activeSection === "home"
                  ? "text-rose-500 font-semibold"
                  : "text-gray-300"
              } hover:text-rose-500 transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`${
                activeSection === "about"
                  ? "text-rose-500 font-semibold"
                  : "text-gray-300"
              } hover:text-rose-500 transition-colors`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`${
                activeSection === "features"
                  ? "text-rose-500 font-semibold"
                  : "text-gray-300"
              } hover:text-rose-500 transition-colors`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("screenshots")}
              className={`${
                activeSection === "screenshots"
                  ? "text-rose-500 font-semibold"
                  : "text-gray-300"
              } hover:text-rose-500 transition-colors`}
            >
              Screenshots
            </button>
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-rose-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.jachao.app"
              className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition-colors"
            >
              Download
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("home")}
                className={`${
                  activeSection === "home"
                    ? "text-rose-500 font-semibold"
                    : "text-gray-300"
                } block px-3 py-2 hover:text-rose-500 w-full text-left`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`${
                  activeSection === "about"
                    ? "text-rose-500 font-semibold"
                    : "text-gray-300"
                } block px-3 py-2 hover:text-rose-500 w-full text-left`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className={`${
                  activeSection === "features"
                    ? "text-rose-500 font-semibold"
                    : "text-gray-300"
                } block px-3 py-2 hover:text-rose-500 w-full text-left`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("screenshots")}
                className={`${
                  activeSection === "screenshots"
                    ? "text-rose-500 font-semibold"
                    : "text-gray-300"
                } block px-3 py-2 hover:text-rose-500 w-full text-left`}
              >
                Screenshots
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.jachao.app"
                className="block px-3 py-2 text-rose-500 font-medium"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
