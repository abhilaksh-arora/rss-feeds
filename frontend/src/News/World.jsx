import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import base from "../base";

const World = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = async () => {
    try {
      const res = await axios.get(`${base}/tech`);
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const chunkedArticles = articles.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  return (
    <div>
      <div
        className="relative"
        // style="background-image: url(&#39;src/img/bg.jpg&#39;);background-size: cover;background-position: center center;background-attachment: fixed"
      >
        <div className="bg-black bg-opacity-70">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-white text-2xl font-bold text-shadow-black">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                    World
                  </h2>
                </div>

                <Carousel autoPlay showThumbs={false}>
                  {chunkedArticles.map((chunk, chunkIndex) => (
                    <div key={chunkIndex}>
                      <ul className="carousel-items flex flex-row">
                        {chunk.map((article, index) => (
                          <li
                            key={index}
                            style={{
                              marginRight: "24px",
                              width: "calc(33.3333% - 16px)",
                            }}
                          >
                            <a href={article.item.link} tabIndex="-1">
                              <div className="w-full pb-3">
                                <div className="hover-img bg-white">
                                  <img
                                    className="max-w-full w-full mx-auto"
                                    src={article.item.enclosure.url}
                                    alt="alt title"
                                  />
                                  <div className="py-3 px-6">
                                    <h3 className="text-lg font-bold leading-tight mb-2">
                                      {article.item.title}
                                    </h3>
                                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                                    {article.item.creator}
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
