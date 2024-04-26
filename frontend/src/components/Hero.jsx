import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Navbar from "./Navbar";

const Hero = ({ main, india, world, tech, sports, enter, buss }) => {
  return (
    <div className="hero">
      <Navbar
        main={main}
        india={india}
        world={world}
        sports={sports}
        enter={enter}
        buss={buss}
        tech={tech}
      />
      <section className="h-[60%] flex justify-center items-center mt-12">
        <div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl text-center">
              Get
              <span className="text-green-600"> Updated </span>
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

    </div>
  );
};

export default Hero;
