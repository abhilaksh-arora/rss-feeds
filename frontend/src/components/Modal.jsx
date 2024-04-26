import React, { useState } from "react";
import geminiService from "../geminiServices/GeminiServices";

const Modal = ({ onClose, content }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [newsInfo, setNewsInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setNews(content, option);
  };

  const setNews = (content, type) => {
    setLoading(true); // Set loading to true while fetching news
    if (type === "Summary") {
      type += " in 60 words";
    }
    if (type === "Tweet") {
      type += " also add emoji and hastags";
    }
    geminiService
      .run(
        `${content}. Generate a ${type} for this news .Add <br/> tag where line and two <br/> paragraph and also add <br/> tag in the end of every point, list element, etc and remove every * from it `
      )
      .then((news) => {
        if (news) {
          setNewsInfo(news);
        }
      })
      .catch((error) => {
        setNewsInfo(`Error: ${error}`);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after news is fetched
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(newsInfo); // Copy newsInfo to clipboard
  };

  return (
    <div className="text-white fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-black p-8 rounded-lg relative">
        <button
          className="absolute top-1 right-1 text-green-600"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-row justify-between">
          <h3 className="text-xl">Generate content according to your needs!</h3>

          <button
            className="ml-2 flex text-green-600"
            onClick={copyToClipboard}
            aria-label="Copy to Clipboard"
          >
            Copy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2M9 11V7a2 2 0 012-2h2a2 2 0 012 2v4m-6 6H5a2 2 0 01-2-2v-6a2 2 0 012-2h2m10 0h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-3-10v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2"
              />
            </svg>
          </button>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <>
            <div className="bg-green-600 text-white p-4 m-2 rounded-md" dangerouslySetInnerHTML={{ __html: newsInfo }}></div>

            <div className="flex justify-between mt-4">
              <button
                className="text-sm py-2 px-4 font-sans bg-green-500 rounded-lg text-white mr-2"
                onClick={() => handleSelectOption("Summary")}
              >
                Summary
              </button>
              <button
                className="text-sm py-2 px-4 font-sans bg-green-500 rounded-lg text-white mr-2"
                onClick={() => handleSelectOption("Tweet")}
              >
                Tweet
              </button>
              <button
                className="text-sm py-2 px-4 font-sans bg-green-500 rounded-lg text-white"
                onClick={() => handleSelectOption("Blog")}
              >
                Blog
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
