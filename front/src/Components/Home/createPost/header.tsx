import Button from "../buttons/buttons";
import { useNavigate } from "react-router-dom";
import { HeaderBack } from "./Icons/headerBack";
import { FormEvent,} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import usePostStore from "../../../Hooks/Home/postStore/usePostStore";
import { postTweets } from "../../../services/postTweets/postTweets";

export default function Header() {
  // const [firs_name, setFirstName] = useState(""); 
  // const [last_name, setLastName] = useState("");   
  // const [avatar, setAvatar] = useState(null);  
  const { textArea, contentUser, selectImage, imageFile, setTextArea,setContentUser,setSelectImage,setImageFile } = usePostStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  const handleClickBack = () => {
    navigate("/home");
  };
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  const { mutate } = useMutation({
    mutationFn: postTweets,
    onMutate: async (newTodo) => {
      setTextArea("")
      setContentUser("")
      setSelectImage("")
      setImageFile(null)
      await queryClient.cancelQueries(['newtweets'])
      const previousTodos = queryClient.getQueryData(['newtweets'])
      await queryClient.setQueryData(['newtweets'], old => {
        if (old === null) {
          return [newTodo];
        }
        if (Array.isArray(old)) {
          return [...old, newTodo];
        }
        return old;
      });
  
      return { previousTodos };
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['newtweets']
      });
    }
  });
    
  
  // const handleAddPost = () => {
  //   if ((textArea.trim() !== "" || contentUser || selectImage) && (textArea.trim() !== "" || selectImage || contentUser)){
  //     const usuarioData = {};
      
  //     if (avatar) {
  //       usuarioData.avatar = avatar;
  //     }
  //     if (last_name) {
  //       usuarioData.last_name = last_name;
  //     }
  //     if (!avatar && !last_name) {
  //       usuarioData.firs_name = "NoCountry";
  //     }
  
  //     const postData = {
  //       usuario: Object.keys(usuarioData).length > 0 ? usuarioData : undefined,
  //       contenido: textArea,
  //       multimedia: selectImage || contentUser
  //     };
  
  //     mutate(postData);
  
  //     navigate("/home");
  //   }
  // };
 
  const handleAddPost = () => {
    const postData = {
      usuario: 1,
      contenido: textArea.trim() !== "" ? textArea : undefined,
      multimedia: imageFile,
      gif: selectImage
    };
  
    const dataToSend = {
      usuario: postData.usuario,
      ...(postData.contenido && { contenido: postData.contenido }),
      ...(postData.multimedia && { multimedia: postData.multimedia }),
      ...(postData.gif && {gif: postData.gif})
    };
  
    mutate(dataToSend);
    console.log(dataToSend)
  
    navigate("/home");
  };

  return (
    <header>
      <form
        className="flex flex-row justify-between items-center px-4 "
        // onSubmit={handleSubmit}
      >
        <Button variant="secondary" onClick={handleClickBack}>
          {HeaderBack}
        </Button>
        <Button
          variant="primary"
          className={`${
            textArea === "" && contentUser === "" && selectImage === ""
              ? "bg-blue-500 text-white w-16 h-8 rounded-full opacity-50"
              : "bg-blue-500 text-white w-16 h-8 rounded-full cursor-pointer"
          }`}
          onClick={handleAddPost}
          disabled={textArea === "" && contentUser === "" && selectImage === ""}
        >
          Post
        </Button>
      </form>
    </header>
  );
}
