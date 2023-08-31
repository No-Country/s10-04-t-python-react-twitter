// import { REACT_APP_API } from "./env";
// import axios from "axios";

// interface postLogin {
//     setEmail: string;
//     setPassword: string;
// }

// export const postLogin = async ({ setEmail, setPassword }: postLogin) => {
//   try {
//     const response = await axios.post(`${REACT_APP_API}/login`), {
//         email: setEmail,
//         password: setPassword,
//       };

//     console.log("login exitoso");
//     return response.data;
//   } catch (error) {
//     alert('no funcionó')
//   }
// };

// import { REACT_APP_API } from "./env";
import axios from "axios";

interface postLogin {
    email: string;
    password: string;
}

// 

export const postLogin = async ({ email, password }: postLogin) => {
    const accessToken = "d38a98d8cbfaaded62439765c2a70e0c6a10c52f"; 
    try {
      const response = await axios.post('http://18.228.38.17/users/api/login/', {
        email: email,
        password: password,
      }, {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      });
  
      console.log("Login exitoso");
      return response.data;
    } catch (error) {
      console.error("Error en el login", error);
      throw error;
    }
  };
  
  
  
  
  
  
  