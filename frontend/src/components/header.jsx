import { useState } from "react";
import logo from "../assets/png/logo.png";

function Header({ activeSection, onNavigate }) {
  const resumeUrl =
    "https://1drv.ms/b/c/d9ef4d7cc45fdf1a/IQBcImFpzsMURoI2PmUosgb-AXN5Y3U-lpBZE6DnBYJY8X8?e=CjsKN7";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (section) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="relative w-full bg-gradient-to-r from-[#0b1a33] to-[#0f2547] shadow-md">
      <div className="px-4 md:px-[50px] py-4 flex items-center justify-between">
        {/* LEFT - Logo */}
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-white text-sm font-semibold border border-white/30 rounded-md px-3 py-2"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        {/* RIGHT - Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white">
          <button
            type="button"
            onClick={() => handleNavigate("about")}
            className={`transition-colors ${
              activeSection === "about"
                ? "text-blue-400"
                : "hover:text-blue-400"
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleNavigate("project")}
            className={`transition-colors ${
              activeSection === "project"
                ? "text-blue-400"
                : "hover:text-blue-400"
            }`}
          >
            Project
          </button>
          <button
            type="button"
            onClick={() => handleNavigate("certificate")}
            className={`transition-colors ${
              activeSection === "certificate"
                ? "text-blue-400"
                : "hover:text-blue-400"
            }`}
          >
            Certificate
          </button>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            Resume
          </a>
        </nav>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMenuOpen && (
        <nav className="md:hidden px-4 pb-4">
          <div className="bg-[#102746] border border-white/10 rounded-lg p-3 flex flex-col gap-2 text-white text-sm">
            <button
              type="button"
              onClick={() => handleNavigate("about")}
              className={`text-left px-2 py-2 rounded transition-colors ${
                activeSection === "about"
                  ? "bg-white/10 text-blue-400"
                  : "hover:bg-white/10"
              }`}
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNavigate("project")}
              className={`text-left px-2 py-2 rounded transition-colors ${
                activeSection === "project"
                  ? "bg-white/10 text-blue-400"
                  : "hover:bg-white/10"
              }`}
            >
              Project
            </button>
            <button
              type="button"
              onClick={() => handleNavigate("certificate")}
              className={`text-left px-2 py-2 rounded transition-colors ${
                activeSection === "certificate"
                  ? "bg-white/10 text-blue-400"
                  : "hover:bg-white/10"
              }`}
            >
              Certificate
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2 rounded hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
