import Header from "@/components/header";
import ShopBackground from "@/components/shopbackground";
import ShopBanner from "@/components/shopbanner";
import Link from "next/link";

export default function Register(){
    return(
        <>
        <Header />
        <ShopBackground firstName="Checkout" secondName="Home" thirdName="Checkout" />
        <div className="flex justify-evenly">
            <div className="w-[608px]">
            <h2 className="text-4xl font-semibold pb-9">Billing details</h2>
            <div className="flex gap-4 ">
                <div>
                <p className="font-medium pb-3">First Name</p>
                <input className="w-[211px] h-[75px] px-4 border-2 border-[#9F9F9F] rounded-xl text-xl" type="text" />
                </div>

                <div>
                <p className="font-medium pb-3">Last Name</p>
                <input className="w-[211px] h-[75px] px-4 border-2 rounded-xl border-[#9F9F9F] text-xl" type="text" />
                </div>
            
            </div>

            <div>
                <p className="font-medium pb-3">Company Name (Optional)</p>
                <input className="w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-xl px-4 text-xl" type="text" />
            </div>

            <div>
            <p className="font-medium pb-3">Country / Region</p>
            <select name="dropdown"  className="w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-xl px-4 text-xl">
                <option>Pakistan</option>
                <option>United States</option>
                <option>United Kindom</option>
                <option>Turkey</option>
                <option>Canada</option>
            </select>
            </div>



            <div>
                <p className="font-medium pb-3">Street address</p>
                <input className="w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-xl px-4 text-xl" type="text" />
            </div>


            <div>
                <p className="font-medium pb-3">Town / City</p>
                <input className="w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-xl px-4 text-xl" type="text" />
            </div>




            
            <div>
            <p className="font-medium pb-3">Province</p>
            <select name="dropdown"  className="w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-xl px-4 text-xl">
                <option>Sindh</option>
                <option>Punjab</option>
                <option>Balochistan</option>
                <option>Khyber Pakhtunkha</option>
                <option>Gigit Baldistan</option>
            </select>
            </div>


            <div>
                <p className="font-medium pb-3">Zip code</p>
                <input className="w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-xl px-4 text-xl" type="text" />
            </div>



            
            <div>
                <p className="font-medium pb-3">Phone</p>
                <input className="w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-xl px-4 text-xl" type="tel" />
            </div>


            
            <div>
                <p className="font-medium pb-3">Email address</p>
                <input className="w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-xl px-4 text-xl" type="email" />
            </div>

            <div>
                <input className="w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-xl px-4 " type="text" placeholder="Additional Information"/>
            </div>
            </div>


            <div className="w-[608px]">
                <div className="flex justify-between ">
                    <div className="leading-9 ">
                        <h3 className="text-2xl font-medium">Product</h3>
                        <p className="">Asgaard sofa x 1</p>
                        <p >Subtotal</p>
                        <p>Total</p>
                    </div>
                    
                    <div className="leading-9 text-end">
                        <h3 className="text-2xl font-medium">Subtotal</h3>
                        <p className="font-light">Rs. 250,000,00</p>
                        <p className="font-light">Rs. 250,000,00</p>
                        <p className="font-bold text-2xl text-[#B88E2F]">Rs. 250,000,00</p>
                    </div>
                </div>

                <hr className="mt-6"/>


                <div>
                    <div>
                    <p><span className="font-bold text-3xl">&#8226;</span> Direct Bank Transfer</p>
                    <p>Make your payment directly into our bank account. Please use</p>
                    <p>your Order ID as the payment reference. Your order will not be</p>
                    <p>shipped until the funds have cleared in our account.</p>
                    </div>

                    <p> <input type="radio" /> Bank Transfer</p>
                    <p> <input type="radio" /> Cash On Delivery</p>


                 <div className="font-light text-sm md:text-base ">
                        <p>Your personal data will be used to support your experience</p>
                     <p>throughout this website, to manage access  to your account, and</p>
                    <p>
                       for other purposes described in our{" "}
                       <Link href="#" className="font-medium">
                         privacy policy.
                       </Link>
                   </p>
                 </div>

                 <button className="w-36 md:w-[318px] h-12 md:h-[64px] border-[1px] text-lg md:text-xl border-black rounded-2xl font-medium">
                Register
              </button>

                    
                </div>

                
            </div>



            
            
        </div>




        <ShopBanner />
        </>
    )
}