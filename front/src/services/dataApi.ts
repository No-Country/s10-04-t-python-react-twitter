import axios from "axios";
import { setAccess } from "../redux/actions/config";

interface IgetPostById {
  id: string | null;
}

export const getPostById = async ({ id }: IgetPostById) => {
  try {
    const response = await axios.get(
      `http://ec2-15-229-1-136.sa-east-1.compute.amazonaws.com/users/api/detail/${id}/`
    );
    const data = response.data;
    setAccess(data);
    return data;
  } catch (error) {
    alert("No se pudo cargar la vista home");
  }
};
