import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Header from "./Header";

const Hero = () => {
  
  return (
    <div className="hero">
      {/* <Header /> */}
      <section className="h-[80%] flex justify-center items-center mt-20">
        <div>
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-8xl text-center mt-[-190px]">
              Get
              <span className="text-green-600"> Updated</span>
              <br />
              News Every
              <span className="text-green-600"> Day </span>
            </h1>
            <h2 className="relative font-regular text-sm sm:text-xl text-[#a7b2b3] tracking-wide   max-w-2xl antialiased mt-5 text-center">
              Your One-Stop Destination for Latest News Buzz
            </h2>
          </div>
          <div class="mouse"></div>
        </div>
      </section>
      {/* <div className="flex flex-row flex-wrap justify-center">
        {articles.map((article, index) => {
          return (
            <div className="p-4" key={index}>
              <Card article={article.item} />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Hero;
