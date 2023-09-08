import NavBar from "../layout/NavBar";
import { InfoProfile } from "../Components/Profile/InfoProfile";
import { PostProfile } from "../Components/Profile/PostProfile";

const Profile = () => {
  return (
    <>
      <NavBar />
      <InfoProfile />
      <PostProfile />
    </>
  );
};

export default Profile;
