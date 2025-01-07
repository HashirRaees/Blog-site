'use client'
import {useState} from "react";
import Link from "next/link";
import { RiMenuLine } from "@remixicon/react";

const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return(
        <div>
            <button className="relative transition-opacity duration-200" onClick={toggleMenu}>
            <RiMenuLine size={20} className="text-gray-500 sm:hidden"/>
            </button>
            <div 
            className={`h-50 text-orange-400 font-semibold absolute border border-gray-200 top-20 right-5 bg-white text-center w-52 ${menuOpen? "block" : "hidden"}`}>
                <ul className="w-52">
                    <Link href={"/"}><li className="h-12 flex items-center justify-center hover:bg-gray-200/20 transition duration-100 border-b">Home</li></Link>
                    <Link href={"/blogs"}><li className="h-12 flex items-center justify-center border-b hover:bg-gray-200/20 transition duration-100">Blogs</li></Link>
                    <Link href={"/about"}><li className="h-12 flex items-center justify-center border-b hover:bg-gray-200/20 transition duration-100">About</li></Link>
                    <Link href={"/contact"}><li className="h-12 flex items-center justify-center border-b hover:bg-gray-200/20 transition duration-100">Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}
export default BurgerMenu;