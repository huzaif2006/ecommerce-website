import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import HomeSection3 from "@/components/homesection3";
function Home() {
  return (
    <>
      <div className="bg-peach h-[900px]">
        <Header />

        {/* hero section */}
        <div className=" flex justify-evenly items-center">
          <div className="w-[27.5rem] h-[17.25rem] flex justify-center items-center font-semibold">
            <div className=" text-6xl leading-relaxed ">
              <p className="">Rocket single</p>
              <p>seater</p>
              <Link
                className="underline underline-offset-8 decoration-solid text-2xl"
                href="#"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className=" ">
            <Image
              src="/hackathonsofa.png"
              alt="heroImage"
              width={800}
              height={1000}
            />
          </div>
        </div>
      </div>

      {/* second section */}

      <div className="h-[42rem] bg-[#FAFAF4] flex justify-evenly  ">
        <div className=" w-[37.813rem] h-[35.125rem]">
          <Image
            src="/hackathontable.png"
            alt="table"
            width={400}
            height={300}
          />
          <p className="text-3xl font-medium">Side Table</p>
          <p className="underline  underline-offset-8">View More</p>
        </div>

        <div className=" w-[37.813rem] h-[35.125rem]">
          <Image src="/sofay.png" alt="table" width={380} height={300} />
          <p className="text-3xl font-medium">Side Table</p>
          <p className="underline underline-offset-8">View More</p>
        </div>
      </div>

      {/* third section */}

      <HomeSection3 />

      {/* fourth section */}
      <div className="h-[39.938rem]  bg-[#FFF9E5] flex justify-evenly items-center">
        <div className="">
          <Image src="/image5.png" alt="image" width={850} height={200} />
        </div>
        <div className="w-[331px] h-[200px] flex flex-col justify-between items-center">
          <p className="text-xl font-medium">New Arrivals</p>
          <p className="text-4xl font-bold">Asgaard sofa</p>
          <button className="w-[255px] h-[64px]  border-black border-[1px] text-xl">
            Order Now
          </button>
        </div>
      </div>

      {/*fifth section  */}
      <div className="h-[850px] bg-[#FFFFFF]">
        <div className="flex flex-col items-center py-4 gap-y-3">
          <h2 className="text-3xl font-medium">Our Blogs</h2>
          <p className="text-gray-500">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>

        <div className="flex flex-col items-center py-9">
          <div className=" h-[550px] w-[1240px]  flex justify-between">
            <div className="flex flex-col items-center justify-center w-[393px] h-[520px] ">
              <div>
                <img
                  className="h-[393px] w-[393px] rounded-2xl"
                  src="/image6.jpg"
                  alt="img"
                />
              </div>

              <div className="leading-10 mt-3 flex flex-col items-center">
                <p className=" font-normal">
                  Going all-in with millennial design
                </p>

                <button className="underline underline-offset-8 font-semibold ">
                  Read More
                </button>

                <div className="flex items-center font-medium">
                  <span className="flex items-center mr-3">
                    <FaRegClock />5 min
                  </span>
                  <span className="flex items-center">
                    <SlCalender />
                    12<sup>th</sup> Oct 2022
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-[393px] h-[520px] ">
              <div>
                <img
                  className="h-[393px] w-[393px] rounded-2xl"
                  src="/image7.jpg"
                  alt="img"
                />
              </div>

              <div className="leading-10 mt-3 flex flex-col items-center">
                <p className=" font-normal">
                  Going all-in with millennial design
                </p>

                <button className="underline underline-offset-8 font-semibold ">
                  Read More
                </button>

                <div className="flex items-center font-medium">
                  <span className="flex items-center mr-3">
                    <FaRegClock />5 min
                  </span>
                  <span className="flex items-center">
                    <SlCalender />
                    12<sup>th</sup> Oct 2022
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-[393px] h-[520px] ">
              <div>
                <img
                  className="h-[393px] w-[393px] rounded-2xl"
                  src="/image8.jpg"
                  alt="img"
                />
              </div>

              <div className="leading-10 mt-3 flex flex-col items-center">
                <p className=" font-normal">
                  Going all-in with millennial design
                </p>

                <button className="underline underline-offset-8 font-semibold ">
                  Read More
                </button>

                <div className="flex items-center font-medium">
                  <span className="flex items-center mr-3">
                    <FaRegClock />5 min
                  </span>
                  <span className="flex items-center">
                    <SlCalender />
                    12<sup>th</sup> Oct 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="py-7 underline underline-offset-[14px]">
            View All Post
          </button>
        </div>
      </div>

      {/* six section */}


      <div className="h-[450px] bg-[url('/image9.jpg')] bg-cover flex justify-center items-center">
      <div className="w-[454px] h-[202] flex flex-col items-center justify-between">
        <p className="text-5xl font-bold ">Our Instagram</p>
        <p className="text-lg ">Follow our store on Instagram</p>
        <button className="bg-[#FAF4F4] h-[64px] w-[255px] rounded-full text-xl">Follow Us</button>
      </div>
      </div>

    </>
  );
}
export default Home;
