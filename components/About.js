// Importo la imagen para poner en el src de Picture de 720x600
import Image from "next/image";
//import captura from "./assets/captura.png";

const About = () => {
  return (
    <section className="text-gray-700 body-font" name="about">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          {/*<Image
            src={captura}
            className="object-cover object-center rounded"
            //width={720}
            //height={600}
            alt="hero"
          />*/}
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Mérida Rotary&nbsp;
            {/* <br className="hidden lg:inline-block" /> */}
            Art Auction
          </h1>
          <p className="mb-8 leading-relaxed font-semibold text-lg">
            Todas las ganancias de este evento se destinarán a la labor de
            Rotary para el desarrollo de la comunidad y para apoyar a las
            asociaciones mencionadas en su noble labor.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Rotary International
          </h1>
          <p className="mb-8 leading-relaxed text-justify text-lg font-semibold">
            Rotary reúne a una red mundial de líderes voluntarios dedicados a
            abordar los retos humanitarios más apremiantes del mundo. Rotary
            conecta a 1,4 millones de socios de más de 46 000 clubes rotarios en
            más de 200 países y áreas geográficas. Su labor mejora vidas tanto a
            nivel local como internacional, ya sea ayudando a los necesitados en
            sus propias comunidades o trabajando por un mundo libre de polio.
            Para más información, visite{" "}
            <a href="https://www.rotary.org" className="text-blue-500">
              Rotary.org
            </a>
            .
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/*<img
            //src={}
            className="object-cover object-center rounded"
            alt="hero"
          />*/}
        </div>
      </div>
      {/* 
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Casa de la Amistad
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            src={genteaccion}
            className="object-cover object-center rounded"
            alt="hero"
          />
        </div>
      </div> */}
    </section>
  );
};

export default About;
