import { useNavigate } from "react-router-dom";
import UserInformation from "../userInformation";
import usePostStore from "./postStore/usePostStore";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useFuncionalityComments(tweetData:any) {
    const navigate = useNavigate()
    const {setTweet_id} = usePostStore()
    const {setFirs_name,setAvatar,setContenido} = UserInformation()
    
    const handleFunctionalityClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setTweet_id(tweetData.id);
        setFirs_name(tweetData.usuario?.firs_name);
        setAvatar( tweetData.usuario?.avatar);
        setContenido(tweetData.contenido)
        navigate("/replycomments");
      };
 return { handleFunctionalityClick }
}