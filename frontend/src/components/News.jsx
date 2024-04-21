import React from "react";
import MainNews from "../News/MainNews";
import India from "../News/India";
import World from "../News/World";
import Tech from "../News/Tech";
import Bussiness from "../News/Bussiness";
import Sports from "../News/Sports";
import Entertainment from "../News/Entertainment";

const News = () => {
  return (
    <div>
      <MainNews />
      <India />
      <World />
      <Tech />
      <Bussiness />
      <Sports />
      <Entertainment />
    </div>
  );
};

export default News;
