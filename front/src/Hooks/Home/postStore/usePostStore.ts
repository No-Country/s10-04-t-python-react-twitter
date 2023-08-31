import useGifStore, { useTweetPost } from "../../../store/Home/postStore";

export default function usePostStore() {
  const setSearchText = useGifStore((state) => state.setSearchText);
  const setSelectName = useGifStore((state) => state.setSelectName);
  const setSelectImage = useGifStore((state) =>state.setSelectImage )
  const setContentUser = useTweetPost((state) => state.setContentUser);
  const setTextArea = useTweetPost((state) => state.setTextArea);
  const selectImage = useGifStore((state) => state.selectImage);
  const selectGif = useGifStore((state) => state.selectImage);
  const searchText = useGifStore((state) => state.searchText);
  const textArea = useTweetPost((state) => state.textArea);
  const contentUser = useTweetPost((state) => state.contentUser);
  

  return {
    setSearchText,
    setSelectName,
    setContentUser,
    setTextArea,
    setSelectImage,
    searchText,
    textArea,
    contentUser,
    selectImage,
    selectGif,
  };
}
