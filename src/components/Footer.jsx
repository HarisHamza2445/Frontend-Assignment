import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-700">
        {/* Left: Logo or Brand */}
        <div className="text-lg font-semibold">Haris.dev</div>

        {/* Middle: Links (optional) */}
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Projects</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-black">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Haris Hamza. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
