import { useRef, useState } from "react";
import Header from "./Header";

import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";

import { addUser } from "../utils/userSlice";
import { backGROUND, photoURL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignin, setisSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data

    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) {
      return;
    }

    // Sign In/ Sign up logic here
    // create a new user

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              // Profile updated!

              const {
                displayName: displayName,
                email: email,
                uid: uid,
                photoURL: photoURL,
              } = auth.currentUser;
              dispatch(
                addUser({
                  displayName: displayName,
                  email: email,
                  uid: uid,
                  photoURL: photoURL,
                })
              );

              // ...
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src={backGROUND} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 m-45 p-12 mx-auto left-0 right-0 text-white bg-black backdrop-opacity-5"
      >
        <h1 className="font-bold text-left text-3xl my-3 ml-2 text-white">
          {isSignin ? "Sign in" : "Sign Up"}
        </h1>
        {isSignin == false && (
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className="px-4 py-2 m-2  bg-gray-900 text-gray-400 w-full rounded-sm"
          ></input>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="px-4 py-2 m-2  bg-gray-900 text-gray-400 w-full rounded-sm"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="px-4 py-2 m-2 bg-gray-900 text-gray-400 w-full rounded-sm"
        ></input>
        <p className="text-red-500 text-md p-3">{errorMessage}</p>
        <button
          className="px-4 py-2 m-2 bg-red-700 w-full rounded-sm cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignin ? "Sign in" : "Sign Up"}
        </button>
        <p
          className="py-3 cursor-pointer"
          onClick={() => {
            setisSignIn(!isSignin);
          }}
        >
          {isSignin ? "Not a User? Sign Up now" : "Already a User ? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;

// in login page we have a header and then we have a sign in page
