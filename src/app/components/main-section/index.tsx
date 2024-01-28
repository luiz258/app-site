import Image from "next/image";

export function MainComponent() {
  return (
    <div className="flex justify-around justify-items-center w-full px-6 lg:pt-56 xs:pt-8 md:pt-32 bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8 ">

          <div className="mx-auto max-w-1x1 xs:flex-col xs:px-40 sm:px-40 lg:px-48 justify-around">
            <div className="grid grid-rows-1 grid-flow-col gap-12">
              <div className="max-w-2xl font__poppins">
                <h1 className="font-bold font__color-purple sm:text-6xl">
                  Olá 👋,
                </h1>
                <h1 className=" font-bold font__color-purple sm:text-6xl">
                  Meu nome é
                </h1>
                <h1 className="font-bold tracking-tight  sm:text-6xl font__color-gradient">
                  Luiz Marcelo
                </h1>
                <h1 className="font-bold tracking-tight font__color-purple sm:text-6xl">
                  Eu construo app para web
                </h1>
                
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  
                </div>
              </div>
              <div className="">
                <Image
                  className="rounded-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                  src="/images/author.png"
                  width={360}
                  height={360}
                  alt="Picture of the author"
                />
                {/* <img src={AuthorImage}/> */}
              </div>

            </div>
          </div>

        </div>
      </div>
  );
}
