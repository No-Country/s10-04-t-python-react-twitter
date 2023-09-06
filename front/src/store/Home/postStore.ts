import {create} from 'zustand';

interface gifState {
    searchText: string;
    selectName: string;
    selectImage: string
    setSearchText: (text:string) => void
    setSelectName: (name:string) => void
    setSelectImage: (img:string) => void
}

interface tweetPost {
  tweet_id:number  | null
  contentUser: string ;
  textArea: string;
  imageFile: File | null;
  setContentUser: (img:string) => void
  setTextArea: (text:string) => void
  setImageFile: (img:File) => void
  setTweet_id:(id:number) => void
  
}

const usePostStore = create<gifState>((set) => ({
      
    searchText: "",
    selectName: "",
    selectImage: "",
    setSearchText: (text) => set({ searchText: text }),
    setSelectName: (name) => set({ selectName: name }),
    setSelectImage:(img) => set({ selectImage: img }),
  }))

  export const useTweetPost = create<tweetPost>((set) => ({
    tweet_id:null,
    contentUser: "",
    textArea:"",
    imageFile: null,
    setContentUser:(contentUser) => set({contentUser:contentUser}),
    setTextArea:(textArea) => set({textArea:textArea}),
    setImageFile:(img) => set({imageFile:img}),
    setTweet_id:(id) => set({tweet_id:id})
  }))


export default usePostStore;