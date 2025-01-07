import Link from "next/link";
import { useState } from "react";
import BurgerMenu from "@/components/Burger";
export default function Nav(){
  return (
    <>
      <nav className="h-20 sm:w-[1349px] justify-evenly items-center gap-3 sm:gap-36 bg-orange-500 flex">
        {/*Logo */}
        <h1 className="sm:text-2xl cursor-default text-sm tracking-wide text-white font-IntegralCF sm:ml-5">
          Hashir Raees
        </h1>

        {/*Menu */}
        <ul className="sm:flex hidden text-white font-mono text-xs sm:text-xl gap-2 sm:gap-8">
          <Link href={"/"}>
            <li className="hover:underline cursor-pointer">Home</li>
          </Link>
          <Link href={"/blogs"}>
            <li className="hover:underline cursor-pointer">Blogs</li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:underline cursor-pointer">About</li>
          </Link>
          <Link href={"/contact"}>
            <li className="hover:underline cursor-pointer">Contact</li>
          </Link>
        </ul>
        {/*Search Bar */}
        <input
          type="search"
          className="bg-white h-10 rounded-full p-4 w-40 sm:w-44"
          placeholder="search"
        />
        <button className="flex justify-center">
        
        <BurgerMenu />
        </button>
      </nav>
    </>
  );
}
