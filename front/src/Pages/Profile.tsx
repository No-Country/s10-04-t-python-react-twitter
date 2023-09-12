import NavBar from "../layout/NavBar";
import { InfoProfile } from "../Components/Profile/InfoProfile";
import { PostProfile } from "../Components/Profile/PostProfile";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="mt-16 mr-3 lg:ml-[300px] ">
        <InfoProfile />
        <PostProfile />
      </div>
    </>
  );
};

export default Profile;
