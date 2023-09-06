import Tooltip from "../../Components/Home/tweets/tooltip";
import { Link, useNavigate } from "react-router-dom";
import {
  Ellipse,
  GoToPost,
} from "../../Components/Home/tweets/TweetIcons/Icons";
import Functionality from "../../Components/Home/tweets/tweetsFunctionality";
import { useEffect, useState } from "react";
import axios from "axios";
import { setAccess } from "../../redux/actions/config";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { getPostById } from "../../services/dataContext";

export const PostProfile: React.FC = () => {
  const navigate = useNavigate();
  // const [contenido, setContenido] = useState([]);

  const contenido = useAppSelector(state=>state.config.access || [])
  // const idUser = useAppSelector(state=>state.config.access?.id)
  const id = useAppSelector(state=>state.config.auth.id)
  // const contenido = useAppSelector(state=>state.config.access?.tweets || [])

  console.log(contenido, "useaAppSelector")
  console.log(id,"holaaa")
  // const id = 1;

  // async function getPostById() {
  //   const response = await axios.get(
  //     `http://15.229.1.136/users/api/detail/${userId}/`
  //   );
  //   const responseMap = response.data;
  //   return setContenido(responseMap);
  // }

  // async function getPostById() {
  //   const response = await axios.get(
  //     `http://15.229.1.136/users/api/detail/${userId}/`
  //   );
  //   const responseMap = response.data;
  //   console.log(responseMap)
  //   setAccess(responseMap)
  //   return responseMap;
  // }
 
  useEffect(() => {
    getPostById({id});
  }, [id]);

  // console.log(contenido);

  return (
    <>
    
      {contenido.length !== 0 ? (
        contenido.tweets.map((cont, index) => (
          <main key={index}>
            <article
              className="py-3 px-4  h-auto border-2 border-gray-100
       hover:bg-gray-100 cursor-pointer"
            >
              <div className="grid grid-flow-col">
              {contenido && (
                <Tooltip>
                  <div className="col-span-1 w-10 mr-3">
                    <img src={contenido?.avatar} className="rounded-full"></img>
                      <Link to="#" className="w-10 h-10 " />
                  </div>
                </Tooltip>
                )}
                <div className="col-span-1 ">
                  <div className="flex justify-between ">
                    <div className="flex gap-1 items-center">
                      <Tooltip>
                        <span className="hover:underline">
                          {contenido.firs_name}
                        </span>
                        
                      </Tooltip>
                      <span className="mb-2">.</span>
                      <span className="">aug 20</span>
                    </div>
                    <div className="group/edit group">
                      <div
                        className="group-hover/edit:bg-blue-100 
                        rounded-full w-[35px] h-[35px] flex items-center justify-center 
                        absolute  right-0 "
                      >
                        {Ellipse}
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p>{cont.contenido}</p>
                  </div>

                 
                  {cont.multimedia && (
                    <img src={cont.multimedia} alt="" className="rounded-lg" />
                  )}

                  <Functionality />
                </div>
              </div>
            </article>
            <div data-dial-init className="fixed right-6 bottom-6 group">
              <div
                className="w-14 h-14 bg-blue-500 rounded-full flex 
          items-center 
    justify-center cursor-pointer"
                onClick={() => navigate("/posttweets")}
              >
                {GoToPost}
              </div>
            </div>
          </main>
        ))
      ) : (
        <div>Cargando!</div>
      )}
    </>
  );
};
