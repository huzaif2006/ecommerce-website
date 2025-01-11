import Header from "@/components/header";
import ShopBackground from "@/components/shopbackground";
import ShopBanner from "@/components/shopbanner";
import Link from "next/link";
export default function MyAccount() {
  return (
    <>
      {/* header */}
      <Header />
      {/* Background  */}
      <ShopBackground
        firstName="My Account"
        secondName="Home"
        thirdName="My account"
      />

      <div className="h-auto mt-11 px-4 pb-10 md:px-8 lg:px-16 lg:py-12">
        {/* login and register container */}
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-8">
          {/* login */}
          <div className="h-auto max-w-md flex flex-col justify-evenly space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Log In
            </h2>
            <div>
              <p className="font-medium pb-2 md:pb-4">
                Username or email address
              </p>
              <input
                className="w-full h-12 md:h-[75px] border rounded-lg border-[#9F9F9F] px-4"
                type="email"
              />
            </div>

            <div>
              <p className="font-medium pb-2 md:pb-4">Password</p>
              <input
                className="w-full h-12 md:h-[75px] border rounded-lg border-[#9F9F9F] px-4"
                type="password"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#9F9F9F]"
              />
              <span className="ml-2">Remember me</span>
            </div>

            <div className="flex items-center space-x-6">
              <button className="w-36 md:w-[215px] h-12 md:h-[64px] border-[1px] text-lg md:text-xl border-black rounded-2xl font-medium">
                Log in
              </button>
              <span className="font-light text-sm md:text-base">
                Lost Your Password?
              </span>
            </div>
          </div>

          {/* register */}
          <div className="h-auto max-w-md flex flex-col justify-evenly space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Register
            </h2>
            <div>
              <p className="font-medium pb-2 md:pb-4">Email address</p>
              <input
                className="w-full h-12 md:h-[75px] border rounded-lg border-[#9F9F9F] px-4"
                type="email"
              />
            </div>

            <div>
              <p className="font-light text-sm md:text-base">
                A link to set a new password will be sent to your email address.
              </p>
            </div>

            <div className="font-light text-sm md:text-base space-y-1">
              <p>Your personal data will be used to support your</p>
              <p>experience throughout this website, to manage access</p>
              <p>
                to your account, and for other purposes described in our{" "}
                <Link href="#" className="font-medium">
                  privacy policy.
                </Link>
              </p>
            </div>

            <div>
              <Link className=" w-36 md:w-[215px] h-12 md:h-[64px] border-[1px] text-lg md:text-xl border-black rounded-2xl font-medium flex justify-center items-center" href="/register">Register</Link>
            </div>
          </div>
        </div>
     </div>

      <ShopBanner/>
    </>
  );
}
