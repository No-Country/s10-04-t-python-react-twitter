import { memo,} from "react";
import { ResultsApi } from "../../../../types";
import useGift from "../../../../Hooks/Home/useGif";
import LoadingComponent from "../../../LoadingComponent";
import useGifStore from "../../../../store/Home/gifStore";
import { useNavigate } from "react-router-dom";
import {shallow} from "zustand/shallow";



export const SearchResults = memo (function Results({data}:{data:ResultsApi}) {
  const[setSelectImage] = useGifStore((state) => [state.setSelectImage], shallow)
  const {searchLoading} =useGift()
  const navigate = useNavigate()
  if(searchLoading) return <LoadingComponent/>

  const handleClickImage = (img:string)=>{
    setSelectImage(img)
    navigate("/posttweets")
  }
 console.log(setSelectImage)
    return (
      <div className="grid grid-cols-3 gap-1">
        {data?.map((gif) => (
          <div key={gif.id}>
            <img
              className="w-[193px] h-[150px]"
              src={gif.images.original.url}
              alt=""
              onClick={()=>handleClickImage(gif.images.original.url)}
            />
          </div>
        ))}
      </div>
    );
  });