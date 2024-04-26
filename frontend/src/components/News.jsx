import React from "react";
import MainNews from "../News/MainNews";
import India from "../News/India";
import World from "../News/World";
import Tech from "../News/Tech";
import Bussiness from "../News/Bussiness";
import Sports from "../News/Sports";
import Entertainment from "../News/Entertainment";

const News = ({ main, india, world, tech, sports, enter, buss }) => {
  return (
    <div>
      <MainNews main={main} />
      <India india={india} />
      <World world={world} />
      <Tech tech={tech} />
      <Bussiness buss={buss} />
      <Sports sports={sports} />
      <Entertainment enter={enter} />
    </div>
  );
};

export default News;
