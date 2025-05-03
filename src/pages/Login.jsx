import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const navigation = useNavigate();
  const { signIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(`Email`, email, `Password`, password);
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="bg-white py-[76px] px-[73px] rounded-[5px] max-w-[752px] mx-auto shadow-lg">
      <div className="py-5 border-b border-[#E7E7E7]">
        <h2 className="text-center text-[35px] text-[#403F3F] font-semibold ">
          Login your account
        </h2>
      </div>
      <div>
        <form onSubmit={handleLogin} className="flex flex-col gap-6 mt-10">
          {/* Email */}
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
          {/* Password */}
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
          <button
            onClick={() => {
              navigation("/");
            }}
            type="submit"
            className="bg-[#403F3F] text-white w-full py-4 rounded-[5px] cursor-pointer font-semibold"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center mt-[30px]">
          <span className="text-center font-semibold text-[16px] text-[#706F6F]">
            Don't Have an Account ?{" "}
            <Link
              className="text-transparent bg-clip-text bg-gradient-to-l from-[#FF8C47] to-[#F75B5F]"
              to={"/auth/register"}
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
