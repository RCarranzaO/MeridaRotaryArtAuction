//import Link from "next/link";

const Header = () => {
  return (
    <header className="text-black body-font bg-white bg-opacity-75 sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
       
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="#"
          >
            <span className="ml-3 text-xl">Rotary </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-white-500 rounded-full"
              viewBox="0 0 24 24"
            ></svg>
          </a>
       
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          
            <a className="mr-5 hover:text-gray-900" href="#welcome">
              Inicio
            </a>

         
            <a className="mr-5 hover:text-gray-900" href="#about">
              Acerca de
            </a>
          
            {/*<a className="mr-5 hover:text-gray-900" href="true">
              Patrocinadores
  </a>  */}
          
            <a className="mr-5 hover:text-gray-900" href="#contacto">
              Contacto
            </a>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
