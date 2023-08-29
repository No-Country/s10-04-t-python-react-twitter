import React from "react";
import NotificationSystem from "./notification-system";

const AllNotifications: React.FC = () => {
  return (
    <>
      <NotificationSystem text="Se ha iniciado sesión en tu cuenta @Nombre Completo desde un dispositivo nuevo el 25 ago. 2023. Compruébalo ahora." />
      <NotificationSystem text="Hubo un intento de inicio de sesión en tu cuenta @Nombre Completo el 25 ago. 2023 que parece sospechoso. Revísalo ahora." />
    </>
  );
};

export default AllNotifications;
