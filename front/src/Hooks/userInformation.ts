import { useUserInformation } from "../store/userInformation";

export default function UserInformation (){
    const firs_name = useUserInformation((state) => state.firs_name)
    const avatar = useUserInformation((state) => state.avatar)
    const contenido = useUserInformation((state) => state.contenido)
    const setFirs_name = useUserInformation((state) => state.setFirs_name)
    const setAvatar = useUserInformation((state) => state.setAvatar)
    const setContenido = useUserInformation((state) => state.setContenido)
    return { firs_name,avatar,setFirs_name,setAvatar, setContenido, contenido }
}