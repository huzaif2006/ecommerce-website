import Header from "@/components/header";
import ShopBanner from "@/components/shopbanner";
import ShopBackground from "@/components/shopbackground";
import Products from "@/components/product";
function Shop() {
  return (
    <>
      <Header />

      {/* shop background */}

      <ShopBackground firstName="Shop" secondName="Home" thirdName="shop"/>
      

      <br />
      <br />

      
      {/* shopping section */}

      <Products/>
        

        {/* Buttons */}



      

      <ShopBanner/>
    </>
  );
}

export default Shop;
