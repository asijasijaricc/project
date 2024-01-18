import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogApi } from "../api/api";

const ArticlePage = () => {
  const { articleName } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await blogApi.get(`api/articles/${articleName}`);
        setArticle(response.data.data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchData();
  }, [articleName]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{article.attributes.title}</h1>
      <p>{article.attributes.description}</p>
    </div>
  );
};

export default ArticlePage;
