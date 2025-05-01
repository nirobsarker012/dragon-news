import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn w-full flex items-center gap-2 hover:text-blue-500">
          <FcGoogle size={24} />
          Login with Google
        </button>
        <button className="btn w-full flex items-center gap-2 hover:text-blue-500">
          {" "}
          <FaGithub size={24} />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
