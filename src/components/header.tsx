"use client";

import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const cartItemCount = cart.length;
  const { wishlist } = useWishlist();

  return (
    <header className="">
      <div className="flex justify-between items-center px-4 py-4 lg:px-20">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-800">
          <Link href="/">hello</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 font-semibold text-gray-700">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/shop" className="hover:text-black">
            Shop
          </Link>
          <Link href="/about" className="hover:text-black">
            About
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden lg:flex space-x-6 text-lg text-gray-700">
          <Link href="/myaccount" className="hover:text-black">
            <FaRegUser className="text-xl" />
          </Link>
          <Link href="#" className="hover:text-black">
            <FiSearch className="text-xl" />
          </Link>
          <Link href="/wishlist" className="relative">
            <GoHeart className="text-xl" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-[6px] py-[2px] rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative hover:text-black">
            <AiOutlineShoppingCart className="text-xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 text-xs text-white bg-red-600 rounded-full px-1.5 py-0.5 shadow-md min-w-[18px] text-center">
                {cartItemCount}
              </span>
            )}
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
          <nav className="flex flex-col space-y-4 items-center font-semibold text-gray-700">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black"
            >
              Shop
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black"
            >
              Contact
            </Link>
          </nav>
          <div className="flex justify-center space-x-6 mt-4 text-lg text-gray-700">
            <Link
              href="/myaccount"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black"
            >
              <FaRegUser className="text-xl" />
            </Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black"
            >
              <FiSearch className="text-xl" />
            </Link>

            <Link href="/wishlist" className="relative">
              <GoHeart className="text-xl" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-[6px] py-[2px] rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="relative hover:text-black"
            >
              <AiOutlineShoppingCart className="text-xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-3 text-xs text-white bg-red-600 rounded-full px-1.5 py-0.5 shadow-md min-w-[18px] text-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
