import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./Home.jsx";
import MyBlog from "./Blog.jsx";
import ReadBlogs from "./ReadBlogs.jsx";
import Bookmakrs from "./Bookmakrs.jsx";
import About from "./About.jsx";
import Support from "./Support.jsx";
// import Loader from "./Loader.jsx";

const router = createBrowserRouter([
  {
    index: true,
    path: "introduction",
    element: <App/>,
    // loader: <Loader />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <MyBlog/>,
      },
      {
        path: "/read",
        element: <ReadBlogs />
      },
      {
        path: "/bookmarks",
        element: <Bookmakrs/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/support",
        element: <Support/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
