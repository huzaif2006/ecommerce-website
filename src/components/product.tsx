import client from "@/sanity/sanityClient";
import Link from "next/link";
import Image from "next/image";



const Products = async () => {
    
// Define Product type
interface Product {
    _id: string;
    name: string;
    imagePath: string;
    price: number;
  }
  const products: Product[] = await client.fetch(`*[_type == 'product']`);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/shop/${product._id}`} key={product._id}>
            <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105">
              {/* Image Section */}
              <div className="w-full h-64 relative">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-75 transition duration-300"
                />
              </div>

              {/* Details Section */}
              <div className="p-4 flex flex-col items-center text-center">
                <h2 className="text-lg font-semibold text-gray-900 truncate w-full max-w-[250px]">
                  {product.name}
                </h2>
                <p className="text-xl font-bold text-gray-700 mt-2 transition duration-300 group-hover:text-gray-900">
                  ${Number(product.price).toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
