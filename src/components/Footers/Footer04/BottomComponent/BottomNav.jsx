import navItems from "@@/components/navItems";
import socials from "@@/components/socials";
import Link from "next/link";
import React from "react";




export default function BottomNav() {
  return (
    <div className="">
      <div className="py-8 min-w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-15">

        {/* Left Section Footer */}
        <div className="w-full py-12 sm:py-0">
          <ul className="footer_links footer_links flex flex-col sm:gap-4 gap-5">
            <p className="footer_links-bold tracking-wider font-bold uppercase mb-2 py-2">
              Have a question?
            </p>
            <li>
              <form >
                  <input
                    type="email"
                    placeholder="Your name"
                    className="email-form_footer mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="email-form_footer mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Your message"
                    className="email-form_footer mb-4"
                  />
                  <div>
                    <span className="footer_links flex gap-2 py-2">
                      <input type="checkbox" name="checkbox" />
                      <label htmlFor="checkbox">Yes, I want to recieve emails with exclusive and special offers</label>
                    </span>
                    <button className="mt-6 bg-transparent w-max h-max footer_links-bold font-bold uppercase border border-gray-100  py-2 px-4 cursor-pointer">
                      Submit
                    </button>
                  </div>
              </form>
            </li>
          </ul>
        </div>

        {/* Right Footer navs */}
        <div className="w-full flex flex-col gap-4">
          {navItems.slice(0,6).map(({ title, path }) => {
            return (
              <ul key={path}>
                <li className="p-1 footer_links">
                  <Link href={path}>{title}</Link>
                </li>
              </ul>
            );
          })}
          <div className="footer_links flex justify-between gap-4">
            <p>+251 93 4777 777</p>
            <p>contact@2026mai.com</p>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 pt-6 w-full flex flex-col sm:flex-row justify-between gap-4 footer_links">
          <p>All Rights are reserved</p>

          <div className="flex gap-4">
          {socials.slice(0,6).map(({icon, idx }) => {
            return (
              <ul key={idx}>
                <li className="p-1 footer_links">
                  {icon}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
