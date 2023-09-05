
import { useNavigate } from "react-router-dom";
import Button from "../Home/buttons/buttons";
import { HeaderBack } from "../Home/createPost/Icons/headerBack";


export default function BackButton({title}: {title:string}) {
    const navigate = useNavigate()
  return (
    <section className="flex flex-row">
    <div className="grid grid-cols-3  h-[53px]">
        <div className="w-14 h-[53px]" >
      <Button variant="secondary" onClick={()=>navigate("/home")}> {HeaderBack}</Button>
      </div>
      <div className="col-span-2 w-[231px]">
      <p>{title}</p>
      </div>
    </div>
    </section>
  );
}
