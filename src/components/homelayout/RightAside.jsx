import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import Q_Zone from "./Q_Zone";

const RightAside = () => {
  return (
    <div className="space-y-5">
      <SocialLogin />
      <FindUs />
      <Q_Zone />
    </div>
  );
};

export default RightAside;
