/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { getPostById } from "../services/dataApi";
import { useAppSelector } from "../Hooks/useAppSelector";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { FormDataProfile } from "../types/profileTypes";

export default function SetUp() {

  const id = localStorage.getItem("userId");
  const dataPost = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { config: { access: any } }) => state.config.access || []
  );

  const frontPageRef = useRef<HTMLInputElement | null>(null);
  const avatarRef = useRef<HTMLInputElement | null>(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [frontPageFile, setFrontPageAvatarFile] = useState(null);
  // const navigate = useNavigate()

  const mutation = useMutation(async (formData: FormDataProfile) => {
    console.log("formData", formData);
    const response = await axios.put(
      `http://15.229.1.136/users/api/update/${id}/`,
      formData
    );
    console.log(response);

    return response.data;
  });

  const handleFileUploadAvatar = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarFile(file);
    }
  };

  const handleFileUpload = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      setFrontPageAvatarFile(file);
    }
  };

  console.log(avatarFile);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    if (avatarFile) {
      formData.set("avatar", avatarFile);
    }
    if (frontPageFile) {
      formData.set("front_page", frontPageFile);
    }
    
    mutation.mutate(formData as unknown as FormDataProfile);
  };

  useEffect(() => {
    getPostById({ id });
  }, [id]);

  const handleClick = () => {
    if (avatarRef.current) {
      avatarRef.current.click();
    }
  };

  const handleClick2 = () => {
    if (frontPageRef.current) {
      frontPageRef.current.click();
    }
  };
  // const prueba = () => {
  //   navigate("/profile")
  // }

  return (
    <>
      <Link to="/Profile" className="m-4 my-7">
        BACK
      </Link>
      <h2 className="font-bold flex justify-center text-2xl">
        Actualiza tus Datos
      </h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col items-center">
          <section className="w-[70%] flex flex-col items-center md:flex-row md:justify-around md:mt-3">
            <label className="m-1 font-semibold md:text-2xl">Email:</label>
            <input
              type="email"
              defaultValue={dataPost?.email}
              name="email"
              className="rounded-xl m-1"
            />
          </section>
          <section className="w-[70%] flex flex-col items-center md:flex-row md:justify-around md:mt-3">
            <label className="m-1 font-semibold md:text-2xl">Nombres:</label>
            <input
              type="text"
              defaultValue={dataPost?.firs_name}
              name="firs_name"
              className="rounded-xl m-1"
            />
          </section>
          <section className="w-[70%] flex flex-col items-center md:flex-row md:justify-around md:mt-3">
            <label className="m-1 font-semibold md:text-2xl">Appellidos:</label>
            <input
              type="text"
              defaultValue={dataPost?.last_name}
              name="last_name"
              className="rounded-xl m-1"
            />
          </section>
          <label className="m-1 font-semibold md:text-2xl">
            Imagen de Fondo:
          </label>
          <section className="max-w-[598px] flex flex-col items-center">
            {/* <div className="border border-slate-500 w-[] h-[157px] flex justify-center items-center"> */}
            <img
              className="h-[157px] w-[598px] flex justify-center items-center mx-1"
              src={dataPost?.front_page}
            ></img>
            {/* </div> */}
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-3"
              onClick={handleClick2}
            >
              Añade tu portada
              <input
                type="file"
                onChange={handleFileUpload}
                accept=""
                className=""
                hidden
                ref={frontPageRef}
              />
            </button>
          </section>

          <label className="m-1 font-semibold md:text-2xl">Avatar:</label>
          <section className="flex flex-row items-center">
            <img
              src={dataPost?.avatar}
              className=" w-[200px] h-[200px] rounded-[50%] flex justify-center items-center"
            ></img>
            {/* <section> */}
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-3"
              onClick={handleClick}
            >
              Añade tu foto
              <input
                type="file"
                onChange={handleFileUploadAvatar}
                ref={avatarRef}
                hidden
              />
            </button>
            {/* </section> */}
          </section>
          <section className="w-[70%] flex flex-col items-center md:flex-row md:justify-around md:mt-3">
            <label className="m-1 font-semibold md:text-2xl">Nacimiento:</label>
            <input
              type="date"
              defaultValue={dataPost?.birthdate}
              name="birthdate"
              className="rounded-xl m-1 "
            />
          </section>
          <section className="w-[70%] flex flex-col items-center md:flex-row md:justify-around md:mt-3">
            <label className="m-1 font-semibold md:text-2xl">Biografía:</label>
            <input
              type="text"
              defaultValue={dataPost?.bio}
              name="bio"
              className="rounded-xl m-1"
            />
          </section>
          <section className="w-[70%] flex flex-col items-center md:flex-row md:justify-around md:mt-3">
            <label className="m-1 font-semibold md:text-2xl">Locación:</label>
            <input
              type="text"
              defaultValue={dataPost?.location}
              name="location"
              className="rounded-xl m-1"
            />
          </section>
          <div>
            <button
              // onClick={prueba}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-4"
            >
              Aceptar cambios
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
