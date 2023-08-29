import React, {useCallback, } from "react";
import { useQuery } from "react-query";
import { fetchSearch, fetchGifs } from "../../services/gifApi";
import useDebounce from "../useDebounce";
import { SearchResults } from "../../Components/Home/createPost/Gif/searchResults";
import useGifStore from "../../store/Home/postStore";


export default function useGift(){
  const setSearchText = useGifStore((state) => state.setSearchText)
  const setSelectName = useGifStore((state) => state.setSelectName);
  const searchText = useGifStore((state) => state.searchText)
  
  const debouncedSearchText = useDebounce(searchText,300)

  const debounce = useCallback( async (text:string) => {
    const result = await fetchSearch(text)
    return result 

  },[])

  const { data: search, isLoading: searchLoading } = useQuery(
    ["search", debouncedSearchText], 
    () => debounce(debouncedSearchText),
    {
      enabled: !!debouncedSearchText,
    }
  );
  
  const { data, error, isLoading } = useQuery('giphy', fetchGifs,
  {
    enabled: !!SearchResults
  }
  )
  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSearchText(event.target.value); 
    },
    [setSearchText]
  );

  const handleSelectName =  (name:string) => {
    setSelectName(name)
    setSearchText(name)
  }
    return { data, error, debouncedSearchText,search, 
        handleSearch,handleSelectName, isLoading, searchLoading}
}



