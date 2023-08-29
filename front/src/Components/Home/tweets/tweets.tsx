import { Ellipse, GoToPost } from "./TweetIcons/Icons";
import { Link } from "react-router-dom";
import Functionality from "./tweetsFunctionality";
import Tooltip from "./tooltip";
import { useNavigate } from "react-router-dom";

export default function Tweets(): JSX.Element {
  const navigate = useNavigate();
  const text = {
    text1:
      "Lorem ipsum dolor sit amet consectetur. Venenatis vulputate turpis nam vitae viverra venenatis. Nibh nulla volutpat sit arcu maecenas cras tincidunt laoreet. Vestibulum neque amet et volutpat et justo neque. Scelerisque ornare sit convallis vivamus.",
  };
  return (
    <main>
      <article
        className="py-3 px-4  h-auto border-2 border-gray-100
       hover:bg-gray-100 cursor-pointer"
      >
        <div className="grid grid-flow-col">
          <Tooltip>
            <div className="col-span-1 w-10 mr-3">
              <div
                className="w-10 h-10 mr-3 rounded-full 
              bg-black cursor-pointer"
              >
                <Link to="#" className="w-10 h-10 " />
              </div>
            </div>
          </Tooltip>
          <div className="col-span-1 ">
            <div className="flex justify-between ">
              <div className="flex gap-1 items-center">
                <Tooltip>
                  <span className="hover:underline">Ever Rojas</span>
                  <span>@EverRojas</span>
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
            <div className="">
              <p className=" text-justify hyphens-auto">{text.text1}</p>
            </div>
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
  );
}
