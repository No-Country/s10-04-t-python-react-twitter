import { Link } from "react-router-dom";

export const UpdateProfile: React.FC = () => {
  return (
    <>
      <div>
        <Link to="/setUp" className="border-2 border-slate-500 rounded-xl p-2">
          Set up profile{" "}
        </Link>
      </div>
    </>
  );
};
