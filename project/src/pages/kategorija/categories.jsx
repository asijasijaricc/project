import { useEffect, useState } from "react";
import Footer from "../foot/footer";
import Header from "../nav/header";
import { Grid } from "@mui/material";
import { blogApi } from "../api/api";
import Kat from "../card/katecard";

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
      <div className="naslov" style={{ marginBottom: "80px" }}>
        <h1>What u can read about here</h1>
      </div>
      <Grid container spacing={5}>
        {categories &&
          categories.map((item) => (
            <Grid item key={item.id} sx={7} sm={2} md={4}>
              <Kat
                key={item.id}
                title={item.attributes.category}
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
