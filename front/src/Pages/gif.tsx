import { GifResults } from "../Components/Home/createPost/Gif/gifResults";
import { SearchResults } from "../Components/Home/createPost/Gif/searchResults";
import { HeaderBack } from "../Components/Home/createPost/Icons/headerBack";
import useGift from "../Hooks/Home/useGif";
import Button from "../Components/Home/buttons/buttons";
import {useNavigate} from "react-router-dom"
import usePostStore from "../store/Home/postStore";


function GifPage() {
  const { handleSearch, debouncedSearchText} = useGift();
  const {searchText} = usePostStore()
  const navigate = useNavigate();
 
  const handleClickBack = () => {
    if (debouncedSearchText) {
     window.location.reload()
    } else {
      navigate(-1);
    }
  };

  return (
    <main >
      <div className=" flex flex-row justify-evenly mb-2 p-4">
        <Button variant="secondary" onClick={handleClickBack}>
          {HeaderBack}
        </Button>
        <input  className= "rounded-full"placeholder="search for GIFs" type="search" onChange={handleSearch} value={searchText} autoFocus />
      </div>
      <div>
        {debouncedSearchText.length === 0 ? (
          <GifResults/>
        ) : (
          <SearchResults/>
        )}
      </div>
    </main>
  );
}

export default GifPage;
