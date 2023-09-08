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
    console.log(data);
    setAccess(data);
    return data;
  } catch (error) {
    alert("No se pudo cargar la vista home");
  }
};


// const mutation = useMutation(async (formData: FormDataSignin) => {
//   console.log("formData", formData);
//   const response = await axios.post<UserResponseSignin>(
//     "http://15.229.1.136/users/api/login/",
//     formData,
//     {}
//   );
//   const data = response.data.id;
//   await dispatch(configSlices.setAuthId(data));
//   localStorage.setItem("userId", data);
//   navigate("/profile");
//   return response.data;
// });
