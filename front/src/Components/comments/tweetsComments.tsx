import { Link, useNavigate } from "react-router-dom";
import Tooltip from "../Home/tweets/tooltip";
import { Ellipse } from "../Home/tweets/TweetIcons/Icons";
import BackButton from "./BackButton";
import Functionality from "../Home/tweets/tweetsFunctionality";
import useSelectedTweet from "../../Hooks/Home/useSelectedTweet";
import useImageModal from "../../Hooks/imageModal";
import ImageModal from "../Home/tweets/ImageModal";
import usePostStore from "../../Hooks/Home/postStore/usePostStore";
interface comments {
  tweet_original:number
}

export default function CommentsTweets() {
  
  const { data } = useSelectedTweet()
  const navigate = useNavigate()
  const {setTweet_id} = usePostStore()
  const {openImage,enlargedImage, closeImage} = useImageModal()

  const handleFunctionalityClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTweet_id(data?.data.tweet_original)
    
     navigate("/replycomments");
  };
 

 
  const commentIds = data?.data.comentario.map((coment:comments) => coment.tweet_original);


  const selectedId = commentIds?.length > 0 ? commentIds[0] : null; //

const tweetData = {
  id: selectedId,
  likes: data?.data.likes,
  comentario_count: data?.data.comentario_count || 0,
};

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
              <p className=" text-justify hyphens-auto">{data?.data.contenido}</p>
            </div>
            {(data?.data.multimedia || data?.data.gif) &&
                <img src={data?.data.multimedia || data?.data.gif} alt="" className="rounded-lg"
                onClick={() =>openImage(data?.data.multimedia || data?.data.gif)}/>
    }
      </article>
      <div className="border-b-2 border-gray-100">
      <Functionality onClick={handleFunctionalityClick} tweetData={tweetData}/>
      </div>
      <ImageModal enlargedImage={enlargedImage} closeImage={closeImage} />
    </main>
  );
}
