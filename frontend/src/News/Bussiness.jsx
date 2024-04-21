import axios from "axios";
import React, { useEffect, useState } from "react";
import base from "../base";

const Bussiness = () => {
  const [articles, setArticles] = useState([]);
  const [articles1, setArticles1] = useState([]);
  useEffect(() => {
    getArticles();
    getArticles1();
  }, []);
  const getArticles = async () => {
    try {
      const res = await axios.get(`${base}/bussiness`);
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getArticles1 = async () => {
    try {
      const res = await axios.get(`${base}/most`);
      setArticles1(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div class="py-6 text-white">
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div class="flex flex-row flex-wrap">
            <div class="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div class="w-full py-3">
                <h2 class="text-green-800 text-2xl font-bold">
                  <span class="inline-block h-5 border-l-3 border-green-600 mr-2"></span>
                  Bussiness
                </h2>
              </div>
              <div class="flex flex-row flex-wrap -mx-3">
                {articles.slice(0, 1).map((article, index) => {
                  return (
                    <>
                      <div class="flex-shrink max-w-full w-full px-3 pb-5">
                        <a href={article.item.link}>
                          <div class="relative hover-img max-h-98 overflow-hidden">
                            <img
                              class="max-w-full w-full mx-auto h-auto"
                              src={article.item.enclosure.url}
                              v
                              alt="Image description"
                            />

                            <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                              <h2 class="text-3xl text-green-600 font-bold capitalize  mb-3">
                                {article.item.title}
                              </h2>

                              <p class="text-gray-100 hidden sm:inline-block">
                                {article.item.contentSnippet}
                              </p>

                              <div class="pt-2">
                                <div class="text-gray-100">
                                  <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                                  {article.item.creator}
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}

                {articles.slice(1, 7).map((article, index) => {
                  return (
                    <>
                      <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                        <a href={article.item.link}>
                          <div class="flex flex-row sm:block hover-img">
                            <img
                              class="max-w-full w-full mx-auto"
                              src={article.item.enclosure.url}
                              alt="alt title"
                            />

                            <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                              <h3 class="text-lg text-green-600 font-bold leading-tight mb-2">
                                {article.item.title}
                              </h3>
                              <p class="hidden md:block leading-tight mb-1">
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
            <div
              class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last"
              style={{ position: "relative" }}
            >
              <div class="w-full ">
                <div class="mb-6">
                  <div class="p-4 ">
                    <h2 class="text-lg font-bold">Most Popular</h2>
                  </div>
                  <ul class="post-number">
                    {articles1.slice(0, 12).map((article, index) => {
                      return (
                        <>
                          <li class="border-b border-gray-100 hover:bg-gray-50">
                            <a
                              class="text-lg text-green-600 font-bold px-6 py-3 flex flex-row items-center"
                              href={article.item.link}
                            >
                              {article.item.title}
                            </a>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* <div
                class="text-sm py-6"
                style={{ position: "static", left: "auto", width: "930px" }}
              >
                <div class="w-full text-center">
                  <a class="uppercase" href="#">
                    Advertisement
                  </a>
                  <a href="#">
                    <img
                      class="mx-auto"
                      src="src/img/ads/250.jpg"
                      alt="advertisement area"
                    />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
