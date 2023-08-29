import Button from "../buttons/buttons";
import { useNavigate} from "react-router-dom";
import { HeaderBack } from "./Icons/headerBack";
import { FormEvent } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import usePostStore, { useTweetPost } from "../../../store/Home/postStore";


export default function Header() {
  const textArea = useTweetPost((state) => state.textArea)
  const contentUser = useTweetPost((state) => state.contentUser)
  const selectImage = usePostStore((state) => state.selectImage)
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/home");
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const addPost = useMutation((newPost) => {
    const accessToken = "d38a98d8cbfaaded62439765c2a70e0c6a10c52f"; 
    
    return axios.post("http://18.228.38.17/tweets/api/tweets/", newPost, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    });
  });
  return (
    <header>
      <form className="flex flex-row justify-between items-center px-4 "
      onSubmit={handleSubmit}>
        <Button variant="secondary" onClick={handleClickBack}>
          {HeaderBack}
        </Button>
        {addPost.isSuccess ? <div>Todo added!</div> : null}
        {addPost.isError ? (
            <div>An error occurred: {addPost.error.message}</div>
          ) : null}
        <Button onClick={() => {
          addPost.mutate({
            usuario: 2,
            contenido: textArea,
            multimedia: contentUser || selectImage})
          }}
         >Post</Button>
      </form>
    </header>
  );
}
