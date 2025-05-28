import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              Steve<span className="text-blue">Fortuin</span>
            </h2>
            <p className="text-white/70 max-w-md">
              Designed and built with Loveable & React
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/70">
              &copy; {currentYear} Steve Fortuin. All rights reserved.
            </p>
            <p className="text-white/50 text-sm mt-1"></p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex gap-6 mb-6 md:mb-0">
            <a
              href="#home"
              className="text-white/70 hover:text-blue transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white/70 hover:text-blue transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white/70 hover:text-blue transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white/70 hover:text-blue transition-colors"
            >
              Contact
            </a>
          </nav>

          <p className="text-white/50 text-sm">
            <a href="#" className="hover:text-blue transition-colors">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-blue transition-colors ml-2">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
