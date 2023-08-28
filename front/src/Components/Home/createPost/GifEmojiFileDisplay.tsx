import { useRef } from "react";
import { galleryIcon, emojiIcon, gifIcon } from "./Icons/GifEmojiFileIcon";
import { useNavigate } from "react-router-dom";
export default function GifEmojiFileDisplay() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate()

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <section className="flex flex-row justify-between mt-10 ">
      <div className="flex gap-x-5">
        <div onClick={handleClick} className="cursor-pointer">
          {galleryIcon}
          <input ref={inputRef} accept="" type="file" hidden />
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/gift")}>{gifIcon}</div>
        <div className="cursor-pointer">{emojiIcon}</div>
      </div>
    </section>
  );
}
