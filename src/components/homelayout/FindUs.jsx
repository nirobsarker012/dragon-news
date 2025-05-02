import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="mt-[30px]">
      <h2 className="text-[20px] font-semibold text-[#403F3F] mb-5">
        Find Us On
      </h2>
      <div className="flex flex-col border border-[#E7E7E7] rounded-[5px]">
        <button className="py-4 px-5 inline-flex items-center gap-2 border-b border-[#E7E7E7] text-[#706F6F] text-[16px] font-medium">
          <FaFacebook size={24} /> FaceBook
        </button>
        <button className="py-4 px-5 inline-flex items-center gap-2 border-b border-[#E7E7E7] text-[#706F6F] text-[16px] font-medium">
          <FaTwitter size={24} />
          Twitter
        </button>
        <button className="py-4 px-5 inline-flex items-center gap-2 text-[#706F6F] text-[16px] font-medium">
          <FaInstagram size={24} />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
