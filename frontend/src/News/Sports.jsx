import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import base from "../base";
import Modal from "../components/Modal";

const Sports = ({ sports }) => {
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
      const res = await axios.get(`${base}/sports`);
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
    <div ref={sports}>
      <div className="relative">
        <div className="bg-black bg-opacity-70">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-white text-2xl font-bold text-shadow-black">
                    <span className="inline-block h-5 border-l-3 border-green-600 mr-2"></span>
                    Sports
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
                              position: "relative",
                            }}
                          >
                            <a href={article.item.link} tabIndex="-1">
                              <div className="w-full pb-3">
                                <div className="hover-img bg-white">
                                  <img
                                    className="max-w-full w-full mx-auto h-80"
                                    src={article.item.enclosure.url}
                                    alt="alt title"
                                  />

                                  <div className="py-3 px-6">
                                    <h3 className="text-lg font-bold leading-tight mb-2">
                                      {article.item.title}
                                    </h3>
                                    <span className="inline-block h-3 border-l-2 border-green-600 mr-2"></span>
                                    {article.item.creator}
                                  </div>
                                </div>
                              </div>
                            </a>
                            <button
                              className="absolute top-0 right-2 text-sm py-2 px-2 m-2 font-sans bg-green-500 rounded-lg text-white"
                              onClick={() =>
                                openModal(article.item.contentSnippet)
                              }
                            >
                              Generate AI
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Carousel>
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

export default Sports;
