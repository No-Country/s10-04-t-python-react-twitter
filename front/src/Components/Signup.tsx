import React, { useState } from "react";
import Modal from "./Modal";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const SignUp: React.FC = () => {
  const initialState = {
    firs_name: "",
    email: "",
    // birthdate: "",
    password1: "",
    password2: "",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataReg, setDataReg] = useState(initialState);
  const isFormValid =
    dataReg.firs_name !== "" &&
    dataReg.email !== "" &&
    // dataReg.birthdate !== "" &&
    dataReg.password1 !== "" &&
    dataReg.password1 == dataReg.password2;

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

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", dataReg);
  // };


  // const mutation = useMutation(async (formData) => {
  //   console.log(formData)
  //   const response = await axios.post(
  //     "http://15.229.1.136/users/api/register/",
  //     formData,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json' // Configura el Content-Type a application/json
  //       }
  //     }
  //   );
  //   return console.log(response.data);
  // });


  const mutation = useMutation(async (formData) => {
    console.log(formData)
    const response = await axios.post(
      "http://15.229.1.136/users/api/register/", formData,
      
    );
    return console.log(response.data);
  });

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // const formData = 
    // {"email":"rocioprueba@gmail.com","firs_name":"Chio","password1":"prueba1234","password2":"prueba1234"}
    
    const formJson = Object.fromEntries(formData.entries());

  // Utiliza Axios para hacer la solicitud POST
  mutation.mutate(formJson);
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
            <form className="space-y-4" action="#" onSubmit={handleSubmit2}>
              
              <div>
                <input
                  type="email"
                  name="email"
                  id="email2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="firs_name"
                  id="firs_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Nombre"
                  onChange={handleChange}
                  required
                  
                />
              </div>
              {/* <div>
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={handleChange}
                />
              </div> */}
              <div>
                <input
                  type="password"
                  name="password1"
                  id="password1"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="Re-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                // disabled={!isFormValid}
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