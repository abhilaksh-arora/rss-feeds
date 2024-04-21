import axios from "axios";
import React, { useEffect, useState } from "react";
import base from "../base";

const India = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = async () => {
    try {
      const res = await axios.get(`${base}/india`);
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div class="text-white">
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div class="flex flex-row flex-wrap">
            <div class="flex-shrink max-w-full w-full overflow-hidden">
              <div class="w-full py-3">
                <h2 class="text-green-600 text-2xl font-bold">
                  <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                  India
                </h2>
              </div>
              <div class="flex flex-row flex-wrap -mx-3">
                {articles.slice(0, 12).map((article, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                      >
                        <a href={article.item.link}>
                          <div class="flex flex-row sm:block hover-img">
                            <img
                              class="max-w-full w-full mx-auto"
                              src={article.item.enclosure.url}
                              alt="alt title"
                            />
                            <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                              <h3 class="text-green-600 text-lg font-bold leading-tight mb-2">
                                {article.item.title}
                              </h3>
                              <p class="hidden md:block leading-tight mb-1 line-clamp-4">
                                {article.item.contentSnippet}
                              </p>
                              <span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                              {article.item.creator}
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            {/* <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div
                class="w-full bg-gray-50 h-full"
                style={{ position: "relative" }}
              >
                <div
                  class="text-sm py-6"
                  style={{ position: "static", left: "auto", width: "469px" }}
                >
                  <div class="w-full text-center">
                    <a
                      class="uppercase"
                      href="https://tailnews.tailwindtemplate.net/#"
                    >
                      Advertisement
                    </a>
                    <a href="https://tailnews.tailwindtemplate.net/#">
                      <img
                        class="mx-auto"
                        src="img1.jpg"
                        alt="advertisement area"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default India;
