import navItems from "@@/components/navItems";
import Link from "next/link";
import React from "react";
import { FaMosque } from "react-icons/fa6";
import { MdMosque } from "react-icons/md";

export default function BottomNav() {
  return (
    <div className="">
      <div className="py-8 w-full flex flex-col sm:flex-row justify-between gap-4 ">
        <div className="">
          <p className="footer_links-bold uppercase tracking-wider font-bold mb-2 py-2">
            Our Address
          </p>
          <ul className="footer_links flex flex-col gap-2">
            <li className="">
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

        <div>
          <p className="footer_links-bold tracking-wider font-bold uppercase mb-2 py-2">
            Reservation
          </p>
          <ul className="footer_links flex flex-col gap-2">
            <li>Tel.: +251 94 1111 11</li>
            <li>Fax.: +251 93 1111 11</li>
            <li>rev@******.com</li>
          </ul>
        </div>

        <div className="py-12 sm:py-0">
          <ul className="footer_links footer_links flex flex-col sm:gap-4 gap-5">
            <p className="footer_links-bold tracking-wider font-bold uppercase mb-2 py-2">
              Newsletter
            </p>
            <li>
              <form>
                <div className="flex flex-col items-baseline gap-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="email-form_footer"
                  />
                  <button className="w-3/4 h-max footer_links-bold font-bold border border-gray-900/20  py-2 px-4 cursor-pointer bg-amber-800/70">
                    Subscribe
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>

        <div className="">
          <p className="footer_links-bold tracking-wider font-bold uppercase mb-2 py-2">
            Our Awards
          </p>
          <ul className="footer_links flex flex-col sm:flex-row gap-4 items-start">
            <li>
              <MdMosque className="w-10 h-10" />
            </li>
            <li>
              <FaMosque className="w-10 h-10" />
            </li>
          </ul>
        </div>
      </div>

{/* Bottom navs */}
      <div className="mt-4 sm:mt-0 pt-6 w-full flex flex-col sm:flex-row justify-between gap-4 footer_links">
        <div>
          <p>All Rights are reserved</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {navItems.map(({ title, path }) => {
            return (
              <ul key={path}>
                <li className="">
                  <Link href={path}>{title}</Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
