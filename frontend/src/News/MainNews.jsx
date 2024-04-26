import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import base from "../base";
import Modal from "../components/Modal";

const MainNews = ({ main }) => {
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
    <div ref={main}>
      <div className="py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="w-full py-3">
            <h2 className="text-white text-2xl font-bold">
              <span className="inline-block h-5 border-l-3 border-green-600 mr-2"></span>
              Top Stories
            </h2>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              {articles.slice(0, 1).map((article, index) => (
                <div
                  key={index}
                  className="relative hover-img max-h-98 overflow-hidden"
                >
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
                          <div className="inline-block h-3 border-l-2 border-green-600 mr-2"></div>
                          {article.item.creator}
                        </div>
                      </div>
                    </div>
                  </a>
                  <button
                    className="absolute top-0 right-0 text-sm py-2 px-2 m-2 font-sans bg-green-500 rounded-lg text-white"
                    onClick={() => openModal(article.item.contentSnippet)}
                  >
                    Generate AI
                  </button>
                </div>
              ))}
              {isModalOpen && (
                <Modal onClose={closeModal} content={modalContent} />
              )}
            </div>

            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                {articles.slice(1, 5).map((article, index) => {
                  return (
                    <>
                      <article
                        key={index}
                        className="relative flex-shrink max-w-full w-full sm:w-1/2"
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
                                  <div className="inline-block h-3 border-l-2 border-green-600 mr-2"></div>
                                  {article.item.creator}
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <button
                          className="absolute top-0 right-0 text-sm py-2 px-2 m-2 font-sans bg-green-500 rounded-lg text-white"
                          onClick={() => openModal(article.item.contentSnippet)}
                        >
                          Generate AI
                        </button>
                      </article>
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

export default MainNews;
