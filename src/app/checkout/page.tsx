"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  // Form State
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // ✅ Handle Order Submission (Updated)
  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.address ||
      !userInfo.phone
    ) {
      alert("Please fill all the fields.");
      return;
    }

    setLoading(true);

    // ✅ Generate Order ID
    const orderId = Math.floor(Math.random() * 1000000); // Simple random order ID

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userInfo.name,
          email: userInfo.email,
          orderId, // New Order ID
          total: cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          ),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        clearCart();
        setTimeout(() => {
          router.push("/order-success");
        }, 2000);
      } else {
        console.error("Email sending failed:", data.error);
        alert("Failed to send confirmation email.");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 🛒 Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Your Order
            </h2>
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <ul className="divide-y">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between py-4"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-md"
                      />
                      <span className="font-medium text-gray-800">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <p className="text-lg font-bold mt-4">
              Total: ${" "}
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>

          {/* 📋 User Details Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Billing Details
            </h2>
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={userInfo.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userInfo.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={userInfo.address}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={userInfo.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* ✅ Confirm Order Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                {loading ? "Processing..." : "Confirm Order"}
              </button>
            </form>

            {/* ✅ Success Message */}
            {success && (
              <p className="text-green-600 mt-4 text-center">
                ✅ Order confirmed! Email sent.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
