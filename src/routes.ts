import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CategoryPage from "./pages/CategoryPage";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:slug", Component: CategoryPage },
      { path: "quote", Component: Quote },
      { path: "contact", Component: Contact },
    ],
  },
]);
