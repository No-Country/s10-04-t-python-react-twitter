import React, { useState } from "react";
import Modal from "./Modal";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Hooks/useAppDispatch";
import * as configSlices from "../redux/slices/config";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  // const authId = useAppSelector((state) => state.config.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  // console.log(userId)

  const mutation = useMutation(async (formData: { [key: string]: string }) => {
    console.log("formData", formData);
    const response = await axios.post(
      "http://15.229.1.136/users/api/login/",
      formData,
      {}
    );
    // dispatch(setAuth(response.data));
    const data = response.data.id;
    await dispatch(configSlices.setAuthId(data));
    localStorage.setItem("userId", data);
    navigate("/profile");
    return response.data;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formJson = Object.fromEntries(formData.entries());
    mutation.mutate(formJson);
    // navigate("/Profile")
  };

 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}
      {mutation.isSuccess ? <div>Todo added!</div> : null}
      <div className="">
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm text-center bg-transparent hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-full w-72"
          type="button"
          onClick={openModal}
        >
          Iniciar sesión
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Inicia sesión en X
            </h3>
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Iniciar sesión
              </button>
              <button
                type="submit"
                className="w-full text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 border border-gray-500 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ¿Olvidaste tu contraseña?
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                ¿No tienes una cuenta?{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Regístrate
                </a>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default App;
