import { memo } from "react";
import { Gif } from "../../../../types";
import useGift from "../../../../Hooks/Home/useGif";
import LoadingComponent from "../../../LoadingComponent";


export const GifResults = memo(function DataResult() {
 const {handleSelectName, isLoading,data} = useGift()
 if(isLoading) return <LoadingComponent/>
    return (
      
      <div className="grid grid-cols-2 gap-2">
        {data?.data?.map((gif:Gif) => (
          <div key={gif.gif.id}>
            <img
              src={gif.gif.images.original.url}
              className="w-[193px] h-[150px] cursor-pointer"
              onClick={() => handleSelectName(gif.name)}
            />
            <p>{gif.name}</p>
          </div>
        ))}
      </div>
    );
  })