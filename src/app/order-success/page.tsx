"use client";
import Link from "next/link";
import Header from "@/components/header";

export default function OrderSuccessPage() {
  return (
    <>
    <Header/>
    <div className="container mx-auto text-center py-10">
      <h1 className="text-3xl font-bold text-green-600">🎉 Order Placed Successfully!</h1>
      <p className="text-gray-600 mt-4">Thank you for your purchase. We will deliver your order soon.</p>
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          🏠 Go to Home
        </button>
      </Link>
    </div>
    </>
    
  );
}
