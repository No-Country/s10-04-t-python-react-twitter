import { useRef } from "react";
import { galleryIcon, gifIcon, } from "./Icons/GifEmojiFileIcon";
import { useNavigate } from "react-router-dom";
import usePostStore from "../../../Hooks/Home/postStore/usePostStore";

export default function GifEmojiFileDisplay() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate()
  const {contentUser,setContentUser, selectGif, setImageFile} = usePostStore()

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
        setImageFile(file)
        console.log(file)
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
      </div>
    </section>
  );
}
