import { Link, useNavigate } from "react-router-dom";
import Tooltip from "../Home/tweets/tooltip";
import { Ellipse } from "../Home/tweets/TweetIcons/Icons";
import Functionality from "../Home/tweets/tweetsFunctionality";
import FunctionalityIcons from "../../Hooks/funcionalityIcons";
// import usePostStore from "../../Hooks/Home/postStore/usePostStore";
import useSelectedTweet from "../../Hooks/Home/useSelectedTweet";
import TimeAgo from "../Home/tweets/timeAgo";
import useImageModal from "../../Hooks/imageModal";
import ImageModal from "../Home/tweets/ImageModal";
interface commentUser{
  created_at:string;
  multimedia:string;
  content:string;
  gif:string
}
export default function CommentsUser() {
  // const {tweet_id}=usePostStore()
  const { data } = useSelectedTweet()
  const navigate = useNavigate();
  const {openImage,enlargedImage, closeImage} = useImageModal()
  console.log(data)
  const handleFunctionalityClick = (e: React.MouseEvent) => {
   
    e.stopPropagation();
    navigate("/replycomments");
  };
 
  const { funcionalityIcons } = FunctionalityIcons();
  return (
    <main>
      {data?.data.comentario.slice().reverse().map((comments : commentUser) =>
        
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
              <span className=""><TimeAgo timestamp={comments.created_at} /></span>
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
              <p className=" text-justify hyphens-auto">{comments.content}</p>
            </div>
            {(comments.multimedia ||comments.gif) &&
                <img src={comments.multimedia ||comments.gif} alt="" className="rounded-lg" onClick={() =>openImage(comments.multimedia || comments.gif)}/>
    }
          </div>
        </div>
     
        <Functionality onClick={handleFunctionalityClick} tweetData={funcionalityIcons} />
      </article>
      )}
       <ImageModal enlargedImage={enlargedImage} closeImage={closeImage} />
    </main>
  );
}
