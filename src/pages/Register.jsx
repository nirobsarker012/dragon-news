import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="bg-white py-[76px] px-[73px] rounded-[5px] max-w-[752px] mx-auto shadow-lg">
      <div className="py-5 border-b border-[#E7E7E7]">
        <h2 className="text-center text-[35px] text-[#403F3F] font-semibold ">
          Register your account
        </h2>
      </div>
      <div>
        <form className="flex flex-col gap-6 mt-10">
          <label className="text-[20px] font-semibold text-[#403F3F]">
            Your Name
          </label>
          <input
            className="border-none outline-none bg-[#F3F3F3] text-[16px] p-5 rounded-[5px]"
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
          />

          <label className="text-[20px] font-semibold text-[#403F3F]">
            Photo URL
          </label>
          <input
            className="border-none outline-none bg-[#F3F3F3] text-[16px] p-5 rounded-[5px]"
            type="text"
            name="link"
            id=""
            placeholder="Enter your URL"
          />

          <label className="text-[20px] font-semibold text-[#403F3F]">
            Email address
          </label>
          <input
            className="border-none outline-none bg-[#F3F3F3] text-[16px] p-5 rounded-[5px]"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email address"
          />
          <label className="text-[20px] font-semibold text-[#403F3F]">
            Password
          </label>
          <input
            className="border-none outline-none bg-[#F3F3F3] text-[16px] p-5 rounded-[5px]"
            type="password"
            name="password"
            id=""
            placeholder="Enter your password"
          />
          <div className="flex gap-2 items-center mt-4">
            <input type="checkbox" name="check" id="" />
            <p className="text-[#706F6F] text-[16px]">
              Accept{" "}
              <span className="font-semibold text-[#706F6F]">
                Term & Conditions
              </span>
            </p>
          </div>
          <button className="bg-[#403F3F] text-white w-full py-4 rounded-[5px] cursor-pointer font-semibold">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
