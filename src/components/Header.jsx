import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const signmeOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/errorpage");
      });
  };

  return (
    <div
      className="absolute w-full px-6 py-2 bg-gradient-to-b from-black z-13 flex justify-between
    "
    >
      <img
        src="
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-46"
      ></img>

      {user && (
        <div className="flex">
          <img src={user?.photoURL} className=" mt-4 h-10" />;
          <button
            onClick={signmeOut}
            className="mx-2 p-2 font-bold  text-red-800"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
