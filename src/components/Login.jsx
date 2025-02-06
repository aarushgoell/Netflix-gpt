import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setisSignIn] = useState(true);

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src="	https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg" />
      </div>
      <form className="absolute w-3/12 m-45 p-12 mx-auto left-0 right-0 text-white bg-black backdrop-opacity-5">
        <h1 className="font-bold text-left text-3xl my-3 ml-2 text-white">
          {isSignin ? "Sign in" : "Sign Up"}
        </h1>
        {isSignin == false && (
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 m-2  bg-gray-900 text-gray-400 w-full rounded-sm"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email address"
          className="px-4 py-2 m-2  bg-gray-900 text-gray-400 w-full rounded-sm"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 m-2 bg-gray-900 text-gray-400 w-full rounded-sm"
        ></input>
        <button className="px-4 py-2 m-2 bg-red-700 w-full rounded-sm cursor-pointer">
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
