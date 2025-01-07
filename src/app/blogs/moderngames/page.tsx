import {client} from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
export default async function Ai(){
    let res = await client.fetch(`*[_type == "Blog3"]{
        title,
        body,
        image,
        date,
        author
        }`)
    return(
        <>
        <section className="sm:h-[1800px] h-[2000px] sm:w-[1349px] flex flex-col items-center">
            <div>
                {
                    res.map((data:any, index:any) => (
                        <div key={index}>
                            {/*Image*/}
                         {
                             data.image && (
                            <div className="h-[200px] sm:h-[400px] sm:flex sm:justify-center sm:w-[800px] w-[340px] mt-10">
                               <Image src={urlFor(data.image).url()} alt="modern games" width={340} height={100} className="sm:w-[700px] sm:h-[400px]"/>
                            </div>
                         )
                         }
                            {/*Heading*/}
                            <div className="sm:h-20 h-12 sm:w-[800px] w-[340px] mt-9 text-center">
                                <h1 className="sm:text-4xl text-xl font-bold font-serif text-yellow-900">{data.title}</h1>
                            </div>

                            {/*Text*/}
                            <div className="w-[340px] sm:w-[800px] text-center text-gray-700 sm:h-[870px] h-[1350px]">
                                <p className="text-sm font-serif sm:text-base sm:leading-7">{data.body}</p>
                            </div>

                            {/*Date and Author*/}
                            <div className="h-10 w-[340px] sm:w-[800px] text-center">
                                <p className="text-xs sm:text-sm text-gray-400">{data.date} |<span className="ml-1 text-base font-semibold text-orange-400">{data.author}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    )
}