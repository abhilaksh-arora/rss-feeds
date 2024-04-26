import axios from "axios";
import React, { useEffect, useState } from "react";
import base from "../base";
import Modal from "../components/Modal";

const Tech = ({ tech }) => {
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
      const res = await axios.get(`${base}/world`);
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div ref={tech}>
      <div className="py-6 text-white">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-green-600 mr-2"></span>
                  World
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                {articles.slice(0, 12).map((article, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="relative flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                      >
                        <a href={article.item.link}>
                          <div className="flex flex-row sm:block hover-img">
                            <img
                              className="max-w-full w-full mx-auto"
                              src={article.item.enclosure.url}
                              alt="alt title"
                            />

                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                              <h3 className="text-lg text-green-600 font-bold leading-tight mb-2">
                                {article.item.title}
                              </h3>
                              <p className="hidden md:block leading-tight mb-1 line-clamp-4">
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

export default Tech;
