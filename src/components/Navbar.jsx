import { format } from "date-fns";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="container flex flex-col justify-center text-center py-2">
          <h2 className="font-english text-[#444444] text-[60px] mb-4">
            The Dragon News
          </h2>
          <span className="text-[18px] text-[#444444] mb-[10px]">
            Journalism Without Fear or Favour
          </span>
          <p className="text-[#706F6F] text-[20px]">
            <span className="text-[#403F3F]">
              {format(new Date(), "EEEE")},{" "}
            </span>
            {format(new Date(), "MMMM ee, yyyy")}
          </p>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
