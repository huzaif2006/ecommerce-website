"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Removed clearCart

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          🛒 Your Shopping Cart
        </h1>

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
          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-4 gap-4 border-b pb-3 text-gray-700 font-semibold">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {/* Cart Items */}
            <ul>
              {cart.map((item) => {
                const price = Number(item.price) || 0;
                const subtotal = price * item.quantity;

                return (
                  <li
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center py-4 border-b"
                  >
                    {/* Product Image & Name */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg shadow-md object-cover w-20 h-20"
                      />
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                    </div>

                    {/* Price */}
                    <p className="text-gray-600">${price.toFixed(2)}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-gray-200 px-3 py-1 rounded-lg text-lg font-bold"
                      >
                        ➖
                      </button>
                      <p className="text-lg">{item.quantity}</p>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-gray-200 px-3 py-1 rounded-lg text-lg font-bold"
                      >
                        ➕
                      </button>
                    </div>

                    {/* Subtotal & Remove */}
                    <div className="flex justify-between items-center">
                      <p className="text-gray-700 font-semibold">
                        ${subtotal.toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-xl"
                      >
                        🗑️
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Cart Totals */}
            <div className="bg-yellow-100 p-6 rounded-lg mt-6">
              <h2 className="text-xl font-bold text-gray-800">Cart Totals</h2>
              <div className="flex justify-between mt-2">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-600">
                  $$
                  {cart
                    .reduce(
                      (acc, item) => acc + Number(item.price) * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between mt-2 font-semibold text-lg">
                <p className="text-gray-700">Total</p>
                <p className="text-yellow-600">
                  $
                  {cart
                    .reduce(
                      (acc, item) => acc + Number(item.price) * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <Link href="/checkout">
                <button className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
