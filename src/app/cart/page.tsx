"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-lg">Your cart is empty.</p>
          <Link
            href="/shop"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            🛍️ Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 max-w-4xl mx-auto">
          <ul className="divide-y divide-gray-300">
            {cart.map((item) => {
              const price = Number(item.price); // ✅ Ensure price is a number

              return (
                <li key={item.id} className="flex flex-col md:flex-row items-center justify-between py-4 space-y-4 md:space-y-0">
                  {/* Product Image */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg shadow-md object-cover w-20 h-20"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-center md:text-left">{item.name}</h2>
                      <p className="text-gray-600 text-center md:text-left">${price.toFixed(2)}</p> {/* ✅ Fixed */}
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg shadow-md transition w-full md:w-auto"
                  >
                    ❌ Remove
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Cart Actions */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <button
              onClick={clearCart}
              className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-3 rounded-lg shadow-md transition w-full md:w-auto"
            >
              🗑️ Clear Cart
            </button>
            <Link href="/checkout" className="w-full md:w-auto">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition w-full md:w-auto">
                ✅ Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
