import Signin from "../Components/Signin";
import logo from "../assets/twitter-logo.svg";


export default function Login() {
  return (
    <>
      <div className=" h-screen flex flex-col sm:px-28 md:px-28 lg:px-28 xl:px-28 2x1:px-28 lg:flex-row">
        <div className="flex items-center mx-7 lg:w-3/12 xl:w-1/2">
          <img
            src={logo}
            className="w-10 mb-14 lg:w-32  items-center "
          ></img>
        </div>
        <div className="flex-1 lg:w-1/2">
          <h1 className="text-5xl text-left font-semibold sm:font-bold sm:text-6xl lg:font-extrabold lg:mr-19 text-[#0F1419]">
            Lo que está pasando ahora
          </h1>
          <h5 className="text-3xl text-left font-bold my-11">Únete Hoy</h5>
          <p className="text-left my-8 font-semibold text-1xl">¿Ya tienes una cuenta?</p>
          <div className="w-5/6 sm:w-3/2 xl:w-2/3 ">
           <Signin />
            <p className="my-2">o</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-72">
              Crear cuenta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
