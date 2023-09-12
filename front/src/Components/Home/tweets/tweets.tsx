import { Ellipse, GoToPost } from "./TweetIcons/Icons";
import Functionality from "./tweetsFunctionality";
// import Tooltip from "./tooltip";
import { useNavigate } from "react-router-dom";
import React from "react";
import { TweetsInterface } from "../../../types";
import TimeAgo from "./timeAgo";
import usePostStore from "../../../Hooks/Home/postStore/usePostStore";
import useTweets from "../../../Hooks/Home/usetweets";
import ImageModal from "./ImageModal";
import useImageModal from "../../../Hooks/imageModal";
import LoadingComponent from "../../LoadingComponent";
import UserInformation from "../../../Hooks/userInformation";
import defaultUser from "../../../assets/userDefault.png"

export default function Tweets(): JSX.Element {
  const navigate = useNavigate();
  const { setTweet_id } = usePostStore();
  const { data, isLoading } = useTweets();
  const { openImage, enlargedImage, closeImage } = useImageModal();
  const { setFirs_name, setAvatar, setContenido } = UserInformation();

  if (isLoading) return <LoadingComponent />;

  const handleClickId = (
    id: number,
    firs_name: string,
    avatar: string,
    contenido: string
  ) => {
    setTweet_id(id);
    setFirs_name(firs_name);
    setAvatar(avatar);
    setContenido(contenido);
    navigate("/comments");
  };
  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate("/Profile");
  };
  const handleImgClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <main>
      {data?.data
        .slice()
        .reverse()
        .map((tweet: TweetsInterface) => (
          <React.Fragment key={tweet.id}>
            <article
              className="py-3 px-4  h-auto border-2 border-gray-100
       hover:bg-gray-100 cursor-pointer"
              onClick={() =>
                handleClickId(
                  tweet.id,
                  tweet.usuario?.firs_name || "",
                  tweet.usuario?.avatar || "",
                  tweet.contenido || ""
                )
              }
            >
              <div className="grid grid-cols-[40px,1fr] ">
                <div className=" w-10 mr-3 grid ">
                  {/* <Tooltip> */}
                    {/* <img
                      src={tweet.usuario?.avatar}
                      className="w-10 h-10 mr-3 rounded-full 
              bg-black cursor-pointer"
                      onClick={handleProfileClick}
                    ></img> */}
                    {tweet.usuario?.avatar ? (
                          <img
                            src={tweet.usuario?.avatar}
                            alt=""
                            className="w-[45px] h-[45px] rounded-full"
                            onClick={handleProfileClick}
                          />
                      ) : (
                          <img src={defaultUser} className="w-[45px] h-[45px] rounded-full" alt="" onClick={handleProfileClick}/>
                      )}
                  {/* </Tooltip> */}
                </div>
                <div className="flex flex-col ml-3 ">
                  <div className="flex gap-1 items-center">
                    {/* <Tooltip> */}
                      <span className="hover:underline">
                        {tweet.usuario?.firs_name}
                      </span>
                      <span>@{tweet.usuario?.firs_name}</span>
                    {/* </Tooltip> */}
                    <span className="mb-2">.</span>
                    <span className="">
                      <TimeAgo timestamp={tweet.created} />
                    </span>
                    <div className="group/edit group flex items-center">
                      <div
                        className="group-hover/edit:bg-blue-100 
                rounded-full w-[35px] h-[35px] flex items-center justify-center 
                absolute  right-5"
                      >
                        {Ellipse}
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className=" text-justify hyphens-auto">
                      {tweet.contenido}
                    </p>
                  </div>
                  {(tweet.multimedia || tweet.gif) && (
                    <img
                      src={tweet.multimedia || tweet.gif}
                      alt=""
                      className="rounded-lg"
                      onClick={(e) => {
                        handleImgClick(e);
                        openImage(tweet.multimedia || tweet.gif);
                      }}
                    />
                  )}
                </div>
              </div>

              <Functionality tweetData={tweet} />
            </article>
          </React.Fragment>
        ))}
      <div data-dial-init className="fixed right-6 bottom-16 group ">
        <div
          className="w-14 h-14 bg-blue-500 rounded-full flex 
          items-center 
    justify-center cursor-pointer"
          onClick={() => navigate("/posttweets")}
        >
          {GoToPost}
        </div>
      </div>
      <ImageModal enlargedImage={enlargedImage} closeImage={closeImage} />
    </main>
  );
}
