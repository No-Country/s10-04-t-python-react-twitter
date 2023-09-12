import { useEffect, useState } from "react";
import GifEmojiFileDisplay from "../Home/createPost/GifEmojiFileDisplay";
import usePostStore from "../../Hooks/Home/postStore/usePostStore";
import { closeIcon } from "../Home/createPost/Icons/closeIcon";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { getPostById } from "../../services/dataApi";

export default function MessageReply() {
  const dataPost = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { config: { access: any } }) => state.config.access || []
  );
  const id = localStorage.getItem("userId");

  useEffect(() => {
    getPostById({id})
  },
  [id])
  
  const [close, setClose] = useState(false);
  const {
    setContentUser,
    setSelectImage,
    setTextArea,
    textArea,
    selectImage,
    contentUser,
  } = usePostStore();

  const handleImageClose = () => {
    if (close) return;
    setContentUser("");
    setSelectImage("");
    setClose(false);
  };
  return (
    <section className="grid grid-flow-row auto-rows-max px-4 pt-4 mt-3">
      <div className="grid grid-cols-[40px,1fr]">
        <img src={dataPost?.avatar} className="w-10 h-10 rounded-full bg-black cursor-pointer" />
        <div className="flex flex-col ml-3">
          <textarea
            className="border-0 focus:ring-white
           "
            placeholder="Publica tu respuesta!"
            onChange={(e) => setTextArea(e.currentTarget.value)}
            value={textArea}
          />
          <div className="relative w-[302px]">
            {selectImage || contentUser ? (
              <>
                <div
                  className="bg-black rounded-full w-8 h-8 flex 
                  items-center justify-center absolute right-0 cursor-pointer"
                  onClick={handleImageClose}
                >
                  {closeIcon}
                </div>
                <img
                  src={selectImage || contentUser}
                  alt=""
                  className="h-[302px] w-[302px] mb-2 rounded-lg"
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <GifEmojiFileDisplay />
      </div>
    </section>
  );
}
