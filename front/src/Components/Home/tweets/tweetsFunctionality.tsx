import { useNavigate } from "react-router-dom";
import { Message, Retweet, Like, Share } from "./TweetIcons/Icons";
import React from "react";
interface funcionality {
  comentario_count?: number;
  liked_count?: number;
  retweet_count?: number;
}
export default function Functionality({
  onClick,
  tweetData,
}: {
  onClick: (e: React.MouseEvent) => void;
  tweetData: funcionality;
}): JSX.Element {
  const navigate = useNavigate();
  const handleFunctionalityClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={onClick}
      className="flex flex-row items-center justify-between gap-2 mt-3"
    >
      <div className="flex flex-row items-center gap-1 group">
        <div
          className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-blue-100 rounded-full cursor-pointer"
          onClick={(e) => {
            handleFunctionalityClick(e);
            navigate("/replycomments");
          }}
        >
          {Message}
        </div>
        <span
          className={`${
            tweetData?.comentario_count === 0
              ? "hidden"
              : "group-hover:text-blue-400"
          }`}
        >
          {tweetData?.comentario_count}
        </span>
      </div>
      <div className="flex flex-row items-center gap-1 group">
        <div
          className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-blue-100 rounded-full cursor-pointer"
        >
          {Retweet}
        </div>
        <span
          className={`${
            tweetData?.retweet_count === 0
              ? "hidden"
              : "group-hover:text-green-400"
          }`}
        >
          {tweetData?.retweet_count}
        </span>
      </div>
      <div className="flex flex-row items-center gap-1 group">
        <div
          className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-red-100 rounded-full cursor-pointer"
        >
          {Like}
        </div>
        <span
          className={`${
            tweetData?.liked_count === 0 ? "hidden" : "group-hover:text-red-400"
          }`}
        >
          {tweetData?.liked_count}
        </span>
      </div>
      {/* <div className="flex flex-row items-center gap-1 group">
            <div
              className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-blue-100 rounded-full cursor-pointer"
            >
              {Measure}
            </div>
            <span className="group-hover:text-blue-400">2</span>
          </div> */}
      <div className="flex flex-row items-center group">
        <div
          className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-blue-100 rounded-full cursor-pointer"
        >
          {Share}
        </div>
      </div>
    </div>
  );
}
