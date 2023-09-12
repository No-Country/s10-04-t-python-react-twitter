import Signin from "../Components/Signin";
import SignUp from "../Components/Signup";
import logo from "../assets/twitter-logo.svg";

export default function Login() {
  return (
    <>
      <div className="flex flex-col h-screen px-10 py-8 lg:gap-14 sm:px-28 md:px-28 lg:px-28 xl:px-28 2x1:px-28 lg:flex-row">
        <div className="flex items-center lg:w-3/12 xl:w-1/2">
          <img
            src={logo}
            className="w-10 lg:w-full lg:h-[60%] lg:max-h-[380px] lg:object-contain items-center "
          ></img>
        </div>
        <div className="flex-1 lg:w-1/2">
          <h1 className="text-5xl text-left font-semibold sm:font-bold sm:text-6xl lg:font-extrabold lg:mr-19 text-[#0F1419]">
            Lo que está pasando ahora
          </h1>
          <h5 className="text-3xl font-bold text-left my-11">Únete Hoy</h5>
          <p className="my-8 font-semibold text-left text-1xl">
            ¿Ya tienes una cuenta?
          </p>
          <div className="w-[280px]">
            <Signin />
            <div className="my-2 text-center ">
              <p>o</p>
            </div>
            <SignUp />
            {/* <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 w-72">
              Crear cuenta
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
