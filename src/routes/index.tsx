import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import BlankLayout from "../layouts/BlankLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import BookPage from "../pages/BookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> } /* '/' */,
      { path: "books/:gVolumeId", element: <BookPage /> } /* '/about' */,
    ],
  },
  {
    path: "/login",
    element: <BlankLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);

export default router;
