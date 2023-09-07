import { Ellipse, GoToPost } from "./TweetIcons/Icons";
import Functionality from "./tweetsFunctionality";
import Tooltip from "./tooltip";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { TweetsInterface } from "../../../types";
import TimeAgo from "./timeAgo";
import usePostStore from "../../../Hooks/Home/postStore/usePostStore";
import { closeIcon } from "../createPost/Icons/closeIcon";

import useTweets from "../../../Hooks/Home/usetweets";



export default function Tweets(): JSX.Element {
  const navigate = useNavigate();
  const {setTweet_id}=usePostStore()
  const { data } = useTweets()
  // console.log(data)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const openImage = (imageSrc: string) => {
    setEnlargedImage(imageSrc);
  };

  const closeImage = () => {
    setEnlargedImage(null);
  };

  const handleClickId = (id:number) =>{
    setTweet_id(id)
    console.log(id);
    navigate("/comments")

  }
  const handleProfileClick = (e:React.MouseEvent) => {
    e.stopPropagation();
    navigate("/Profile")
  }
  const handleImgClick = (e: React.MouseEvent) => {
    e.stopPropagation();
   
  };
  const handleFunctionalityClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <main>
      {data?.data
        ?.slice()
        .reverse()
        .map((tweet: TweetsInterface) => (
          <React.Fragment key={tweet.id}>
            <article
              className="py-3 px-4  h-auto border-2 border-gray-100
       hover:bg-gray-100 cursor-pointer"
              onClick={() => handleClickId(tweet.id) }
            >
              <div className="grid grid-cols-[40px,1fr] ">
                <div className=" w-10 mr-3 grid " >
                  <Tooltip>
                    <div
                      className="w-10 h-10 mr-3 rounded-full 
              bg-black cursor-pointer"
              onClick={handleProfileClick}
                    >
                    </div>
                  </Tooltip>
                </div>
                <div className="flex flex-col ml-3 ">
                  <div className="flex gap-1 items-center">
                    <Tooltip>
                      <span className="hover:underline">Ever Rojas</span>
                      <span>@EverRojas</span>
                    </Tooltip>
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
                      onClick={(e) => { handleImgClick(e);
                      openImage(tweet.multimedia || tweet.gif);
                    }}
                    />
                  )}
                </div>
              </div>
            
              <Functionality onClick={handleFunctionalityClick} tweetData={tweet} />
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
         {enlargedImage && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-50">
          <div className=" relative w-screen h-screen">
            <img
              src={enlargedImage}
              alt="Enlarged Image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={closeImage}
              className="absolute top-0 left-0 m-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none"
            >
              {closeIcon}
              </button>
          </div>
        </div>
      )}
    </main>
  );
}
