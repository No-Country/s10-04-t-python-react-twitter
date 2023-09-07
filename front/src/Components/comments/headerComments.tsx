import { useNavigate } from "react-router-dom";
import Button from "../Home/buttons/buttons";
import { HeaderBack } from "../Home/createPost/Icons/headerBack";
import usePostStore from "../../Hooks/Home/postStore/usePostStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment } from "../../services/PostComments";
import { useAppSelector } from "../../Hooks/useAppSelector";

export default function HeaderComment() {
  const queryClient = useQueryClient()
  const navigate = useNavigate();
  const id = useAppSelector(state=>state.config.auth.id)
  const {
    setSelectImage,
    setTextArea,
    setContentUser,
    contentUser,
    textArea,
    imageFile,
    selectImage,
    tweet_id,
  } = usePostStore();
  const handleClickBack = () => {
    setSelectImage("");
    setTextArea("");
    setContentUser("");
    navigate("/home");
  };
  const { mutate } = useMutation({
    mutationFn: postComment,
    onMutate: async (newTodo) => {
      setTextArea("");
      setContentUser("");
      setSelectImage("");
      await queryClient.cancelQueries(["tweetComments"]);
      const previousNewComment = queryClient.getQueryData(["tweetComments"]);
      await queryClient.setQueryData(["tweetComments"], (old: unknown) => {
        if (old === null) {
          return [newTodo];
        }
        if (Array.isArray(old)) {
          return [...old, newTodo];
        }
        return old;
      });

      return { previousNewComment };
    },
    onError: (err, variables, context) => {
      if (context?.previousNewComment) {
        queryClient.setQueryData(['tweetComments'], context.previousNewComment)
      }
    },
    onSettled:()=> {
      queryClient.invalidateQueries({queryKey:["tweetComments"]})
    }
  });
  const handleAddComment = () => {
    mutate({
      usuario: 2,
      tweet_original: tweet_id,
      content: textArea,
      multimedia: imageFile,
      gif: selectImage,
    });
    navigate("/comments")
    console.log(tweet_id, textArea, imageFile, selectImage,id);
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
