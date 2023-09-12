import axios from "axios";
import { setAccess } from "../redux/actions/config";
// import { useMutation } from "@tanstack/react-query";

interface IgetPostById {
  id: string | null;
}

export const getPostById = async ({ id }: IgetPostById) => {
  try {
    const response = await axios.get(
      `http://15.229.1.136/users/api/detail/${id}/`
    );
    const data = response.data;
    setAccess(data);
    return data;
  } catch (error) {
    alert("No se pudo cargar la vista home");
  }
};

