import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0 z-50 bg-white'>
      <div className="py-2 px-[5%] md:px-0 shadow-2xl ">
        <div className="max-w-3xl mx-auto relative z-50 ">
          <div className="flex justify-between items-center text-black relative z-50">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800 cursor-pointer"><Link to={'/'}>KIS</Link></div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-6 text-lg font-normal">
              <Link href="/" className="hover:text-gray-400">Home</Link>
              <Link to="/about" className="hover:text-gray-400">About</Link>
              <Link to="/skill" className="hover:text-gray-400">Skill</Link>
              <Link to="/project" className="hover:text-gray-400">Project</Link>
            </nav>

            {/* Download Button (Desktop) */}
            <div className="hidden md:block">
              <button className="py-1 px-3 text-lg font-normal border border-dashed rounded-bl-lg hover:bg-gray-700 hover:text-white cursor-pointer">
                Download CV
              </button>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
              <button
                className="text-2xl focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation (Visible when isOpen is true) */}
          <div className={`fixed top-0 left-0 w-full flex flex-col gap-4 bg-white pt-10 pb-5 z-40 px-[5%] transform duration-500 lg:hidden shadow ${isOpen ? "translate-y-0" : "-translate-y-full"
            }`}>
            <nav className="flex flex-col items-center space-y-4 text-lg font-normal py-4 px-6 ">
              <a href="/" className="hover:text-gray-400">Home</a>
              <a href="/about" className="hover:text-gray-400">About</a>
              <a href="/skill" className="hover:text-gray-400">Skill</a>
              <a href="/project" className="hover:text-gray-400">Project</a>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
            </nav>

            {/* Mobile Download Button */}
            <div className="text-center">
              <button className="py-2 px-4 text-lg font-normal border border-dashed rounded-bl-lg hover:bg-gray-700 hover:text-white cursor-pointer">
                Download CV
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
