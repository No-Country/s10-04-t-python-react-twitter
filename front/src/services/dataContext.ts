// import { createContext } from "react";

// export const dataContext = createContext();

import axios from "axios";
import { setAccess } from "../redux/actions/config";

// export function getPostById = async() {
//     const response = await axios.get(
//       `http://15.229.1.136/users/api/detail/${userId}/`
//     );
//     const responseMap = response.data;
//     console.log(responseMap)
//     setAccess(responseMap)
//     return responseMap;
//   }

interface IgetPostById {
    id: string | null
}
//DEbo usar useDispatch
// const mutation = useMutation(async (formData) => {  
//     console.log("formData", formData);
//     const response = await axios.post(
//       "http://15.229.1.136/users/api/login/",
//       formData,
//       {}
//     );
//     console.log(response.data);
  
//     // setUserId(response.data.id); // Asignar el valor al contexto
  
//     return response.data;
//   });

  export const getPostById = async({
    id,
  }: IgetPostById) => {
    try {
       
        const response = await axios.get(
            `http://15.229.1.136/users/api/detail/${id}/`
          );
          const data = response.data;
          console.log(data)
          setAccess(data)
          return data;
    } catch (error) {
      alert('No se pudo cargar la vista home')
    }
  }
