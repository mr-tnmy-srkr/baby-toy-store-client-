import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Products from "../pages/Products";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('https://baby-toy-store-server-job-task.vercel.app/allBrands')
      },
      
      {
        path:"products/:brand",
        element:<Products/>,
        loader:({params}) => fetch(`https://baby-toy-store-server-job-task.vercel.app/allBrands/${params.brand}`)

      },
      {
        path:"addProduct",
        element: <AddProduct/>,
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
