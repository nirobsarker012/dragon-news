import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../components/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading />;
  }
  //   console.log(user);
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/auth/login"} />;
};

export default PrivateRouter;
