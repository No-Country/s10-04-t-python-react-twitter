import { useNavigate } from "react-router-dom";
import Button from "../Home/buttons/buttons";
import { HeaderBack } from "../Home/createPost/Icons/headerBack";


export default function HeaderComment(){
    const navigate = useNavigate()
    return(
        <header>
        <form
          className="flex flex-row justify-between items-center px-4 "
        //   onSubmit={handleSubmit}
        >
          <Button variant="secondary" onClick={()=> navigate("/comments")}>
            {HeaderBack}
          </Button>
          <Button
            variant="primary"
            // className={`${
            //   textArea === "" && contentUser === "" && selectImage === ""
            //     ? "bg-blue-500 text-white w-16 h-8 rounded-full opacity-50"
            //     : "bg-blue-500 text-white w-16 h-8 rounded-full cursor-pointer"
            // }`}
            // onClick={handleAddPost}
            // disabled={textArea === "" && contentUser === "" && selectImage === ""}
          >
            Reply
          </Button>
        </form>
      </header>
    )
}