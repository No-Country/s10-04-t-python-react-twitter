import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Home,
  Profile,
  // Notifications,
  // Explore,
} from "../Components/Home/tweets/TweetIcons/Icons";
import logo from "../assets/twitter-logo.svg";
import Logout from "../Components/Logout";
import { getPostById } from "../services/dataApi";
import { useAppSelector } from "../Hooks/useAppSelector";
import defaultUser from "../assets/userDefault.png";

export default function NavBar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const id = localStorage.getItem("userId");
  const dataPost = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { config: { access: any } }) => state.config.access || []
  );

  useEffect(() => {
    getPostById({ id });
  }, [id]);

  return (
    <>
      <div className="bg-white py-3 fixed top-0 left-0 right-0">
        <button className="ml-4 " onClick={() => setOpen(true)}>
          <img src={logo} className="w-10 h-9" alt="logo X" />
        </button>

        <div
          className={`${
            !open && "hidden"
          } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 lg:hidden`}
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={`${
            open ? "w-[280px]" : "w-0"
          } bg-white min-h-screen absolute top-0 right-0 left-0 transition-all duration-200 lg:w-[280px] z-10`}
        >
          <div className={`${!open && "hidden"} lg:block`}>
            <div>
              <div className="p-5 lg:ml-5">
                {dataPost?.avatar ? (
                  <img
                    src={dataPost?.avatar}
                    alt=""
                    className="w-[55px] h-[55px] rounded-full"
                  />
                ) : (
                  <img
                    src={defaultUser}
                    alt=""
                    className="w-[55px] h-[55px] rounded-full"
                  />
                )}
                <section className="flex flex-col">
                  <span className="hover:underline pt-1 text-[#707376] font-bold text-lg">
                    {dataPost?.firs_name}
                  </span>
                  <span className="pt-1 text-gray-500 font-medium text-base">
                    @{dataPost?.firs_name}
                  </span>
                </section>
                {dataPost && (
                  <section className="text-gray-500 flex flex-row">
                    <span className="my-2 mr-2">
                      {dataPost.followers_count} Following
                    </span>
                    <span className="m-2">
                      {dataPost.following_count} Followers
                    </span>
                  </section>
                )}
              </div>
            </div>
            <div className="flex flex-col h-full justify-center font-semibold text-[#0F1419] lg:ml-5">
              <Link
                to="/Home"
                className="flex flex-row hover:bg-[#E7E7E8] rounded-full cursor-pointer px-5 py-3"
              >
                {Home}
                <h1 className="text-xl">Home</h1>
              </Link>
              <Link
                to="/Profile"
                className="flex flex-row hover:bg-[#E7E7E8] rounded-full cursor-pointer px-5 py-3"
              >
                {Profile}
                <h1 className="text-xl">Profile</h1>
              </Link>
              {/* <Link
                to="/Notifications"
                className="flex flex-row hover:bg-[#E7E7E8] rounded-full cursor-pointer px-5 py-3"
              >
                {Notifications}
                <h1 className="text-xl">Notifications</h1>
              </Link>
              <Link
                to="/Explore"
                className="flex flex-row hover:bg-[#E7E7E8] rounded-full cursor-pointer px-5 py-3"
              >
                {Explore}
                <h1 className="text-xl">Explore</h1>
              </Link> */}
              <div className="px-5 mt-7">
                <div className="flex flex-row hover:bg-[#E7E7E8] rounded-full cursor-pointer px-5 py-3 justify-center">
                  <Logout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
