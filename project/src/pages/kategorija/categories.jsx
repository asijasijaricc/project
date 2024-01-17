import { useEffect, useState } from "react";
import Footer from "../foot/footer";
import Header from "../nav/header";
import { Grid } from "@mui/material";
import { blogApi } from "../api/api";
import Kartica from "../card/kartica";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await blogApi.get("/api/categories?populate=deep");
      setCategories(response.data.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  console.log(categories);

  return (
    <div>
      <Header />
      <div className="naslov">
        <h1>What u can read about here</h1>
      </div>
      <Grid container spacing={4}>
        {categories &&
          categories.map((item) => (
            <Grid item key={item.id} sx={12} sm={8} md={6}>
              <Kartica
                key={item.id}
                title={item.attributes.title}
                description={item.attributes.description}
              />
            </Grid>
          ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default Categories;
