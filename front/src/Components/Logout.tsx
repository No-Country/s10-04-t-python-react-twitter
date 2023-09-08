import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const logoutApp = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
   
      <button onClick={logoutApp} className="text-xl">Cerrar sesión</button>
   
  );
}

export default Logout;
