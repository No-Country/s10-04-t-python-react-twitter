import React, { useState } from "react";
import Modal from "./Modal";

const SignUp: React.FC = () => {
  const initialState = {
    nameReg: "",
    emailReg: "",
    dateNacReg: "",
    passwordReg: "",
    repasswordReg: "",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataReg, setDataReg] = useState(initialState);
  const isFormValid =
    dataReg.nameReg !== "" &&
    dataReg.emailReg !== "" &&
    dataReg.dateNacReg !== "" &&
    dataReg.passwordReg !== "" &&
    dataReg.passwordReg == dataReg.repasswordReg;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDataReg((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", dataReg);
  };

  return (
    <>
      <div className="">
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 w-72"
          type="button"
          onClick={openModal}
        >
          Crear Cuenta
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="px-6 py-6 lg:px-8 w-[390px]">
            <h3 className="mb-4 text-xl font-medium text-left text-gray-900 dark:text-white">
              Crea tu cuenta
            </h3>
            <form className="space-y-4" action="#" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="nameReg"
                  id="nameReg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Nombre"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="emailReg"
                  id="emailReg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  name="dateNacReg"
                  id="dateNacReg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="passwordReg"
                  id="passwordReg"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="repasswordReg"
                  id="repasswordReg"
                  placeholder="Re-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full text-white disabled:bg-[#87898C] enabled:bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Crear cuenta
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SignUp;
