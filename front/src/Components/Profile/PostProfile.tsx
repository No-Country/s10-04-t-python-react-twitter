import Tooltip from "../../Components/Home/tweets/tooltip";
import { Link, useNavigate } from "react-router-dom";
import {
  Ellipse,
  GoToPost,
} from "../../Components/Home/tweets/TweetIcons/Icons";
// import Functionality from "../../Components/Home/tweets/tweetsFunctionality";
import { useEffect } from "react";
// import axios from "axios";
// import { setAccess } from "../../redux/actions/config";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { getPostById } from "../../services/dataContext";

export const PostProfile: React.FC = () => {
  interface ContenidoType {
    avatar: string;
    firs_name: string;
    contenido: string;
    multimedia: string;
    gif: string;
  }

  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contenido = useAppSelector((state: { config: { access: any; }; }) => state.config.access || []);
  const id = localStorage.getItem("userId");

  useEffect(() => {
    getPostById({ id });
  }, [id]);

  return (
    <>
      {contenido.length !== 0 ? (
        contenido.tweets.slice().reverse().map((cont: ContenidoType, index: number) => (
          <main key={index}>
            <article
              className="py-3 px-4  h-auto border-2 border-gray-100
       hover:bg-gray-100 cursor-pointer"
            >
              <div className="grid grid-flow-col">
                {contenido && (
                  <Tooltip>
                    <div className="col-span-1 w-10 mr-3">
                      <img
                        src={contenido?.avatar}
                        className="rounded-full"
                      ></img>
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

                  {cont.multimedia ? (
                    <img src={cont.multimedia} alt="" className="rounded-lg" />
                  ) : (
                    <img src={cont.gif} alt="" className="rounded-lg" />
                  )}

                  {/* <Functionality/> */}
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
