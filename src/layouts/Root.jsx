import React from "react";

import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
