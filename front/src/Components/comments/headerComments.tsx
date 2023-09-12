import { useNavigate } from "react-router-dom";
import Button from "../Home/buttons/buttons";
import { HeaderBack } from "../Home/createPost/Icons/headerBack";
import usePostStore from "../../Hooks/Home/postStore/usePostStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment } from "../../services/PostComments";
import { useEffect } from "react";
import { getPostById } from "../../services/dataApi";
// import UserInformation from "../../Hooks/userInformation";

export default function HeaderComment() {
  const queryClient = useQueryClient()
  const navigate = useNavigate();
  const id = localStorage.getItem("userId");
  
  useEffect(() => {
    getPostById({id});
  }, [id]);
  
  const {
    setSelectImage,
    setTextArea,
    setContentUser,
    contentUser,
    textArea,
    imageFile,
    selectImage,
    tweet_id,
    setImageFile
  } = usePostStore();
  const handleClickBack = () => {
    setSelectImage("");
    setTextArea("");
    setContentUser("");
    navigate("/home");
  };
  const { mutate } = useMutation({
  mutationFn: postComment,
  // onMutate: async (newTodo) => {
  //   // Cancel any outgoing refetches
  //   // (so they don't overwrite our optimistic update)
  //   await queryClient.cancelQueries({ queryKey: ['tweetComments'] })

  //   // Snapshot the previous value
  //   const previousTodos = queryClient.getQueryData(['tweetComments'])

  //   // Optimistically update to the new value
  //   queryClient.setQueryData(['tweetComments', newTodo], (old) => old ?{
  //     ...old, newTodo} : old )
  //     return { previousTodos }
  //   },

    // Return a context object with the snapshotted value

    // onError: (err, variables, context) => {
    //   if (context?.previouPost) {
    //     queryClient.setQueryData(['newtweets'], context.previousPost)
    //   }
    // },
     onSettled:()=> {
      queryClient.invalidateQueries({queryKey:["tweetComments"]})
     }
  });
  const handleAddComment = () => {
    mutate({
      usuario: id,
      tweet_original: tweet_id,
      content: textArea,
      multimedia: imageFile,
      gif: selectImage,
    });
    console.log(tweet_id);
   
    setTextArea("");
    setContentUser("");
    setSelectImage("");
    setImageFile(null)
    // setContenido("")
    // setAvatar("")
    // setFirs_name("")
    
    navigate("/comments")
  };

  return (
    <header>
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
  );
}
