export default function ShopBanner(){
    return(
        <>
        <div className="w-screen h-fit bg-[#FAF4F4] flex flex-col  justify-evenly items-center py-12 md:flex-row md:py-20  ">
            <div className="pb-10  sm:px-6  md:py-0">
                <p className=" font-medium text-3xl ">Free Delivery</p>
                <div className="text-gray-400 mt-1">
                <p>For all orders over 50$, consectetur</p>
                <p>adipim scing elit</p>
                </div>
            </div>
            <div className="pb-10 sm:px-6  md:py-0">
                <p className=" font-medium text-3xl">90 Days Return</p>
                <div className="text-gray-400 mt-1">
                <p >If goods have problem, consectetur</p>
                <p >adipim scing elit</p>
                </div>
            </div>
            <div className="pb-10 sm:px-6  md:py-0">
                <p className=" font-medium text-3xl ">Secure Payment</p>
                <div className="text-gray-400 mt-1">
                <p >!00% secure payment, consectetur</p>
                <p >adipim scing elit</p>
                </div>
                
            </div>
        </div>
        </>
    )
}