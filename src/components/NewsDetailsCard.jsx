import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetailsCard = ({ news }) => {
  // console.log(news);
  return (
    <div>
      <h3 className="text-[20px] text-[#403F3F] font-semibold ">Dragon News</h3>
      <div className="border border-[#E7E7E7] p-[30px] rounded-[5px]">
        <img className="w-full rounded-[5px]" src={news.image_url} alt="" />
        <h2 className="mt-5 text-[#403F3F] text-[25px] font-bold max-w-[664px] mb-[11px]">
          {news.title}
        </h2>
        <p className="text-[16px] text-[#706F6F]">{news.details}</p>
        <div className="mt-[32px]">
          <Link
            className="bg-[#D72050] inline-flex items-center gap-2 text-white text-[20px] font-medium py-2 px-[26px]"
            to={`/categories/${news.category_id}`}
          >
            <FaArrowLeft /> All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
