import React from "react";
import class_img from "../../assets/class.png";
import play_img from "../../assets/playground.png";
import swiming from "../../assets/swimming.png";
import bg_img from "../../assets/bg.png";

const Q_Zone = () => {
  return (
    <div className="bg-[#F3F3F3] p-4 w-full">
      <h2 className="font-semibold text-[20px] text-[#403F3F] mb-5">Q-Zone</h2>
      {/* Image Div */}
      <img src={class_img} alt="" />
      <img src={play_img} alt="" />
      <img src={swiming} alt="" />
      <img className="mt-5" src={bg_img} alt="" />
    </div>
  );
};

export default Q_Zone;
