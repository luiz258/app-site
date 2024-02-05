import Image from "next/image";

export function MainComponent() {
  return (
    <div id="inicio" className="flex justify-around justify-items-center w-full px-6 lg:pt-56 xs:pt-8 md:pt-32 max-h-max ">
      <div className="relative isolate justify-items-center">

        <div className="mx-auto max-w-1x1 xs:flex-col xs:px-40 sm:px-40 lg:px-48 justify-around  animate__animated animate__backInDown">
          <div className="grid grid-rows-1 grid-flow-col gap-12 ">
            <div className="md:max-w-3xl max-w-5xl font__poppins">
              <h1 className="font-semibold font__color-purple  md:text-4xl lg:text-6xl ">
                Olá 👋,
              </h1>
              <h1 className="font-semibold font__color-purple md:text-4xl lg:text-6xl">
                Meu nome é
              </h1>
              <h1 className="font-bold font__color-gradient tracking-tight md:text-4xl lg:text-6xl ">
                Luiz Marcelo
              </h1>
              <h1 className="font-bold  tracking-tight font__color-purple md:text-4xl lg:text-6xl">
                Eu construo soluções para web
              </h1>


            </div>
            <div className="md:max-w-4xl xs:max-w-5xl ">
              <div className="rounded-full border-gradient">
                <Image
                  className="rounded-full saturate-50 hover:saturate-150 "
                  src="/images/author.png"
                  width={360}
                  height={360}
                  alt="Picture of the author"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
