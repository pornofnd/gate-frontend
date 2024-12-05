import { createBrowserRouter } from "react-router-dom";
import Home from "../../Templates/Home";
import JarPage from "../../page/Jar/JarPage";
import WsJar from "page/Jar/WsJar";
import JarCreate from "Molecules/JarCreate";
import JarEdit from "page/Jar/JarEdit";
import WsProduct from "page/Product/WsProduct";
import ProductCreate from "page/Product/ProductCreate";
import ProductPage from "page/Product/ProudctPage";
import { Layout } from "../layout";
import ProductGetOne from "page/Product/ProductGetOne";
import ProductEdit from "page/Product/ProductEdit";
import JarGetOne from "page/Jar/JarGetOne";
import DashboardPage from "page/Dashboard/DashboardPage";
import DashboardLayout from "page/Dashboard/DashboardLayout";
import WsDashboard from "page/Dashboard/WsDashboard";
import AppDashboardLayout from "page/Dashboard/AppDashboardLayout";
import AppCreate from "page/App/AppCreate";
import AppProudcts from "page/App/AppProducts";
import StoreOne from "page/Store/StoreOne";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <WsDashboard />,
        children: [
          {
            path: "",
            element: <DashboardLayout />,
            children: [
              {
                path: "",
                element: <DashboardPage />,
              },
              {
                path: "jar",
                element: <DashboardPage />,
              },
              {
                path: "app/create",
                element: <AppCreate />,
              },
              {
                path: "app/:id",
                element: <AppDashboardLayout />,
                children: [
                  {
                    path: "",
                    element: <AppProudcts />,
                  },
                  {
                    path: "wallet",
                    element: <AppCreate />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "/jar",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <WsJar />,
        children: [
          {
            path: "create",
            element: <JarCreate />,
          },
          {
            path: "",
            element: <JarPage />,
          },
          {
            path: "edit",
            element: <JarGetOne />,
          },
          {
            path: "getone/:id",
            element: <JarEdit />,
          },
        ],
      },
    ],
  },
  {
    path: "/store",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <JarEdit />,
      },
      {
        path: ":id",
        element: <StoreOne />,
      },
      // {
      // path: "",
      // element: <WsProduct />,
      // children: [
      // ],
      // },
    ],
  },
]);
