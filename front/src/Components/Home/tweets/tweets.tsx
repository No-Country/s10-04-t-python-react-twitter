import { Ellipse, GoToPost } from "./TweetIcons/Icons";
import { Link } from "react-router-dom";
import Functionality from "./tweetsFunctionality";
import Tooltip from "./tooltip";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTweets } from "../../../services/getTweets";
import { TweetsInterface } from "../../../types";
import TimeAgo from "./timeAgo";

export default function Tweets(): JSX.Element {
  const navigate = useNavigate();
  const { data } = useQuery(["newtweets"], getTweets);
 

  return (
    <main>
      {data?.data
        ?.slice()
        .reverse()
        .map((tweet: TweetsInterface, index: number) => (
          <React.Fragment key={index}>
            <article
              className="py-3 px-4  h-auto border-2 border-gray-100
       hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate("/comments")}
            >
              <div className="grid grid-cols-[40px,1fr] ">
                <div className=" w-10 mr-3 grid">
                  <Tooltip>
                    <div
                      className="w-10 h-10 mr-3 rounded-full 
              bg-black cursor-pointer"
                    >
                      <Link to="#" className="w-10 h-10 " />
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
                    />
                  )}
                </div>
              </div>
              <Functionality />
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
          </React.Fragment>
        ))}
    </main>
  );
}
