import {RiFacebookFill,RiInstagramFill,RiGithubFill,RiLinkedinFill} from "@remixicon/react";
import Link from "next/link";
export default function Footer(){
    return(
        <>
        <footer>
            {/*Main div*/}
            <div className="sm:w-[1349px] h-[700px] gap-3 items-center p-5 sm:justify-center sm:gap-8 sm:p-3 flex sm:flex-row flex-col sm:h-[500px] bg-orange-500">
                {/*First Column*/}
                <div className="gap-5 sm:gap-7 sm:h-[350px] p-4 flex flex-col h-[350px] w-[358px] sm:w-[600px]">
                    <h1 className="uppercase text-white text-base tracking-wider sm:text-xl">About wordsmith</h1>
                    <p className="text-sm sm:text-base sm:leading-6 text-orange-200">Fugiat quas eveniet voluptatem natus.
                         Placeat error temporibus magnam sunt optio aliquam.
                        Ut ut occaecati placeat at. Fuga fugit ea autem.
                         Dignissimos voluptate repellat occaecati minima dignissimos mollitia consequatur.
                        Sit vel delectus amet officiis repudiandae est voluptatem.
                         Tempora maxime provident nisi et fuga et enim
                         exercitationem ipsam. Culpa error temporibus magnam est voluptatem.
                       </p>
                        {/*Social Icons*/}
                    <div className="flex h-[50px] w-[200px] sm:w-[270px] mt-3">
                       <Link href={"https://www.facebook.com/hashir.rais"} target="_blank"><RiFacebookFill className="h-[40px] w-[40px] text-white mr-3"/></Link>
                       <Link href={"https://www.instagram.com/hashir._.raees/"} target="_blank"><RiInstagramFill className="h-[40px] w-[40px] text-white mr-3"/></Link>
                       <Link href={"https://github.com/HashirRaees"} target="_blank"><RiGithubFill className="h-[40px] w-[40px] text-white mr-3"/></Link>
                       <Link href={"https://www.linkedin.com/in/hashir-raees-1311752ba/"} target="_blank"><RiLinkedinFill className="h-[40px] w-[40px] text-white"/></Link>
                    </div>
                </div>
                {/*Second Column*/}
                <div className="gap-5 sm:gap-7 sm:h-[350px] p-4 flex flex-col h-[350px] w-[358px] sm:w-[600px]">
                    <h1 className="uppercase text-white text-base tracking-wider sm:text-xl">Our newsletter</h1>
                    <div className="h-[150px] flex flex-col gap-5">
                        <p className="text-sm sm:text-base sm:leading-6 text-orange-200">
                        Sit vel delectus amet officiis repudiandae est voluptatem.
                         Tempora maxime provident nisi
                         et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.
                        </p>
                        {/*Subscribe Form*/}
                        <div className="flex text-white">
                        <input type="emai" name="email" placeholder="Email Address" className="h-[50px] bg-orange-600 focus:outline-none text-white p-4 sm:w-[400px] w-[230px]"/>
                        <button className="h-[50px] w-[100px] bg-white text-orange-500">Send</button>
                        </div>
                    </div>
                    {/*Copyright text*/}
                    <h2 className="text-orange-200 mt-3 sm:text-base text-xs text-center">Copyright ©2025 All rights reserved | This template is made by<br/><span className="text-white text-base font-semibold">Hashir Raees</span></h2>
                </div>
            </div>
        </footer>
        </>
    )
}