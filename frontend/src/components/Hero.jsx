import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Hero = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:1000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(articles);
  return (
    <div className="mt-5 pt-5">
      <div className="text-center flex flex-col justify-center align-middle">
        <h1 className="text-5xl font-bold text-cente">Latest Blogs & News</h1>
        <p className="py-4">
          Stay informed with our concise news blogs, delivering timely updates
          and insightful analysis on current events, trends, and developments
          worldwide.
        </p>
      </div>
      <div className="flex flex-row flex-wrap m-4 justify-center">
        {articles.map((article, index) => {
          return (
            <div className="p-4" key={index}>
              <Card article={article.item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
