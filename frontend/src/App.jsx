import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import AnimatedCursor from "react-animated-cursor";
import News from "./components/News";
import Footer from "./News/Footer";

const App = () => {
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
  return (
    <div>
      {width >= 756 ? (
        <AnimatedCursor innerSize={8} outerSize={12} color="80, 200, 120" />
      ) : (
        ""
      )}
      <Hero />
      <News />
      <Footer />
    </div>
  );
};

export default App;
