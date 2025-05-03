import { NavLink, useNavigate } from "react-router";
import userImage from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert(`SignOut Sucessfully`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container flex justify-between items-center">
      <div>{user && user.email}</div>
      <ul className="flex justify-center items-center gap-4 text-[#706F6F] text-[18px]">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-500 ${isActive ? "text-blue-700 font-bold" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-blue-500 ${isActive ? "text-blue-700 font-bold" : ""}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `hover:text-blue-500 ${isActive ? "text-blue-700 font-bold" : ""}`
            }
          >
            Career
          </NavLink>
        </li>
      </ul>
      {/* Login from */}
      <div className="flex items-center gap-2">
        <img src={`${user ? user.photoURL : userImage}`} alt="" />
        {user ? (
          <button
            onClick={() => {
              handleLogOut(), navigate("/auth/login");
            }}
            className="text-white text-[20px] bg-[#403F3F] py-2 px-8"
          >
            LogOut
          </button>
        ) : (
          <NavLink
            to={"/auth/login"}
            className="text-white text-[20px] bg-[#403F3F] py-2 px-8"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
