import { useWishlist } from "@/context/WishlistContext";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductProps) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some((item) => item.id === id);

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <Link href={`/product/${id}`}>
        <Image src={image} alt={name} width={200} height={200} className="rounded-md" />
      </Link>
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">${price}</p>

      {/* Wishlist Button */}
      {isInWishlist ? (
        <button
          onClick={() => removeFromWishlist(id)}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Remove from Wishlist
        </button>
      ) : (
        <button
          onClick={() => addToWishlist({ id, name, price, image })}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add to Wishlist
        </button>
      )}
    </div>
  );
}
