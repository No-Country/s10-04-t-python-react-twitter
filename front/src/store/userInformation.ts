import {create} from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface userInformation{
  firs_name: string,
  avatar: string,
  contenido: string,
  setFirs_name: (text:string) => void
  setAvatar: (img:string) => void
  setContenido:(text:string) => void
}

export const useUserInformation = create<userInformation>()(
    persist(
    (set) => ({
    firs_name: "",
    avatar:"",
    contenido:"",
    setFirs_name:(text:string) => set({firs_name: text}),
    setAvatar:(img:string) => set({avatar:img}),
    setContenido:(text:string) => set({contenido: text}),

}),
{
  name: "user-Information",
  storage: createJSONStorage(() => sessionStorage)
}
)
)