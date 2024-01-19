import { useEffect, useState } from "react";
import { blogApi } from "../api/api";
import Header from "../nav/header";
import Footer from "../foot/footer";
import Kartica from "../card/kartica";
import { Grid } from "@mui/material";
import "./articles.css";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await blogApi.get("api/articles?populate=deep");
      setArticles(response.data.data);
      console.log(response.data.data);
    };
    fetchData();
  }, []);

  console.log(articles);

  return (
    <div>
      <Header />
      <div className="naslov">
        <h1>Our best articles</h1>
      </div>
      <Grid container spacing={2}>
        {articles &&
          articles.map((item) => (
            <Grid item key={item.id} sx={7} sm={2} md={4}>
              <Link
                to={`/articles/${item.attributes.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Kartica
                  key={item.id}
                  title={item.attributes.title}
                  description={item.attributes.description}
                  image={
                    "http://localhost:1337" +
                    item.attributes.cover.data.attributes.url
                  }
                  id={item.id}
                  slug={item.attributes.slug}
                />
              </Link>
            </Grid>
          ))}
      </Grid>
      <Footer />
    </div>
  );
};
export default Articles;
