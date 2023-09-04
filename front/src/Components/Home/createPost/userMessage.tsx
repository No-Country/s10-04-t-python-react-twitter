import { useState } from "react";
import { WorldIcon } from "./Icons/worldIcon";
import { securityIcon } from "./Icons/securityIcon";
import GifEmojiFileDisplay from "./GifEmojiFileDisplay";
import { closeIcon } from "./Icons/closeIcon";
import usePostStore from "../../../Hooks/Home/postStore/usePostStore";

export default function UserMessage() {
  const [selectOption, setSelectedOption] = useState("todos");
  const {
    textArea,
    setTextArea,
    selectImage,
    contentUser,
    setContentUser,
    setSelectImage,
  } = usePostStore();
  const [close, setClose] = useState(false);

  const handleSelectedOption = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };
  const handleImageClose = () => {
    if (close) return;
    setContentUser("");
    setSelectImage("");
    setClose(false);
  };

  return (
    <section className="grid grid-flow-row auto-rows-max -2 px-4 pt-4">
      <div className="grid grid-cols-[40px,1fr]">
        <div className="w-10 h-10 rounded-full bg-black cursor-pointer"></div>
        <div className="flex flex-col ml-3">
          <select
            className=" w-[108px] h-10 border-1 flex items-center 
          justify-center border 
          border-gray-300 focus:border-blue-500 
          focus:outline-none focus:ring-2 ring-blue-200 rounded-full px-3 mb-3"
            onChange={handleSelectedOption}
            value={selectOption}
          >
            <option value="todos">Todos</option>
            <option value="circle">Circle</option>
          </select>
          <textarea
            className="border-0 focus:ring-white
           "
            placeholder="que esta pasando?!"
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
        <div className="flex flex-row items-center  gap-1">
          <span className={selectOption === "todos" ? "" : "hidden"}>
            {WorldIcon}
          </span>
          <span
            className={selectOption === "todos" ? "text-blue-500" : "hidden"}
          >
            Todos pueden responder
          </span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <span className={selectOption === "circle" ? "" : "hidden"}>
            {securityIcon}
          </span>
          <span
            className={selectOption === "circle" ? "text-blue-500" : "hidden"}
          >
            Solo tus seguidores pueden responder
          </span>
        </div>
        <GifEmojiFileDisplay />
      </div>
    </section>
  );
}
