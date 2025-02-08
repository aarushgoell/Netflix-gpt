import { signOut, onAuthStateChanged } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIXLOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const { displayName, email, uid, photoURL } = user;

        dispatch(
          addUser({
            displayName: displayName,
            email: email,
            uid: uid,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      className="absolute w-full px-6 py-2 bg-gradient-to-b from-black z-13 flex justify-between
    "
    >
      <img src={NETFLIXLOGO} alt="logo" className="w-46"></img>

      {user && (
        <div className="flex">
          <img src={user?.photoURL} className=" mt-4 h-10" />;
          <button
            onClick={signmeOut}
            className="mx-2 p-2 font-bold  text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
