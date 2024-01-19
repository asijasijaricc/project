import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogApi } from "../api/api";
import Header from "../nav/header";
import Footer from "../foot/footer";
import Artikal from "../card/arikal";

const ArticlePage = () => {
  const { articleName } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await blogApi.get(`/api/articles/${articleName}`);
        setArticle(response.data.data);

        console.log(response.data.data);
        console.log(response.data.data.attributes.description2);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchData();
  }, [articleName]);

  return (
    <div>
      <Header />
      <Artikal />
      {article && (
        <h1 style={{ color: "pink", margin: "40px" }}>
          {article.attributes.title}
        </h1>
      )}
      {article && (
        <p style={{ fontSize: "x-large", margin: "40px" }}>
          {article.attributes.description}
        </p>
      )}
      {article &&
        article.attributes.description2 &&
        article.attributes.description2.length > 0 && (
          <div>
            {article.attributes.description2.map((item, index) => (
              <div key={index}>
                {item.children && item.children.length > 0 && (
                  <div>
                    {item.children.map((child, childIndex) => (
                      <div key={childIndex}>
                        <p style={{ fontSize: "larger", margin: "40px" }}>
                          {child.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      <Footer />;
    </div>
  );
};

export default ArticlePage;
