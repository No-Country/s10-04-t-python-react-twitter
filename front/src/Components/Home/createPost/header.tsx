import Button from "../buttons/buttons";
import { useNavigate } from "react-router-dom";
import { HeaderBack } from "./Icons/headerBack";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import usePostStore from "../../../Hooks/Home/postStore/usePostStore";
import { postTweets } from "../../../services/postTweets/postTweets";

export default function Header() {
  const {
    textArea,
    contentUser,
    selectImage,
    imageFile,
    setTextArea,
    setContentUser,
    setSelectImage,
  } = usePostStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClickBack = () => {
    setTextArea("");
    setContentUser("");
    setSelectImage("");
    navigate("/home");
  };

  const { mutate } = useMutation({
    mutationFn: postTweets,
    onMutate: async (newTodo) => {
      setTextArea("");
      setContentUser("");
      setSelectImage("");
      await queryClient.cancelQueries(["newtweets"]);
      const previousTodos = queryClient.getQueryData(["newtweets"]);
      await queryClient.setQueryData(["newtweets"], (old: unknown) => {
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
        queryKey: ["newtweets"],
      });
    },
  });

  const handleAddPost = () => {
    const postData = {
      usuario: 2,
      contenido: textArea.trim() !== "" ? textArea : undefined,
      multimedia: imageFile,
      gif: selectImage,
    };

    const dataToSend = {
      usuario: postData.usuario,
      ...(postData.contenido && { contenido: postData.contenido }),
      ...(postData.multimedia && { multimedia: postData.multimedia }),
      ...(postData.gif && { gif: postData.gif }),
    };

    mutate(dataToSend);
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
          type="button"
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
