import Button from "../buttons/buttons";
import { useNavigate } from "react-router-dom";
import { HeaderBack } from "./Icons/headerBack";
import { FormEvent } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import usePostStore from "../../../Hooks/Home/postStore/usePostStore";

export default function Header() {
  const { textArea, contentUser, selectImage } = usePostStore();
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/home");
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const addPost = useMutation<void, Error>(async (newPost) => {
    const response = await axios.post(
      "http://15.229.1.136/tweets/api/tweets/",
      newPost,
      {}
    );
    return response.data;
  });

  const handleAddPost = () => {
    const postData = {
      usuario: 1,
    };

    if (textArea.trim() !== "") {
      postData.contenido = textArea;
    }

    if (contentUser || selectImage) {
      postData.multimedia = contentUser || selectImage;
    }

    addPost.mutate(postData);
    navigate("/home");
  };

  return (
    <header>
      <form
        className="flex flex-row justify-between items-center px-4 "
        onSubmit={handleSubmit}
      >
        <Button variant="secondary" onClick={handleClickBack}>
          {HeaderBack}
        </Button>
        {addPost.isSuccess ? <div>Todo added!</div> : null}
        {addPost.isError ? (
          <div>An error occurred: {addPost.error.message}</div>
        ) : null}
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
