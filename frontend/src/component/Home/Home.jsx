import React from "react";
import "./Home.css";
import "../../index.css";
import MultiItemCarousel from "./MultiItemCarousel";

const Home = () => {
  return (
    <div className="">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">mydaydeli</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            "한 입에 맛있는 혜택, 빠른 배달로 집으로 곧바로!"
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className=""></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
          있기있는 메뉴
        </p>
        <MultiItemCarousel />
      </section>
      <section className="px-5 lg:px-20">
        <h1 className="text-2xl font-semibold text-gray-400 py-3">
          즐겨찾기를 통해 빠르게 주문해보세요!
        </h1>
        <div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
