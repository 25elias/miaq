import Link from 'next/link';
import React from 'react'

export default function BottomNav() {

  return (
          <div className="py-8 w-full flex sm:justify-between items-start gap-6 ">
            <div className="w-1/2 mb-8">
              <ul className="footer_links flex flex-col sm:flex-row sm:gap-4 gap-5">
                <li className="" >
                  <Link href="/">Facebook</Link>
                </li>
                <li>
                  <Link href="/">Instagram</Link>
                </li>
                <li>
                  <Link href="/">Pinterest</Link>
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-wrap  justify-start items-start gap-12 ">
              <div>
                <ul className="footer_links footer_links flex flex-col sm:gap-4 gap-5">
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Our Home</Link>
                  </li>
                  <li>
                    <Link href="/">Rooms</Link>
                  </li>
                  <li>
                    <Link href="/">Restaurant</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <ul className="footer_links footer_links flex flex-col sm:gap-4 gap-5">
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/">Special Offers</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <ul className="footer_links flex flex-col sm:gap-4 gap-5">
                  <li>
                    <Link href="/">Heteller Minimal Hotel</Link>
                  </li>
                  <li>
                    <Link href="/">Bole, 10001 Addis Ababa, Ethiopia</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
  );
};
