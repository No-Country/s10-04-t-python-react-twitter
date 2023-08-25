import React from "react";

const VerifiedNotifications: React.FC = () => {
  return (
    <section className="w-full p-4">
      <div className=" w-[60%] m-auto">
        <img
          src="https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png"
          alt=""
          className=""
        />
        <div>
          <h2 className="text-[31px] font-extrabold leading-9">
            No hay nada que ver aquí. Por ahora.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default VerifiedNotifications;
