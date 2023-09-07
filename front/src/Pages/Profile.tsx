// import { useContext } from "react";
// import { dataContext } from "../services/dataContext";
import NavBar from "../layout/NavBar";
// import { useNavigate } from "react-router-dom";
import { InfoProfile } from "../Components/Profile/InfoProfile";
import { PostProfile } from "../Components/Profile/PostProfile";


  
const Profile = () => {
  // const {userId} = useContext(dataContext);


  // console.log(userId)
  // const navigate = useNavigate()

//   const userId = 1;

// function getPostById() {
//   axios.get(`http://15.229.1.136/users/api/detail/${userId}/`)
//   .then(response => {
//     response.data;
// })
// .catch(e => {
//     // Podemos mostrar los errores en la consola
//     console.log(e);
// })
// }

//   getPostById()

  return (
   <>
   <NavBar />
   <InfoProfile />
   <PostProfile/>
   </>
  );
}

export default Profile
