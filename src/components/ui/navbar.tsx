"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full relative">
        <nav className="w-full bg-white shadow fixed top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link href="/">
                  <span className="text-xl font-bold text-green-600 cursor-pointer">
                    Niafrang-Tour
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="/">
                  <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    Accueil
                  </span>
                </Link>
                <Link href="/attractions">
                  <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    Attractions
                  </span>
                </Link>
                <Link href="/activites">
                  <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    Activités
                  </span>
                </Link>
                <Link href="/evenements">
                  <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    Événements
                  </span>
                </Link>
                <Link href="/guide">
                  <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    Guide
                  </span>
                </Link>
                <Link href="/galerie">
                  <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    Galerie
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden bg-white shadow-md">
              <div className="space-y-2 py-4 px-4">
                <Link href="/">
                  <span className="block text-gray-700 hover:text-blue-600 cursor-pointer">
                    Accueil
                  </span>
                </Link>
                <Link href="/attractions">
                  <span className="block text-gray-700 hover:text-blue-600 cursor-pointer">
                    Attractions
                  </span>
                </Link>
                <Link href="/activites">
                  <span className="block text-gray-700 hover:text-blue-600 cursor-pointer">
                    Activités
                  </span>
                </Link>
                <Link href="/evenements">
                  <span className="block text-gray-700 hover:text-blue-600 cursor-pointer">
                    Événements
                  </span>
                </Link>
                <Link href="/guide">
                  <span className="block text-gray-700 hover:text-blue-600 cursor-pointer">
                    Guide
                  </span>
                </Link>
                <Link href="/galerie">
                  <span className="block text-gray-700 hover:text-blue-600 cursor-pointer">
                    Galerie
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="block text-gray-700 hover:text-blue-600 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
