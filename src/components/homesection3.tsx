export default function HomeSection3(){
    return(
        <>
        <div className="h-[48.563rem] bg-[#FFFFFF]">
        <div className="flex flex-col items-center line leading-10 mt-4">
          <h2 className="text-4xl font-medium">Top Picks For You</h2>
          <p>
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>

        <div className="flex justify-center  mt-14 ">
          {/* 1st image */}
          <div className=" h-[23.25rem] w-[17.938rem] mx-5 flex flex-col justify-between">
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
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className="h-10 flex justify-center items-center py-8">
          <a className=" text-lg underline underline-offset-8 " href="#">
            View More
          </a>
        </div>
      </div>
        </>
    )
}