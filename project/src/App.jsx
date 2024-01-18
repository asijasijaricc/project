import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Articles from "./pages/artikli/articles";
import Categories from "./pages/kategorija/categories";
import Home from "./pages/home/home";
import Contact from "./pages/us/about";
import ArticlePage from "./pages/artikli/article";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/articles", element: <Articles /> },
  { path: "/categories", element: <Categories /> },
  { path: "/contact", element: <Contact /> },
  { path: "/articles/:articleName", element: <ArticlePage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
