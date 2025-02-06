"use client"; 

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext"; // 🆕 Wishlist Context Import
import Image from "next/image"; 

type Product = {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
  discountPercentage: number;
};

const ProductDetails = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, wishlist } = useWishlist(); // 🆕 Wishlist functions

  // Calculate discounted price
  const discountedPrice = product.discountPercentage
    ? product.price - (product.price * product.discountPercentage) / 100
    : product.price;

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: discountedPrice,
      image: product.imagePath,
      quantity: 1,
    });
  };

  // Handle Add to Wishlist
  const handleAddToWishlist = () => {
    addToWishlist({
      id: product._id,
      name: product.name,
      price: discountedPrice,
      image: product.imagePath,
    });
  };

  const isWishlisted = wishlist.some((item) => item.id === product._id);

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-6">
        {/* Left Side - Product Image */}
        <div className="relative">
          {product.isFeaturedProduct && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              Featured
            </span>
          )}
          <Image 
            src={product.imagePath} 
            alt={product.name} 
            width={500} 
            height={500}
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>

        {/* Right Side - Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 text-sm mt-1">{product.category}</p>

          {/* Price Section */}
          <div className="mt-4">
            {product.discountPercentage > 0 ? (
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-red-500">${discountedPrice.toFixed(2)}</span>
                <span className="text-gray-400 line-through">${product.price}</span>
                <span className="text-green-600 text-sm">-{product.discountPercentage}% OFF</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            )}
          </div>

          {/* Stock Status */}
          <p className={`mt-2 text-sm font-medium ${product.stockLevel > 5 ? "text-green-600" : "text-red-600"}`}>
            {product.stockLevel > 5 ? "In Stock" : "Few left in stock!"}
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-700">{product.description}</p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button 
              onClick={handleAddToCart} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
            >
              Add to Cart
            </button>

            <button 
              onClick={handleAddToWishlist} 
              className={`py-3 px-6 rounded-lg shadow-md transition ${isWishlisted ? "bg-gray-500 text-white" : "bg-pink-500 hover:bg-pink-600 text-white"}`}
            >
              {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
