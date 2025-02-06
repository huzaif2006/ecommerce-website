"use client";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <><Header/>
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Your Wishlist </h1>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-gray-500 text-lg">No items in your wishlist.</p>
          <Link href="/shop">
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="w-full h-48 relative">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                
                {/* Fixed Price */}
                <p className="text-red-500 text-lg font-bold mt-1">
                  ${Number(item.price).toFixed(2)}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex justify-between items-center gap-2">
                  {/* <Link href={`/product/${item.id}`}>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                      View Product
                    </button>
                  </Link> */}

                  <button
                    onClick={() => addToCart({ id: item.id, name: item.name, price: Number(item.price), image: item.image, quantity: 1 })}
                    className="px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
                  >
                    Add to Cart 
                  </button>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="px-3 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
                  >
                    Remove 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
