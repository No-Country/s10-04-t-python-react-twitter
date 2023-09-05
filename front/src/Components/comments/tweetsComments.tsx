import { Link } from "react-router-dom";
import Tooltip from "../Home/tweets/tooltip";
import Functionality from "../Home/tweets/tweetsFunctionality";
import { Ellipse } from "../Home/tweets/TweetIcons/Icons";
import BackButton from "./BackButton";

export default function commentsTweets() {
  return (
    <main className="" >
      <article
        className="py-3 px-4  h-auto border-2 border-gray-100"
      >
        <BackButton title="Post" />
        <div className=" flex flex-row ">
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
          
            <div className="flex justify-between ">
              <div className="flex gap-1 items-center">
                <Tooltip>
                  <div className="flex flex-col">
                    <span className="hover:underline">Ever Rojas</span>
                    <span>@EverRojas</span>
                  </div>
                </Tooltip>
              </div>
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
              <p className=" text-justify hyphens-auto">hola</p>
            </div>
            {/* {tweet.multimedia &&
            <img src={tweet.multimedia} alt="" className="rounded-lg"/>
} */}
      </article>
      <div className="border-b-2 border-gray-100">
      <Functionality />
      </div>
    </main>
  );
}
