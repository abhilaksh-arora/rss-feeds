// Import necessary modules and components

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Functional component for the Navbar
export default function Navbar({
  main,
  india,
  world,
  tech,
  sports,
  enter,
  buss,
}) {
  const ref = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll
            isScrolling={isScrolling}
            main={main}
            india={india}
            world={world}
            sports={sports}
            enter={enter}
            buss={buss}
            tech={tech}
          />
        ) : (
          <NavbarFixed
            main={main}
            india={india}
            world={world}
            sports={sports}
            enter={enter}
            buss={buss}
            tech={tech}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Functional component for the fixed Navbar
function NavbarFixed({ main, india, world, tech, sports, enter, buss }) {
  const handleScroll1 = (ref) => {
    console.log("Called");
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav">
      <div className="nav-links flex justify-center">
        <ul className="flex text-[#bdb9b9] gap-10 py-4 px-8 bg-black rounded-[120px] mt-5 links">
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(main.current);
              }}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(india.current);
              }}
            >
              India
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(world.current);
              }}
            >
              World
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(tech.current);
              }}
            >
              Technology
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(buss.current);
              }}
            >
              Business
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(sports.current);
              }}
            >
              Sports
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(enter.current);
              }}
            >
              Entertainment
            </Link>
          </li>
        </ul>
        <div className="nav-slider false"></div>
      </div>
    </div>
  );
}

// Functional component for the scrolling Navbar
function NavbarScroll({
  isScrolling,
  main,
  india,
  world,
  tech,
  sports,
  enter,
  buss,
}) {
  const handleScroll1 = (ref) => {
    console.log("Called");
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="nav-blur fixed z-10 flex justify-between py-2 rounded-full ts-bg left-1/2 top-10"
    >
      {/* <ul className="flex items-center">
        <li className="px-2 text-white text-md">
          <Link href={"/pods"}>Magician</Link>
        </li>
        <li className="px-2 text-white text-md">
          <Link href={"/"}>Genius</Link>
        </li>
        <li className="px-2 text-white text-md">
          <Link href={"/"}>Animator</Link>
        </li>
        <li className="px-2 text-white text-md">
          <Link href={"/"}>UI-AI</Link>
        </li>
        <li className="px-4 py-2 ml-2 text-white bg-black rounded-full text-md ">
          <Link href={"/"}>Login</Link>
        </li>
      </ul> */}
      <div className="flex justify-center nav-links">
        <ul className="flex text-[#bdb9b9] gap-10 py-4 px-8 bg-black rounded-[120px] mt-5 links">
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(main.current);
              }}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(india.current);
              }}
            >
              India
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(world.current);
              }}
            >
              World
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(tech.current);
              }}
            >
              Technology
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(buss.current);
              }}
            >
              Business
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(sports.current);
              }}
            >
              Sports
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link
              onClick={() => {
                handleScroll1(enter.current);
              }}
            >
              Entertainment
            </Link>
          </li>
        </ul>
        <div className="nav-slider false"></div>
      </div>
    </motion.nav>
  );
}

// Animation variants for the scrolling Navbar
const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};
