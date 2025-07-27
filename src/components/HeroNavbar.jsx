import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Link } from "react-router-dom";

export default function HeroNavbar() {
  return (
    <Navbar className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg px-4">
      <NavbarBrand>
        <span className="text-white font-bold text-xl">Haris.Dev</span>
      </NavbarBrand>

      {/* Center links: Home, About, Contact Us */}
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarItem>
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right buttons: Login, Sign Up */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/login">
            <button className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
              Login
            </button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/signup">
            <button className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
              Sign Up
            </button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
