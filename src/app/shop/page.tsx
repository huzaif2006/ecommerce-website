import Header from "@/components/header";
import ShopBanner from "@/components/shopbanner";
import ShopBackground from "@/components/shopbackground";
function Shop() {
  return (
    <>
      <Header />

      {/* shop background */}

      <ShopBackground firstName="Shop" secondName="Home" thirdName="My account"/>
      

      <br />
      <br />

      {/* Pannel */}

      <div className="h-[100px] bg-[#FAF4F4] flex justify-around items-center">
        <div className="">h</div>
        <div className="">h</div>
      </div>

      {/* shopping section */}
      <div className="min-h-screen bg-[#FFFFFF] pb-10">
        <div className="flex flex-wrap justify-center mt-14 gap-y-16">
          {/* 1st image */}
          <div className="h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[287px]"
                src="/image1.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Trentron modular sofa_3
              <p className="text-2xl font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* second image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[287px]"
                src="/image2.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Granite dinning table
              <p className="text-2xl font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* third image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image3.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Outdoor bar table
              <p className="text-2xl font-semibold">Rs. 28,000.00</p>
            </div>
          </div>

          {/* fourth image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image4.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Plain console
              <p className="text-2xl font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* fifve image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image12.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Plain console
              <p className="text-2xl font-semibold">Rs. 21,000.00</p>
            </div>
          </div>

          {/* six image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image13.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Reclaimed Coffe Table
              <p className="text-2xl font-semibold">Rs. 20,000.00</p>
            </div>
          </div>

          {/* seven image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image14.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
             Reclaimed teak Sidebar
              <p className="text-2xl font-semibold">Rs. 29,000.00</p>
            </div>
          </div>

          {/* eight image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image15.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Outdoor sofa set
              <p className="text-2xl font-semibold">Rs. 35,000.00</p>
            </div>
          </div>

          {/* nine image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image16.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Kent coffee table
              <p className="text-2xl font-semibold">Rs. 19,000.00</p>
            </div>
          </div>

          {/* ten image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image17.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Maya sofa three seater
              <p className="text-2xl font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* eleven image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image19.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
             Grain coffe table
              <p className="text-2xl font-semibold">Rs. 30,000.00</p>
            </div>
          </div>

          {/* twelve image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image20.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Bella chair and Table
              <p className="text-2xl font-semibold">Rs. 40,000.00</p>
            </div>
          </div>

          {/* thirteen image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image21.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Round coffee table
              <p className="text-2xl font-semibold">Rs. 15,500.00</p>
            </div>
          </div>

          {/* fourteen image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image22.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              SJP-0825
              <p className="text-2xl font-semibold">Rs. 35,000.00</p>
            </div>
          </div>

          {/* fifteen image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/hackathontable.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Granite site table
              <p className="text-2xl font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* sixteen image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
            <div>
              <img
                className="w-[287px] h-[230px]"
                src="/image5.png"
                alt="sofa"
              />
            </div>
            <div className="h-[71px] w-[194px] text-lg font-normal leading-10">
              Asgaard Sofa
              <p className="text-2xl font-semibold">Rs. 40,000.00</p>
            </div>
          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-center items-center pt-24 pb-5 space-x-2 sm:space-x-4 md:space-x-8">
    <button className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] bg-[#FBEBB5] rounded-xl">1</button>
    <button className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] bg-[#FFF9E5] rounded-xl">2</button>
    <button className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] bg-[#FFF9E5] rounded-xl">3</button>
    <button className="h-[40px] w-[70px] sm:h-[50px] sm:w-[80px] md:h-[60px] md:w-[98px] bg-[#FFF9E5] rounded-xl">Next</button>
</div>


      </div>

      <ShopBanner/>
    </>
  );
}

export default Shop;
