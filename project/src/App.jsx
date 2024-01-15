import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Articles from "./pages/artikli/articles";
import Categories from "./pages/kategorija/categories";
import Home from "./pages/home/home";
import Contact from "./pages/us/about";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/articles", element: <Articles /> },
  { path: "/categories", element: <Categories /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
