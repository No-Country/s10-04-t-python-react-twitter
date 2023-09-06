import useGifStore, { useTweetPost } from "../../../store/Home/postStore";

export default function usePostStore() {
  const setSearchText = useGifStore((state) => state.setSearchText);
  const setSelectName = useGifStore((state) => state.setSelectName);
  const setSelectImage = useGifStore((state) =>state.setSelectImage )
  const setContentUser = useTweetPost((state) => state.setContentUser);
  const setTextArea = useTweetPost((state) => state.setTextArea);
  const setImageFile = useTweetPost((state) => state.setImageFile)
  const setTweet_id = useTweetPost((state) => state.setTweet_id)
  const selectImage = useGifStore((state) => state.selectImage);
  const selectGif = useGifStore((state) => state.selectImage);
  const searchText = useGifStore((state) => state.searchText);
  const textArea = useTweetPost((state) => state.textArea);
  const contentUser = useTweetPost((state) => state.contentUser);
  const imageFile = useTweetPost((state) => state.imageFile);
  const tweet_id = useTweetPost((state) =>state.tweet_id)
  

  return {
    setSearchText,
    setSelectName,
    setContentUser,
    setTextArea,
    setSelectImage,
    setImageFile,
    setTweet_id,
    searchText,
    textArea,
    contentUser,
    selectImage,
    selectGif,
    imageFile,
    tweet_id

  };
}
