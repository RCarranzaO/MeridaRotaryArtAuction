import Image from "next/image";

const Welcome = () => {
  return (
    <section className="text-gray-700 body-font" name="welcome">
      <div className="container-lg mx-auto flex px-5 pb-24 md:flex-col flex-col items-center">
        <div className="lg:w-full md:w-1/2 w-5/6">
          {/* <Image
            //src={}
            className="object-cover object-center rounded self-center"
            alt="Art Auction"
          />*/}
        </div>
      </div>
      <div className="container mx-auto flex px-5 pt-0 pb-24 md:flex-col flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <p className="title-font text-4xl capitalize sm:text-8xl mb-4 font-medium text-gray-900 text-center ">
            Rotary Art Auction
          </p>
          <div className="mb-8 text-justify leading-relaxed decoration-solid font-semibold text-lg">
            <p>
              Exclusivo evento de talla internacional, a efectuarseel próximo 2
              de marzo en el Palacio de la Música de Mérida a las 19:30 hrs. Los
              asistentes podrán apreciar una exquisita exhibición de piezas
              exclusivas de artistas consagrados como Frida Kahlo, Salvador
              Dali, Pablo Picasso, entre otros.
            </p>
            <p>
              Gran noche de gala con subasta de obras de Arte de artistas y
              galerias locales e internacionales.
            </p>
            <ul className="list-disc list-inside py-5">
              <li>Subasta Silenciosa</li>
              <li>Subasta En Vivo</li>
              <li>Compra Directa</li>
            </ul>
          </div>
          <div className="container max-width flex flex-col justify-center">
            <p className="font-semibold flex justify-center text-xl">
              Compra tus boletos aquí
            </p>

            <a
              href="http://meridarotaryartauction.com/2022"
              className="flex mx-auto inline-flex mt-2 text-white bg-sky border-0 py-2 px-6 focus:outline-none hover:bg-azure rounded text-lg"
            >
              Auction
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
