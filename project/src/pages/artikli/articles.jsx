import { useEffect, useState } from "react";
import { blogApi } from "../api/api";
import Header from "../nav/header";
import Footer from "../foot/footer";
import Kartica from "../card/kartica";
import { Grid } from "@mui/material";
import "./articles.css";

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
      <Grid container spacing={4}>
        {articles &&
          articles.map((item) => (
            <Grid item key={item.id} sx={12} sm={8} md={6}>
              <Kartica
                key={item.id}
                title={item.attributes.title}
                description={item.attributes.description}
                image={
                  "http://localhost:1337" +
                  item.attributes.cover.data.attributes.url
                }
              />
            </Grid>
          ))}
      </Grid>
      <Footer />
    </div>
  );
};
export default Articles;
