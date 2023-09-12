import Tooltip from "../../Components/Home/tweets/tooltip";
import { Link, useNavigate } from "react-router-dom";
import {
  // Ellipse,
  GoToPost,
} from "../../Components/Home/tweets/TweetIcons/Icons";
import { useEffect } from "react";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { getPostById } from "../../services/dataApi";
import { ContenidoType } from "../../types/profileTypes";
import defaultUser from "../../assets/userDefault.png";

export const PostProfile: React.FC = () => {
  const navigate = useNavigate();
  const dataPost = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { config: { access: any } }) => state.config.access || []
  );
  const id = localStorage.getItem("userId");

  useEffect(() => {
    getPostById({ id });
  }, [id]);

  return (
    <>
      <main>
        {dataPost.length !== 0 ? (
          dataPost.tweets
            .slice()
            .reverse()
            .map((data: ContenidoType, index: number) => (
              <article
                key={index}
                className="py-3 px-4  h-auto border-2 border-gray-100 hover:bg-gray-100 cursor-pointer"
              >
                <div className="grid grid-cols-[40px,1fr]">
                  <div className="w-10 mr-3 grid">
                    <Tooltip>
                      {dataPost?.avatar ? (
                        <div className="col-span-1 w-10 mr-3 ">
                          <img
                            src={dataPost?.avatar}
                            alt=""
                            className="w-[45px] h-[45px] rounded-full"
                          />
                          <Link to="#" className="w-10 h-10 " />
                        </div>
                      ) : (
                        <div className="col-span-1 w-10 mr-3">
                          <img src={defaultUser} alt="" />
                        </div>
                      )}
                    </Tooltip>
                  </div>
                  <div className="col-span-1 ml-5">
                    <div className="flex justify-between ">
                      <div className="flex gap-1 items-center">
                        <Tooltip>
                          <span className="hover:underline font-semibold">
                            {dataPost.firs_name}
                          </span>
                        </Tooltip>
                        <span className="text-slate-400 ml-2">
                          @{dataPost?.firs_name}
                        </span>
                        {/* <span className="">aug 20</span> */}
                      </div>
                      {/* <div className="group/edit group">
                        <div
                          className="group-hover/edit:bg-blue-100 
                        rounded-full w-[35px] h-[35px] flex items-center justify-center 
                        absolute  right-0 "
                        >
                          {Ellipse}
                        </div>
                      </div> */}
                    </div>
                    <div className="mb-2">
                      <p>{data.contenido}</p>
                    </div>
                    {data.multimedia ? (
                      <img
                        src={data.multimedia}
                        alt=""
                        className="rounded-lg w-[100%] h-[100%]"
                      />
                    ) : (
                      <img src={data.gif} alt="" className="rounded-lg " />
                    )}

                    {/* <Functionality/> */}
                  </div>
                </div>
              </article>
            ))
        ) : (
          <div>Cargando!</div>
        )}
        {/* {dataPost.tweets.length === 0 && (<div className="text-slate-400 text-xl">Aún no tienes ningún tweet</div>)} */}
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
    </>
  );
};
