import { useEffect, useState } from "react";
import axios from "axios";
import { UpdateProfile } from "./UpdateProfile";


export const InfoProfile: React.FC = () => {

  const [contenido, setContenido] = useState([]);

  const userId = 2;

  async function getPostById() {
    const response = await axios.get(  
      `http://15.229.1.136/users/api/detail/${userId}/`
    );
    const responseMap = response.data;
    return setContenido(responseMap);
  }

  useEffect(() => {
    getPostById();
  }, []);

  console.log(contenido);

  return (
    <>
      <div className="mt-16 mx-2 bg-slate-300 h-[157px]">
        {contenido &&
        <img src={contenido.front_page} alt=""></img> }
      </div>
      <div className="flex flex-row -mt-[50px] mx-5 justify-between">
      {contenido &&
        <div className="">
          <img src={contenido.avatar} className="w-[100px] h-[100px] mr-3 rounded-full 
              bg-slate-400 cursor-pointer"
          ></img>
          <h1 className="text-center text-xl font-bold">{contenido.firs_name}</h1>
        </div> }
        <div className="flex content-end flex-wrap">
         <UpdateProfile />
        </div> 
      </div>
      {contenido.length !==0 ?
      <section className="flex flex-row">
        <div className="mr-5">{contenido.followers.length} Followers</div>
        <div>x Following</div> 
      </section> : <div>Cargando</div>}
    </>
  );
};
