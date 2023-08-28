import {create} from 'zustand';
import { persist, createJSONStorage,devtools } from 'zustand/middleware'
interface gifState {
    searchText: string;
    selectName: string;
    selectImage: string
    setSearchText: (text:string) => void
    setSelectName: (name:string) => void
    setSelectImage: (img:string) => void
}

const useGifStore = create<gifState>()(
  devtools(
    persist(
      (set) => ({
    searchText: "",
    selectName: "",
    selectImage: "",
    setSearchText: (text) => set({ searchText: text }),
    setSelectName: (name) => set({ selectName: name }),
    setSelectImage:(img) => set({ selectImage:img }),
  }),
  {
    name: "gifStorage",
    storage: createJSONStorage(() => sessionStorage)
  }
  )
)
)

export default useGifStore;