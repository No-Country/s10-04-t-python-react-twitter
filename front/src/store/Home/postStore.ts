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
  contentUser: string ;
  setContentUser: (img:string) => void
  textArea: string;
  setTextArea: (text:string) => void

}

const usePostStore = create<gifState>((set) => ({
      
    searchText: "",
    selectName: "",
    selectImage: "",
    setSearchText: (text) => set({ searchText: text }),
    setSelectName: (name) => set({ selectName: name }),
    setSelectImage:(img) => set({ selectImage:img }),
  }))

  export const useTweetPost = create<tweetPost>((set) => ({
    contentUser: "",
    textArea:"",
    setContentUser:(contentUser) => set({contentUser:contentUser}),
    setTextArea:(textArea) => set({textArea:textArea}),
  }))


export default usePostStore;