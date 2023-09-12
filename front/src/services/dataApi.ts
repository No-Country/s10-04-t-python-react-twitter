import axios from "axios";
import { setAccess } from "../redux/actions/config";

interface IgetPostById {
  id: string | null;
}

export const getPostById = async ({ id }: IgetPostById) => {
  try {
    const response = await axios.get(
      `https://twitter-api-6tse.onrender.com/users/api/detail/${id}/`
    );
    const data = response.data;
    setAccess(data);
    return data;
  } catch (error) {
    alert("No se pudo cargar la vista home");
  }
};
