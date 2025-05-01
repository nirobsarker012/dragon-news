import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";
import LeftAside from "./homelayout/leftAside";
import RightAside from "./homelayout/RightAside";
import HeroContent from "./HeroContent";

const Hero = () => {
  const [category, setCategory] = useState([]);
  return (
    <div>
      <main className="container py-7">
        {/* Leatest Sections */}
        <section>
          <div className="w-full flex items-center py-[20px] bg-[#F3F3F3] gap-4 px-4">
            <p className="bg-[#D72050] text-[#ffffff] text-[20px] py-2 px-[24px]">
              Leatest
            </p>
            <Marquee pauseOnHover={true}>
              <p className="text-[#403F3F] text-[18px] font-semibold">
                Match Highlights: Germany vs Spain — as it happened ! Match
                Highlights: Germany vs Spain as...
              </p>
            </Marquee>
          </div>
        </section>
        {/* nav Section */}
        <div className="mt-8">
          <Navbar />
        </div>
        {/* Hero Content */}
        <div className="mx-auto my-3 grid justify-between grid-cols-12">
          <aside className="col-span-3">
            <LeftAside setCategory={setCategory} />
          </aside>
          <section className="col-span-6">
            <HeroContent category={category} />
          </section>
          <aside className="col-span-3">
            <RightAside />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Hero;
