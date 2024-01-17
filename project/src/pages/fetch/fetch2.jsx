import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogArticle from "./fetch2";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchBlogArticles = async () => {
      try {
        const response = await axios.get("http://localhost:1337/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Greška pri dohvatanju podataka:", error);
      }
    };
    console.log(response.data);

    fetchBlogArticles();
  }, []);

  return (
    <div id="article-container">
      {articles.map((article) => (
        <BlogArticle
          key={article.id}
          title={article.title}
          content={article.content}
        />
      ))}
    </div>
  );
};

export default App;
