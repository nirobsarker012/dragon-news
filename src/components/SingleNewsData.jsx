import React from "react";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const SingleNewsData = ({ singleData }) => {
  //   console.log(singleData);
  return (
    <div className=" w-full border border-[#E7E7E7]">
      <div className="bg-[#F3F3F3] w-full py-6 px-[20px]">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <img
              className="rounded-full w-[40px]"
              src={singleData.author.img}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-[16px] text-[#403F3F]">
                {singleData.author.name}
              </h4>
              <span className="text-[#706F6F] text-[14px]">
                {singleData.author.published_date}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Link>
              <CiBookmark size={24} />
            </Link>
            <Link>
              <CiShare2 size={24} />
            </Link>
          </div>
        </div>
      </div>
      {/* card content */}
      <div className="border-b border-[#E7E7E7] py-6 px-[20px]">
        <div className="border-b border-black">
          <h3 className="font-bold text-[20px] text-[#403F3F] mt-6">
            {singleData.title}
          </h3>
          <img
            className="rounded-[5px] w-[518px] mb-[32px]"
            src={singleData.thumbnail_url}
            alt=""
          />
          <p className="line-clamp-4 text-[16px] leading-6">
            {singleData.details}
          </p>
          <Link className="text-transparent bg-clip-text bg-gradient-to-l from-[#FF8C47] to-[#F75B5F] text-[16px] font-semibold mt-4">
            Read More
          </Link>
        </div>

        <div className="flex justify-between items-center gap-2 mt-3">
          <div className="flex gap-1 items-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="text-gray-800">{singleData.rating.number}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEye />
            {singleData.total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsData;
