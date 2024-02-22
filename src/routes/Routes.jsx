import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddProduct from "../pages/AddProduct";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyCart from "../pages/MyCart";
import Products from "../pages/Products";
import Signup from "../pages/Signup";
import SingleProducts from "../pages/SingleProducts";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://baby-toy-store-server-job-task.vercel.app/allBrands/${params.brand}`
          ),
      },
      {
        path: "products/:brand/:id",
        element: (
          <PrivateRoute>
            <SingleProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://baby-toy-store-server-job-task.vercel.app/allBrands/${params.brand}/${params.id}`
          ),
      },
      {
        path: "addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
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
