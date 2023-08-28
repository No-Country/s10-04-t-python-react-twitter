import { memo } from "react";
import { DataResultProps } from "../../../../types";
import useGift from "../../../../Hooks/Home/useGif";
import LoadingComponent from "../../../LoadingComponent";


export const GifResults = memo(function DataResult({ data,}: DataResultProps ) {
 const {handleSelectName, isLoading} = useGift()
 if(isLoading) return <LoadingComponent/>
    return (
      
      <div className="grid grid-cols-2 gap-2">
        {data?.data?.map((gif) => (
          <div key={gif.gif.id}>
            <img
              src={gif.gif.images.original.url}
              className="w-[193px] h-[150px] curs"
              onClick={() => handleSelectName(gif.name)}
            />
            <p>{gif.name}</p>
          </div>
        ))}
      </div>
    );
  })