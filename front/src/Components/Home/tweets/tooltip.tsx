import { ReactNode } from "react";

export default function Tooltip({ children }: { children: ReactNode }) {
  return (
    <section className="group  flex gap-1 ">
      {children}
      <div
        className="absolute top-10 scale-0 w-[300px] 
        ease-out hover:delay-300 delay-700  
        rounded-lg shadow-md bg-white
        group-hover:scale-100 p-4"
      >
        <div className="flex flex-row justify-between">
          <img
            src=""
            alt=""
            className="w-[55px] h-[55px] rounded-full bg-black"
          />
          <div className="rounded-full bg-black w-[75px] h-7 text-base text-center">
            <span className="text-white">Seguir</span>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <span className="text-black hover:underline">Ever Rojas</span>
          <span className="text-black">@EverRojas</span>
          <p className="text-black text-justify hyphens-auto my-3">
            i can write whatever i want
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <span className="text-black">20</span>
          <span className="text-black">siguiendo</span>
          <span className="text-black">20</span>
          <span className="text-black">seguidores</span>
        </div>
      </div>
    </section>
  );
}
