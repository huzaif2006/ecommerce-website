import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-[#FFFFFF] flex justify-center items-center py-10">
        <div className="w-full max-w-[1240px] px-4">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between leading-[70px] gap-8">
            {/* Address */}
            <div className="text-gray-400 leading-6 flex flex-col justify-center">
              <p>400 University Drive Suite 200 Coral</p>
              <p>Gables</p>
              <p>FL 31334 USA</p>
            </div>

            {/* Links */}
            <div className="font-medium">
              <p className="text-gray-400">Links</p>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div className="font-medium">
              <p className="text-gray-400">Help</p>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Payment Options</Link>
                </li>
                <li>
                  <Link href="#">Returns</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policies</Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-gray-400 font-medium">Newsletter</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                <input
                  className="text-gray-400 underline underline-offset-8 px-2 py-1  w-full sm:w-auto"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <button className="font-medium underline underline-offset-8">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 border-gray-300" />

          {/* Bottom Section */}
          <div >
            <p>2022 Meubel House. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
