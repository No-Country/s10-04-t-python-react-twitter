import { useRef } from "react";
import { galleryIcon, emojiIcon, gifIcon, } from "./Icons/GifEmojiFileIcon";
import { useNavigate } from "react-router-dom";
import usePostStore, { useTweetPost } from "../../../store/Home/postStore";
export default function GifEmojiFileDisplay() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate()
  const contentUser = useTweetPost((state) => state.contentUser)
  const setContentUser = useTweetPost((state) => state.setContentUser)
  const selectGif = usePostStore((state) => state.selectImage)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
  
    if (fileInput instanceof HTMLInputElement && fileInput.files) {
      const file = fileInput.files[0];
      if (file) {
        setContentUser(URL.createObjectURL(file));
      }
    }
  };
  return (
    <section className="flex flex-row justify-between mt-10 ">
      <div className="flex gap-x-5">
        <button onClick={handleClick} className={`cursor-pointer ${selectGif ? "opacity-50" : ""}`} 
         disabled={selectGif !== ""}>
          {galleryIcon}
          <input ref={inputRef} accept="" type="file" hidden onChange={handleOnChange} />
        </button>
        <button className={`cursor-pointer ${contentUser ? "opacity-50" : ""}`} onClick={() => navigate("/gift")} disabled={contentUser !== ""}>{gifIcon}</button>
        <div className="cursor-pointer">{emojiIcon}</div>
      </div>
    </section>
  );
}
