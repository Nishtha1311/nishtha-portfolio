"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-black/80 backdrop-blur-lg text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Nishtha <span className="text-cyan-400">Portfolio</span>
        </h1>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
  <a href="#about" className="hover:text-cyan-400 transition">
    About
  </a>

  <a href="#projects" className="hover:text-cyan-400 transition">
    Projects
  </a>

  <a href="#certificates" className="hover:text-cyan-400 transition">
    Certificates
  </a>

  <a href="#contact" className="hover:text-cyan-400 transition">
    Contact
  </a>
</div>

        {/* Right Side */}
        <div className="hidden items-center gap-5 md:flex">

          <a
            href="https://github.com/Nishtha1311"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={22}
              className="hover:text-cyan-400 transition"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/nishtha-vatsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={22}
              className="hover:text-cyan-400 transition"
            />
          </a>

          <a
            href="/resume/Nishtha_Resume.pdf"
            download
            className="rounded-full bg-cyan-500 px-5 py-2 font-semibold transition hover:bg-cyan-400"
          >
            Resume
          </a>

        </div>

      </div>
    </nav>
  );
}