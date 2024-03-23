import React from "react";

import aboutMainImage from "../assets/aboutMainImage.png";
import HomeLayout from "../layout/HomeLayout";

function About() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className=" flex flex-wrap w-full h-[100vh] justify-around items-center">
          <div className=" w-1/2 flex flex-col gap-5">
            <section className=" w-full space-y-10">
              <h1 className=" text-5xl text-yellow-500 font-bold w-2/3">
                Affordable and quality education
              </h1>
              <p className="text-xl text-gray-200">
                Our goal is to provide the affordable and quality education to
                the world. We are providing the platform for the aspiring
                teachers and students to share their skills, creativity and
                knowledge to each other to empower and contribute in the growth
                and wellness of mankind.
              </p>
            </section>
          </div>
          <div>
            <img src={aboutMainImage} />
          </div>
        </div>
        <div>
          <div className="carousel w-full ">
            <div
              id="slide1"
              className="carousel-item relative w-full flex flex-col items-center justify-center gap-4 px-[15%]"
            >
              <img
                src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                className="w-full rounded-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default About;
