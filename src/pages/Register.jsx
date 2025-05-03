import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const { createAuth, setUser, updateUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const link = e.target.link.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const check_box = e.target.check.checked;
    // console.log(
    //   `name:`,
    //   name,
    //   `link:`,
    //   link,
    //   `email:`,
    //   email,
    //   `password:`,
    //   password,
    //   `checkbox:`,
    //   check_box
    // );
    createAuth(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: link })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: link });
          })
          .catch((error) => {
            console.error(error);
            setUser(user);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-8 md:px-16 rounded-[5px] max-w-[752px] w-full mx-auto shadow-lg">
      <div className="py-5 border-b border-[#E7E7E7]">
        <h2 className="text-center text-2xl sm:text-3xl md:text-[35px] text-[#403F3F] font-semibold ">
          Register your account
        </h2>
      </div>
      <div>
        <form onSubmit={handleRegister} className="flex flex-col gap-6 mt-10">
          {/* Name */}
          <label className="text-lg sm:text-xl font-semibold text-[#403F3F]">
            Your Name
          </label>
          <input
            className="border-none outline-none bg-[#F3F3F3] text-base p-4 rounded-[5px] w-full"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          {/* Photo */}
          <label className="text-lg sm:text-xl font-semibold text-[#403F3F]">
            Photo URL
          </label>
          <input
            className="border-none outline-none bg-[#F3F3F3] text-base p-4 rounded-[5px] w-full"
            type="text"
            name="link"
            placeholder="Enter your URL"
            required
          />
          {/* Email */}
          <label className="text-lg sm:text-xl font-semibold text-[#403F3F]">
            Email address
          </label>
          <input
            className="border-none outline-none bg-[#F3F3F3] text-base p-4 rounded-[5px] w-full"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          {/* Password */}
          <label className="text-lg sm:text-xl font-semibold text-[#403F3F]">
            Password
          </label>
          <input
            className="border-none outline-none bg-[#F3F3F3] text-base p-4 rounded-[5px] w-full"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          {/* Checkbox */}
          <div className="flex gap-2 items-center mt-4">
            <input type="checkbox" name="check" id="terms" />
            <p className="text-[#706F6F] text-sm sm:text-base">
              Accept{" "}
              <span className="font-semibold text-[#706F6F]">
                Terms & Conditions
              </span>
            </p>
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="bg-[#403F3F] text-white w-full py-3 rounded-[5px] cursor-pointer font-semibold text-base sm:text-lg"
          >
            Register
          </button>
        </form>
        <div className="flex items-center justify-center mt-8">
          <span className="text-center font-semibold text-sm sm:text-base text-[#706F6F]">
            Already Have an Account?{" "}
            <Link
              className="text-transparent bg-clip-text bg-gradient-to-l from-[#FF8C47] to-[#F75B5F]"
              to={"/auth/login"}
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
