import { useNavigate } from "react-router-dom";
import Button from "../Home/buttons/buttons";
import { HeaderBack } from "../Home/createPost/Icons/headerBack";
import usePostStore from "../../Hooks/Home/postStore/usePostStore";
import { useMutation } from "@tanstack/react-query";
import { postComment } from "../../services/PostComments";


export default function HeaderComment(){
    const navigate = useNavigate()
    const{setSelectImage,setTextArea, setContentUser,contentUser,textArea,imageFile,selectImage,tweet_id}=usePostStore()
    const handleClickBack = () => {
      setSelectImage("")
      setTextArea("")
      setContentUser("")
      navigate("/comments")
    }
    const { mutate } = useMutation({
    mutationFn: postComment
    });
    const handleAddComment = () => {
      mutate({
        usuario: 2,
        tweet_original: tweet_id,
        content: textArea,
        multimedia:imageFile,
        gif:selectImage
  
      });
      console.log(tweet_id,textArea,imageFile,selectImage);
    };
  
    return(
        <header>
           <div>
      {mutate.isLoading ? (
        'Adding todo...'
      ) : (
        <>
          {mutate.isError ? (
            <div>An error occurred: {mutate.error.message}</div>
          ) : null}

          {mutate.isSuccess ? <div>Todo added!</div> : null}
        </>
      )}
    </div>

          

        <form
          className="flex flex-row justify-between items-center px-4 "
        //   onSubmit={handleSubmit}
        >
          <Button variant="secondary" onClick={handleClickBack}>
            {HeaderBack}
          </Button>
          <Button
          type="button"
            
            className={`${
              textArea === "" && contentUser === "" && selectImage === ""
                ? "bg-blue-500 text-white w-16 h-8 rounded-full opacity-50"
               : "bg-blue-500 text-white w-16 h-8 rounded-full cursor-pointer"
            }`}
            onClick={handleAddComment}
            disabled={textArea === "" && contentUser === "" && selectImage === ""}
          >
            Reply
          </Button>
        </form>
      </header>
    )
}