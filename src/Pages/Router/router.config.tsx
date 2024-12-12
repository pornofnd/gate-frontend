import { createBrowserRouter } from "react-router-dom";
import Home from "../../Templates/Home";
import JarPage from "../JarPage";
import WsJar from "Pages/WsJar";
import JarCreate from "Molecules/JarCreate";
import JarEdit from "Pages/JarEdit";
import WsProduct from "Pages/WsProduct";
import ProductCreate from "Pages/ProductCreate";
import ProductPage from "Pages/ProudctPage";
import { Layout } from "../layout";
import ProductGetOne from "Pages/ProductGetOne";
import ProductEdit from "Pages/ProductEdit";
import JarGetOne from "Pages/JarGetOne";
import DashboardPage from "Pages/DashboardPage";
import DashboardLayout from "Pages/DashboardLayout";
import WsDashboard from "Pages/WsDashboard";
import AppDashboardLayout from "Pages/AppDashboardLayout";
import AppCreate from "Pages/AppCreate";
import AppProudcts from "Templates/AppProducts";
import StoreOne from "Pages/StoreOne";

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
                    path: "product",
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
