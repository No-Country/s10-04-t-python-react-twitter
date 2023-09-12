import { useEffect } from "react";
import { UpdateProfile } from "./UpdateProfile";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { getPostById } from "../../services/dataApi";
import defaultUser from "../../assets/userDefault.png";

export const InfoProfile: React.FC = () => {
  const dataPost = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { config: { access: any } }) => state.config.access || []
  );
  const id = localStorage.getItem("userId");

  useEffect(() => {
    getPostById({ id });
  }, [id]);

  console.log(dataPost);

  return (
    <>
      <div className="mt-16 mx-2 h-[157px]  flex items-center justify-center">
        {dataPost && <img src={dataPost.front_page} alt="" className="h-[157px] w-[100%] max-w-[800px]"></img>}
      </div>
      <div className="flex flex-row -mt-[50px] mx-5 justify-between">
        {dataPost && (
          <div className="hola">
            {dataPost?.avatar ? (
                        <img src={dataPost?.avatar} alt="" className="w-[100px] h-[100px] mr-3 rounded-full 
                        bg-slate-400 cursor-pointer"/>
                    ) : (
                        <img src={defaultUser} alt="" className="w-[100px] h-[100px] mr-3 rounded-full 
                        bg-slate-400 cursor-pointer"/>
                    )}
            <h1 className="text-center text-xl font-bold">
              {dataPost.firs_name}
            </h1>
          </div>
        )}
        <div className="flex content-end flex-wrap">
          <UpdateProfile />
        </div>
      </div>
      {dataPost ? (
        <section className="flex flex-row my-4 ml-2">
          <div className="mr-5">{dataPost?.followers_count} Followers</div>
          <div>{dataPost?.following_count} Following</div>
        </section>
      ) : (
        <div>Cargando</div>
      )}
    </>
  );
};
