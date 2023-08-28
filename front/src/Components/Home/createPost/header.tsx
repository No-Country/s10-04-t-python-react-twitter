import Button from "../buttons/buttons";
import { useNavigate} from "react-router-dom";
import { HeaderBack } from "./Icons/headerBack";
import { FormEvent } from "react";

export default function Header() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/home");
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <header>
      <form className="flex flex-row justify-between items-center px-4 "
      onSubmit={handleSubmit}>
        <Button variant="secondary" onClick={handleClickBack}>
          {HeaderBack}
        </Button>
        <Button type="submit">Post</Button>
      </form>
    </header>
  );
}
