import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./pages/kontakt/contact";
import Articles from "./pages/artikli/articles";
import About from "./pages/us/about";
import Categories from "./pages/kategorija/categories";
import Home from "./pages/home/home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/articles", element: <Articles /> },
  { path: "/categories", element: <Categories /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
