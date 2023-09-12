// import Tooltip from "../Home/tweets/tooltip";
import { Ellipse } from "../Home/tweets/TweetIcons/Icons";
import BackButton from "./BackButton";
import Functionality from "../Home/tweets/tweetsFunctionality";
import useSelectedTweet from "../../Hooks/Home/useSelectedTweet";
import useImageModal from "../../Hooks/imageModal";
import ImageModal from "../Home/tweets/ImageModal";
import UserInformation from "../../Hooks/userInformation";
import usePostStore from "../../Hooks/Home/postStore/usePostStore";
import defaultUser from "../../assets/userDefault.png";

export default function CommentsTweets() {
  const { data } = useSelectedTweet();
  const { openImage, enlargedImage, closeImage } = useImageModal();
  const { tweet_id } = usePostStore();
  const { firs_name, avatar } = UserInformation();

  const tweetData = {
    id: tweet_id,
    comentario_count: data?.data.comentario_count,
    usuario: {
      firs_name: firs_name,
      avatar: avatar,
    },
  };

  return (
    <main className="">
      <>
        <article className="py-3 px-4  h-auto border-2 border-gray-100">
          <BackButton title="Post" />
          <div className=" flex flex-row ">
            <div className=" w-10 mr-3 grid">
              {/* <Tooltip> */}
                {avatar ? (
                  <img
                    src={avatar}
                    alt=""
                    className="w-[45px] h-[45px] rounded-full cursor-pointer"
                  />
                ) : (
                  <img src={defaultUser} className="w-[45px] h-[45px] rounded-full" alt="" />
                )}
              {/* </Tooltip> */}
            </div>

            <div className="flex justify-between ">
              <div className="flex gap-1 items-center">
                {/* <Tooltip> */}
                  <div className="flex flex-col">
                    <span className="hover:underline">{firs_name}</span>
                    <span>@{firs_name}</span>
                  </div>
                {/* </Tooltip> */}
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
          {(data?.data.multimedia || data?.data.gif) && (
            <img
              src={data?.data.multimedia || data?.data.gif}
              alt=""
              className="rounded-lg"
              onClick={() => openImage(data?.data.multimedia || data?.data.gif)}
            />
          )}
        </article>
        <div className="border-b-2 border-gray-100">
          <Functionality tweetData={tweetData} />
        </div>
        <ImageModal enlargedImage={enlargedImage} closeImage={closeImage} />
      </>
    </main>
  );
}
