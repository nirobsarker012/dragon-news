import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <header className="container">
        <Navbar />
      </header>
      <main className="container py-[100px]">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
