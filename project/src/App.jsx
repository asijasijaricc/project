import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/articles");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
