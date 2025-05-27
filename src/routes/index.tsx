import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // /
    ],
  },
  {
    path: "/login",
    element: <LoginPage />, // No layout for login
  },
]);
