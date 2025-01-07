import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/*Main section*/}
      <section className="sm:w-[1349px] sm:h-[900px] items-center flex flex-col">
        {/*Hero Text*/}
        <div className="h-[120px] sm:h-[180px] sm:w-[650px] sm:mt-20 mt-28 flex items-center justify-center w-[330px]">
          <h1 className="text-4xl sm:text-6xl font-serif cursor-default text-yellow-900 text-center font-bold">
            Welcome to
            <br className="sm:hidden" /> our Blog
          </h1>
        </div>

        {/*Blog Posts*/}
        <div className="h-[1400px] sm:mt-0 mt-5 sm:gap-6 grid grid-cols-1 sm:grid-cols-3 w-[280px] sm:h-[500px] sm:w-[1200px]">
          {/*First post*/}
          <div className="h-[400px] sm:h-full sm:w-[350px]">
            {/*Image*/}
            <div className="h-[200px] sm:h-[250px]">
              <Image
                src={"/ai-image.jpg"}
                alt="ai"
                height={10}
                width={280}
                className="sm:h-[230px] sm:w-[350px]"
              ></Image>
            </div>
            {/*Title and Date*/}
            <div className="h-[220px] bg-white flex flex-col gap-3 items-center sm:h-[240px] text-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                AI Revolution: A New Frontier
              </h2>
              <p className="text-gray-600">April 15, 2023, Hashir Raees</p>
              <p className="mt-2 sm:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                obcaecati modihai, abuehdoma loajejna
              </p>
              {/*Read More Button*/}
              <Link href={"/blogs/ai-revolution"}>
                <button className="w-[180px] sm:w-[150px] h-[50px] sm:h-[40px] bg-orange-500 text-white  text-base font-bold rounded-full hover:bg-orange-600 transition duration-300">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/*Second post*/}
          <div className="h-[400px] sm:h-full sm:w-[350px]">
            {/*Image*/}
            <div className="h-[200px] sm:h-[250px]">
              <Image
                src={"/time management.webp"}
                alt="time management"
                height={10}
                width={280}
                className="sm:h-[230px] sm:w-[350px]"
              ></Image>
            </div>
            {/*Title and Date*/}
            <div className="h-[240px] bg-white flex flex-col gap-3 items-center sm:h-[240px] text-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Time Management in the Digital Age
              </h2>
              <p className="text-gray-600">June 4, 2021, Hashir Raees</p>
              <p className="mt-2 sm:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                obcaecati modihai, abuehdoma loajejna
              </p>
              {/*Read More Button*/}
              <Link href={"/blogs/time-management"}>
                <button className="w-[180px] sm:w-[150px] h-[50px] sm:h-[40px] bg-orange-500 text-white  text-base font-bold rounded-full hover:bg-orange-600 transition duration-300">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/*Third post*/}
          <div className="h-[400px] sm:h-full sm:w-[350px]">
            {/*Image*/}
            <div className="h-[200px] sm:h-[250px]">
              <Image
                src={"/games.webp"}
                alt="modern games"
                height={10}
                width={280}
                className="sm:h-[230px] sm:w-[350px]"
              ></Image>
            </div>
            {/*Title and Date*/}
            <div className="h-[240px] bg-white flex flex-col gap-3 items-center sm:h-[240px] text-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Modern AAA games
              </h2>
              <p className="text-gray-600">September 19, 2022, Hashir Raees</p>
              <p className="mt-2 sm:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                obcaecati modihai, abuehdoma loajejna
              </p>
              {/*Read More Button*/}
              <Link href={"/blogs/moderngames"}>
                <button className="w-[180px] sm:w-[150px] h-[50px] sm:h-[40px] bg-orange-500 text-white text-base font-bold rounded-full hover:bg-orange-600 transition duration-300">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*View more button*/}
        <div className="flex justify-center mt-12">
          <Link href={"/blogs"}>
            <button className="w-[200px] sm:mb-0 mb-5 sm:w-[190px] h-[50px] sm:h-[60px] bg-yellow-800 text-white  text-base font-bold rounded-full hover:bg-yellow-900 transition duration-300">
              View More
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
