import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Products from "../pages/Products";
import SingleProducts from "../pages/SingleProducts";
import MyCart from "../pages/MyCart";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://baby-toy-store-server-job-task.vercel.app/allBrands"),
      },

      {
        path: "products/:brand",
        element: <Products />,
        loader: ({ params }) =>
          fetch(
            `https://baby-toy-store-server-job-task.vercel.app/allBrands/${params.brand}`
          ),
      },
      {
        path: "products/:brand/:id",
        element: <SingleProducts />,
        loader: ({ params }) =>
          fetch(
            `https://baby-toy-store-server-job-task.vercel.app/allBrands/${params.brand}/${params.id}`
          ),
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "/myCart",
        element: <MyCart />,
        loader: () =>
          fetch(`https://baby-toy-store-server-job-task.vercel.app/myCart`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
