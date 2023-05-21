import Aos from "aos";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaComment, FaRegThumbsUp, FaUser } from "react-icons/fa";

const Analytics = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile" });
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="custom-container my-6">
      <h3 className="text-3xl font-bold text-center mb-6">Our Analytics</h3>
      <div className="grid lg:grid-cols-3 gap-4 px-2" data-aos="fade-right">
        <div className="bg-blue-400 rounded-lg h-[250px] justify-center text-white flex flex-col gap-8 items-center p-6">
          <p className="text-5xl font-bold">
            <CountUp end={1020000} separator="" duration={30} />
          </p>
          <span>
            <FaRegThumbsUp className="text-[#7A1F2B] text-8xl" />
          </span>
        </div>
        <div className="bg-blue-400 rounded-lg h-[250px] justify-center text-white flex flex-col gap-8 items-center p-6">
          <p className="text-5xl font-bold">
            <CountUp end={300000} separator="" duration={30} />
          </p>
          <span className="text-[#7A1F2B] text-8xl">
            <FaUser />
          </span>
        </div>
        <div className="bg-blue-400 rounded-lg h-[250px] justify-center text-white flex flex-col gap-8 items-center p-6">
          <p className="text-5xl font-bold">
            <CountUp end={250230} separator="" duration={30} />
          </p>
          <span className="text-[#7A1F2B] text-8xl">
            <FaComment />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
