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
      <div className="py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              {articles.slice(0, 1).map((article, index) => {
                return (
                  <>
                    <div key={index} className="relative hover-img max-h-98 overflow-hidden">
                      <a href={article.item.link}>
                        <img
                          className="max-w-full w-full mx-auto h-auto"
                          src={article.item.enclosure.url}
                          alt="Image description"
                        />

                        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                          <a href="#">
                            <h2 className="text-3xl font-bold capitalize text-white mb-3">
                              {article.item.title}
                            </h2>
                          </a>
                          <p className="text-gray-100 hidden sm:inline-block">
                            {article.item.contentSnippet}
                          </p>
                          <div className="pt-2">
                            <div className="text-gray-100">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
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

            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                {articles.slice(1, 5).map((article, index) => {
                  return (
                    <>
                      <article
                        key={index}
                        className="flex-shrink max-w-full w-full sm:w-1/2"
                      >
                        <a href={article.item.link}>
                          <div className="relative hover-img max-h-48 overflow-hidden">
                            <img
                              className="max-w-full w-full mx-auto h-auto"
                              src={article.item.enclosure.url}
                              alt="Image description"
                            />

                            <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                              <a href="#">
                                <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                                  {article.item.title}
                                </h2>
                              </a>
                              <div className="pt-1">
                                <div className="text-gray-100">
                                  <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
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
