import Modal from "../../Components/Modal";
import { useState } from "react";

export const UpdateProfile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentUser, setContentUser] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;

    if (fileInput instanceof HTMLInputElement && fileInput.files) {
      const file = fileInput.files[0];
      if (file) {
        setContentUser(URL.createObjectURL(file));
      }
    }
  };

  console.log(contentUser);

  return (
    <>
      <div>
        <button
          className="border-2 border-slate-500 rounded-xl p-2"
          onClick={openModal}
        >
          Set up profile{" "}
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="flex flex-col items-center">
            <div className="border border-slate-500 w-[200px] h-[200px] rounded-[50%] flex justify-center items-center">PREVISUALIZACIÓN</div>
            <input type="file" onChange={handleOnChange}></input>
            <div >
              <button className="border border-slate-400 px-5 py-1 rounded-full">Subir Foto</button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
