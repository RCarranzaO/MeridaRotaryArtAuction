const Contacto = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("sending");

  //   let data = {
  //     name,
  //     email,
  //     message
  //   };
  //   fetch("api/contact", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   }).then((res) => {
  //     console.log("Responsive recived");
  //     if (res.status === 200) {
  //       console.log("Response succeeded!");
  //       setSubmitted(true);
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     }
  //   });
  // };

  return (
    <section className="text-gray-700 body-font relative" name="contacto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            Contactanos
          </h1>
          <p className="lg:w-2/3 mx-auto text-xl leading-relaxed text-base font-semibold">
            Para mas informacion contactanos por correo o whatsapp.
          </p>
          <a
            className="font-semibold text-2xl text-blue-500 hover:-slate-400"
            href="https://api.whatsapp.com/send?phone=19716456730&text= Hello!%20I%20would%20like%20some%20information%20and%20tickets!"
          >
            Neil Mandel
          </a>
          <a
            className="font-semibold text-2xl text-black-500 hover:text-slate-400"
            href="https://api.whatsapp.com/send?phone=529993503765&text= Hola!%20Quisiera%20más%20información%20y%20tickets!"
          >
            Hernando Leo
          </a>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            {/* <form>
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Nombre"
                name="name"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Email"
                name="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="p-2 w-full">
              <textarea
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                placeholder="Mensaje"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="p-2 w-full">
              <button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="flex mx-auto text-white bg-slate border-0 py-2 px-8 focus:outline-none hover:bg-sky rounded text-lg"
              >
                Enviar Correo
              </button>
            </div>
            </form> */}

            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              {/* <a className="text-slate" href="/">
                example@email.com
              </a> */}
              <p className="leading-normal my-5">
                Av. Rotarismo Internacional No. 109
                <br />
                Col Itzimna 97100 Mérida, México
              </p>
              <span className="inline-flex">
                <a
                  className="text-black-500"
                  href="https://www.facebook.com/rotariomerida"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>

                <a
                  className="ml-4 text-black-500"
                  href="https://www.instagram.com/clubrotariodemerida/?hl=es-la"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
