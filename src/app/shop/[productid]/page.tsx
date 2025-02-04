import  client  from "@/sanity/sanityClient";
import ProductDetails from "./ProductDetails";
import Header from "@/components/header";

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

const ProductPage = async ({ params }: { params: Promise<{ productid: string }> }) => {
  const productid = (await params).productid; // ❌ params ko await karna zaroori nahi


  // Fetch product data from Sanity (Server-Side)
  const product: Product | null = await client.fetch(
    `*[_type == 'product' && _id == $productid][0]`,
    { productid }
  );

  if (!product) {
    return <div className="text-center text-2xl font-bold text-red-500 mt-10">Product Not Found</div>;
  }

  return(
    <>
    <Header/>
    <ProductDetails product={product} />
    </>
  ) ; // ✅ Client Component ko data pass kar rahe hain
};

export default ProductPage;
