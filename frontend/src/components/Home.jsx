import React, { useEffect, useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Hero from "./Hero";
import News from "./News";
import Footer from "../News/Footer";
import Navbar from "./Navbar";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const main = useRef(null);
  const india = useRef(null);
  const world = useRef(null);
  const sports = useRef(null);
  const enter = useRef(null);
  const buss = useRef(null);
  const tech = useRef(null);
  return (
    <div>
      {" "}
      {width >= 756 ? (
        <AnimatedCursor innerSize={8} outerSize={12} color="80, 200, 120" />
      ) : (
        ""
      )}

      <Hero
        main={main}
        india={india}
        world={world}
        sports={sports}
        enter={enter}
        buss={buss}
        tech={tech}
      />
      <News
        main={main}
        india={india}
        world={world}
        sports={sports}
        enter={enter}
        buss={buss}
        tech={tech}
      />
      <Footer />
    </div>
  );
};

export default Home;
