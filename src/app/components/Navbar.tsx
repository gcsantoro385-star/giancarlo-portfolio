"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 backdrop-blur-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-blue-400 font-bold text-xl">
          Giancarlo Santoro
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-200 focus:outline-none md:hidden"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link href="/chat" className="hover:text-blue-400">Chat</Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="flex flex-col bg-gray-900 text-gray-200 font-medium p-4 space-y-3 md:hidden">
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link href="/chat" onClick={() => setOpen(false)}>Chat</Link></li>
        </ul>
      )}
    </nav>
  );
}
