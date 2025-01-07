import Image from "next/image"
import Link from "next/link"
export default function Blogs(){
    return(
        <section className="sm:w-[1349px] h-[2840px] sm:h-[1250px] items-center flex flex-col">
            <h1 className="text-4xl sm:text-6xl font-bold text-yellow-900 font-serif mt-10">Blogs</h1>
          {/*Blog Posts*/}
              <div className="h-[2780px] sm:mt-10 mt-5 sm:gap-6 grid grid-cols-1 sm:grid-cols-3 w-[280px] sm:h-[900px] sm:w-[1200px]">
        
                {/*First post*/}
                <div className="h-[400px] sm:h-full sm:w-[350px]">
                  {/*Image*/}
                  <div className="h-[200px] sm:h-[250px]">
                    <Image src={"/ai-image.jpg"} alt="ai" height={10} width={280} className="sm:h-[230px] sm:w-[350px]"></Image>
                  </div>
                  {/*Title and Date*/}
                  <div className="h-[220px] flex flex-col gap-3 items-center sm:h-[240px] text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">AI Revolution: A New Frontier</h2>
                    <p className="text-gray-600">April 15, 2023, Hashir Raees</p>
                    <p className="mt-2 sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati modihai, abuehdoma loajejna</p>
                    {/*Read More Button*/}
                    <Link href={"/blogs/ai-revolution"}>
                     <button className="w-[180px] sm:w-[150px] h-[50px] sm:h-[40px] bg-orange-500 text-white  text-base font-bold rounded-full hover:bg-orange-600 transition duration-300">Read More</button>
                  </Link>
                  </div>
                </div>
        
                {/*Second post*/}
                  <div className="h-[400px] sm:h-full sm:w-[350px]">
                  {/*Image*/}
                  <div className="h-[200px] sm:h-[250px]">
                    <Image src={"/time management.webp"} alt="time management" height={10} width={280} className="sm:h-[230px] sm:w-[350px]"></Image>
                  </div>
                  {/*Title and Date*/}
                  <div className="h-[240px] flex flex-col gap-3 items-center sm:h-[240px] text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">Time Management in the Digital Age</h2>
                    <p className="text-gray-600">June 4, 2021, Hashir Raees</p>
                    <p className="mt-2 sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati modihai, abuehdoma loajejna</p>
                    {/*Read More Button*/}
                    <Link href={"/blogs/time-management"}>
                    <button className="w-[180px] sm:w-[150px] h-[50px] sm:h-[40px] bg-orange-500 text-white  text-base font-bold rounded-full hover:bg-orange-600 transition duration-300">Read More</button>
                    </Link>
                  </div>
                </div>
        
                {/*Third post*/}
                <div className="h-[400px] sm:h-full sm:w-[350px]">
                  {/*Image*/}
                  <div className="h-[200px] sm:h-[250px]">
                    <Image src={"/games.webp"} alt="modern games" height={10} width={280} className="sm:h-[230px] sm:w-[350px]"></Image>
                  </div>
                  {/*Title and Date*/}
                  <div className="h-[240px] flex flex-col gap-3 items-center sm:h-[240px] text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">Modern AAA games</h2>
                    <p className="text-gray-600">September 19, 2022, Hashir Raees</p>
                    <p className="mt-2 sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati modihai, abuehdoma loajejna</p>
                    {/*Read More Button*/}
                    <Link href={"/blogs/moderngames"}>
                    <button className="w-[180px] sm:w-[150px] h-[50px] sm:h-[40px] bg-orange-500 text-white text-base font-bold rounded-full hover:bg-orange-600 transition duration-300">Read More</button>
                    </Link>
                  </div>
                </div>

                   {/*Fourth post*/}
                   <div className="h-[400px] sm:h-full sm:w-[350px]">
                  {/*Image*/}
                  <div className="h-[200px] sm:h-[250px]">
                    <Image src={"/5-easy-ways-1.jpg"} alt="motivation" height={10} width={280} className="sm:h-[230px] sm:w-[350px]"></Image>
                  </div>
                  {/*Title and Date*/}
                  <div className="h-[240px] flex flex-col gap-3 items-center sm:h-[240px] text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">How to Stay Motivated During Challenging Times</h2>
                    <p className="text-gray-600">November 29, 2024, Hashir Raees</p>
                    <p className="mt-2 sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati modihai, abuehdoma loajejna</p>
                    {/*Read More Button*/}
                    <Link href={"/blogs/motivation"}>
                      <button className="w-[180px] sm:w-[150px] h-[50px] sm:h-[40px] bg-orange-500 text-white text-base font-bold rounded-full hover:bg-orange-600 transition duration-300">Read More</button>
                     </Link>
                  </div>
                </div>

                    {/*Fifth post*/}
                    <div className="h-[400px] sm:h-full sm:w-[350px]">
                  {/*Image*/}
                  <div className="h-[200px] sm:h-[250px]">
                    <Image src={"/mental-health.jpg"} alt="mental health" height={10} width={280} className="sm:h-[230px] sm:w-[350px]"></Image>
                  </div>
                  {/*Title and Date*/}
                  <div className="h-[240px] flex flex-col gap-3 items-center sm:h-[240px] text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">Mindfulness and Mental Health: Tools for Modern Living</h2>
                    <p className="text-gray-600">August 6, 2018, Hashir Raees</p>
                    <p className="mt-2 sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati modihai, abuehdoma loajejna</p>
                    {/*Read More Button*/}
                    <Link href={"/blogs/mindfullness"}>
                    <button className="w-[180px] sm:w-[150px] h-[50px] sm:h-[40px] bg-orange-500 text-white text-base font-bold rounded-full hover:bg-orange-600 transition duration-300">Read More</button>
                    </Link>
                  </div>
                </div>

                    {/*Sixth post*/}
                    <div className="h-[400px] sm:h-full sm:w-[350px]">
                  {/*Image*/}
                  <div className="h-[200px] sm:h-[250px]">
                    <Image src={"/blockchain.webp"} alt="blockchain" height={10} width={280} className="sm:h-[230px] sm:w-[350px]"></Image>
                  </div>
                  {/*Title and Date*/}
                  <div className="h-[240px] flex flex-col gap-3 items-center sm:h-[240px] text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">Blockchain: Revolutionizing Trust and Transparency</h2>
                    <p className="text-gray-600">May 8, 2019, Hashir Raees</p>
                    <p className="mt-2 sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati modihai, abuehdoma loajejna</p>
                    {/*Read More Button*/}
                    <Link href={"/blogs/blockchain"}>
                    <button className="w-[180px] sm:w-[150px] h-[50px] sm:h-[40px] bg-orange-500 text-white text-base font-bold rounded-full hover:bg-orange-600 transition duration-300">Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
        </section>
    )
}