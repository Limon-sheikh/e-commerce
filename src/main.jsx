import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Blog from "./Page/Blog/Blog";
import ShopNow from "./Page/Shop/ShopNow";
import Contact from "./Page/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/shop", element: <ShopNow></ShopNow> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
