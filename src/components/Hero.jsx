import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden">
    <main className="main flex max-w-7xl my-0 mx-auto items-center h-screen overflow-x-hidden overflow-y-hidden">
      <div className="hero-content flex flex-col gap-9 ">
        <h1 className="hero font-extrabold text-8xl mt-10">YOUR FEET DESERVE THE BEST.</h1>
        <p className="font-semibold text-gray-900 w-1/2 text-justify">
          Nike, a global leader in athletic footwear and apparel, has
          revolutionized the sports industry since its inception. Founded in
          1964 by Bill Bowerman and Phil Knight as Blue Ribbon Sports, the
          company became Nike, Inc. in 1971 and quickly established itself as a
          trailblazer in athletic performance and fashion.
        </p>
        <div className="hero-button">
            <button className="bg-red-600 h-8 px-4 py-2 text-white font-medium text-xl">Shop Now</button>
            <button className="btn-2 bg-transparent text-gray-900 h-8 px-4 py-2 font-medium text-xl">Category</button>
        </div>
        <div className="shopping">
            <p className="text-sm font-bold mb-2 text-gray-900">Also Available On</p>
            <div className="brand-icons flex gap-4">
                <img src="./src/images/flipkart.png" alt="flipkart" />
                <img src="./src/images/amazon.png" alt="amazon" />
            </div>
        </div>
      </div>
      <div className="Hero-image">
        <img src="./src/images/hero-image.png" alt="hero-image" className="max-w-md" />
      </div>
    </main>
    </div>
  );
};

export default Hero;
