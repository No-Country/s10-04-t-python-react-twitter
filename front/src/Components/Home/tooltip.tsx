import { ReactNode } from "react";


export default function Tooltip({ children }:{children:ReactNode}) {
  return (
    <section className="group relative flex">
      {children}
      <div
        className="absolute top-10 w-[200px] h-[100px] scale-0 transition-all rounded bg-white
         text-white group-hover:scale-100"
      >
        <div className="flex flex-row justify-between">
          <img
            src=""
            alt=""
            className="w-[70px] h-[70px] rounded-full bg-black"
          />
          <div>
            <span className="text-black">Follow</span>
          </div>
        </div>
        <div className="flex flex-col">
            <span className="text-black">Ever Rojas</span>
            <span className="text-black">@EverRojas</span>
            <p className="text-black">i can write whatever i want</p>
        </div>
      </div>
    </section>
  );
}
