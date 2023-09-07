import { Link, useNavigate } from "react-router-dom";
import Tooltip from "../Home/tweets/tooltip";
import { Ellipse } from "../Home/tweets/TweetIcons/Icons";
import { useQuery } from "@tanstack/react-query";
import { getTweetsComments } from "../../services/getTweets";
import Functionality from "../Home/tweets/tweetsFunctionality";
import FunctionalityIcons from "../../Hooks/funcionalityIcons";

export default function CommentsUser() {
  const { data} = useQuery({
    queryKey: ['todos'],
    queryFn: getTweetsComments,
  })
  console.log(data)
  const handleFunctionalityClick = (e: React.MouseEvent) => {
   
    e.stopPropagation();
    navigate("/replycomments");
  };

  const navigate = useNavigate();
  const { funcionalityIcons } = FunctionalityIcons();
  return (
    <main>
      <article
        className="py-3 px-4  h-auto border-2 border-gray-100
           hover:bg-gray-100 cursor-pointer"
        onClick={() => navigate("/comments")}
      >
        <div className="grid grid-cols-[40px,1fr] ">
          <div className="w-10 mr-3 grid">
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
              <span className="">aug 20</span>
              <div className="group/edit group flex items-center">
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
              <p className=" text-justify hyphens-auto">bebeeeeeee</p>
            </div>
          </div>
          {/* {tweet.multimedia &&
                <img src={tweet.multimedia} alt="" className="rounded-lg"/>
    } */}
        </div>
        <Functionality onClick={handleFunctionalityClick} tweetData={funcionalityIcons} />
      </article>
    </main>
  );
}