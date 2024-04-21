import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import base from '../base'

const MainNews = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = async () => {
    try {
      const res = await axios.get(`${base}`);
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="py-6">
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div class="flex flex-row flex-wrap">
            <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              {articles.slice(0, 1).map((article, index) => {
                return (
                  <>
                    <div class="relative hover-img max-h-98 overflow-hidden">
                      <a href={article.item.link}>
                        <img
                          class="max-w-full w-full mx-auto h-auto"
                          src={article.item.enclosure.url}
                          alt="Image description"
                        />

                        <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                          <a href="#">
                            <h2 class="text-3xl font-bold capitalize text-white mb-3">
                              {article.item.title}
                            </h2>
                          </a>
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
                      </a>
                    </div>
                  </>
                );
              })}
            </div>

            <div class="flex-shrink max-w-full w-full lg:w-1/2">
              <div class="box-one flex flex-row flex-wrap">
                {articles.slice(1, 5).map((article, index) => {
                  return (
                    <>
                      <article
                        key={index}
                        class="flex-shrink max-w-full w-full sm:w-1/2"
                      >
                        <a href={article.item.link}>
                          <div class="relative hover-img max-h-48 overflow-hidden">
                            <img
                              class="max-w-full w-full mx-auto h-auto"
                              src={article.item.enclosure.url}
                              alt="Image description"
                            />

                            <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                              <a href="#">
                                <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">
                                  {article.item.title}
                                </h2>
                              </a>
                              <div class="pt-1">
                                <div class="text-gray-100">
                                  <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                                  {article.item.creator}
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </article>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
