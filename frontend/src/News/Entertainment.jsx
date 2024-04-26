import axios from "axios";
import React, { useEffect, useState } from "react";
import base from "../base";
import Modal from "../components/Modal";

const Entertainment = ({ enter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [articles, setArticles] = useState([]);
  const [articles1, setArticles1] = useState([]);
  useEffect(() => {
    getArticles();
    getArticles1();
  }, []);
  const getArticles = async () => {
    try {
      const res = await axios.get(`${base}/enter`);
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getArticles1 = async () => {
    try {
      const res = await axios.get(`${base}/read`);
      setArticles1(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div ref={enter}>
      <div className="py-6 text-white">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div
              className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last"
              style={{ position: "relative" }}
            >
              <div className="w-full ">
                <div className="mb-6">
                  <div className="p-4 ">
                    <h2 className="text-lg font-bold">Most Popular</h2>
                  </div>
                  <ul className="post-number">
                    {articles1.slice(0, 12).map((article, index) => {
                      return (
                        <>
                          <li
                            key={index}
                            className="border-b border-gray-100 hover:bg-gray-50"
                          >
                            <a
                              className="text-lg text-green-600 font-bold px-6 py-3 flex flex-row items-center"
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
                className="text-sm py-6"
                style={{ position: "static", left: "auto", width: "930px" }}
              >
                <div className="w-full text-center">
                  <a className="uppercase" href="#">
                    Advertisement
                  </a>
                  <a href="#">
                    <img
                      className="mx-auto"
                      src="src/img/ads/250.jpg"
                      alt="advertisement area"
                    />
                  </a>
                </div>
              </div> */}
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div className="w-full py-3">
                <h2 className=" text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-green-600 mr-2"></span>
                  Entertainment
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                {articles.slice(0, 1).map((article, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="relative flex-shrink max-w-full w-full px-3 pb-5"
                      >
                        <a href={article.item.link}>
                          <div className="relative hover-img max-h-98 overflow-hidden">
                            <img
                              className="max-w-full lg:w-full w-1/2 h-fit my-auto mx-auto"
                              src={article.item.enclosure.url}
                              v
                              alt="Image description"
                            />

                            <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                              <h2 className="text-3xl text-green-600 font-bold capitalize  mb-3">
                                {article.item.title}
                              </h2>

                              <p className="text-gray-100 hidden sm:inline-block">
                                {article.item.contentSnippet}
                              </p>

                              <div className="pt-2">
                                <div className="text-gray-100">
                                  <div className="inline-block h-3 border-l-2 border-green-600 mr-2"></div>
                                  {article.item.creator}
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <button
                          className="absolute top-0 right-2 text-sm py-2 px-2 m-2 font-sans bg-green-500 rounded-lg text-white"
                          onClick={() => openModal(article.item.contentSnippet)}
                        >
                          Generate AI
                        </button>
                      </div>
                    </>
                  );
                })}
                {isModalOpen && (
                  <Modal onClose={closeModal} content={modalContent} />
                )}
                {articles.slice(1, 7).map((article, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="relative flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                      >
                        <a href={article.item.link}>
                          <div className="flex flex-row sm:block hover-img">
                            <img
                              className="max-w-full lg:w-full w-1/2 h-fit my-auto mx-auto"
                              src={article.item.enclosure.url}
                              alt="alt title"
                            />

                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                              <h3 className="text-lg text-green-600 font-bold leading-tight mb-2">
                                {article.item.title}
                              </h3>
                              <p className="hidden md:block leading-tight mb-1">
                                {article.item.contentSnippet}
                              </p>

                              <span className="inline-block h-3 border-l-2 border-green-600 mr-2"></span>
                              {article.item.creator}
                            </div>
                          </div>
                        </a>
                        <button
                          className="absolute top-0 right-2 text-sm py-2 px-2 m-2 font-sans bg-green-500 rounded-lg text-white"
                          onClick={() => openModal(article.item.contentSnippet)}
                        >
                          Generate AI
                        </button>
                      </div>
                    </>
                  );
                })}
                {isModalOpen && (
                  <Modal onClose={closeModal} content={modalContent} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
