import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "home" },
    { href: "#experience", label: "experience" },
    { href: "#project", label: "project" },
    { href: "#resume", label: "resume" },
  ];

  return (
    <header className="header-desing text-white shadow-lg sticky top-0 z-50">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      ></link>

      {/* HEADER CONTAINER */}
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LEFT SIDE - NAME */}
        <div className="flex items-left space-x-1">
          <h1 className=" font-bold">LingaPrabhu S</h1>
          <span className=" font-light"> / </span>
          <h1 className=" font-bold">Portfolio</h1>
        </div>

        {/* RIGHT SIDE - NAV LINKS (DESKTOP) */}
        <nav className="hidden md:flex space-x-8 pr-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#e4f65a] transition text-gray-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden border-gray-700">
          {navLinks.map((link) => (
            <a
  key={link.label}
  href={link.href}
  onClick={() => setOpen(false)}
  className="block px-4 py-2 border-b border-gray-700 hover:text-[#e4f65a] transition"
>
  {link.label}
</a>

          ))}
        </div>
      )}
    </header>
  );
}
