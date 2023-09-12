import { useNavigate } from "react-router-dom";
import Button from "../Home/buttons/buttons";
import { HeaderBack } from "../Home/createPost/Icons/headerBack";
import usePostStore from "../../Hooks/Home/postStore/usePostStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment } from "../../services/PostComments";
import { useEffect } from "react";
import { getPostById } from "../../services/dataApi";

export default function HeaderComment() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const id = localStorage.getItem("userId");

  useEffect(() => {
    getPostById({ id });
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
    setImageFile,
  } = usePostStore();
  const handleClickBack = () => {
    setSelectImage("");
    setTextArea("");
    setContentUser("");
    navigate("/home");
  };
  const { mutate } = useMutation({
    mutationFn: postComment,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tweetComments"] });
    },
  });
  const handleAddComment = () => {
    mutate({
      usuario: id,
      tweet_original: tweet_id,
      content: textArea,
      multimedia: imageFile,
      gif: selectImage,
    });

    setTextArea("");
    setContentUser("");
    setSelectImage("");
    setImageFile(null);
    navigate("/comments");
  };

  return (
    <header>
      <form className="flex flex-row justify-between items-center px-4 ">
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
