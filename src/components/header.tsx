"use client";

import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header >
        <div className="flex justify-between items-center px-4 py-4 lg:px-20">
          {/* Logo */}
          <div className="text-lg font-bold">
            <Link href="/">hello</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 font-semibold">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex space-x-6 text-lg">
            <Link href="/myaccount">
              <FaRegUser />
            </Link>
            <Link href="/search">
              <FiSearch />
            </Link>
            <Link href="/whishlist">
              <GoHeart />
            </Link>
            <Link href="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-100 py-4">
            <nav className="flex flex-col space-y-4 items-center font-semibold">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
            <div className="flex justify-center space-x-6 mt-4 text-lg">
              <Link href="/myaccount" onClick={() => setIsMenuOpen(false)}>
                <FaRegUser />
              </Link>
              <Link href="/search" onClick={() => setIsMenuOpen(false)}>
                <FiSearch />
              </Link>
              <Link href="/whishlist" onClick={() => setIsMenuOpen(false)}>
                <GoHeart />
              </Link>
              <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                <AiOutlineShoppingCart />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
