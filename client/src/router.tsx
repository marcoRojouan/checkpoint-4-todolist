import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminCreatePrioprity from "./pages/AdminCreatePrioprity";
import AdminCreateRole from "./pages/AdminCreateRole";
import AdminPage from "./pages/AdminPage";
import AdminThingsList from "./pages/AdminThingsList";
import AdminUserList from "./pages/AdminUserList";
import Error404 from "./pages/Error404";
import HomePage from "./pages/HomePage";
import UserDonePage from "./pages/UserDonePage";
import UserNotDonePage from "./pages/UserNotDonePage";
import UserPage from "./pages/UserPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    loader: () =>
      fetch(`${import.meta.env.VITE_API_URL}/auth/admin`, {
        credentials: "include",
      }),
    children: [
      {
        path: "/admin/utilisateurs",
        element: <AdminUserList />,
      },
      {
        path: "/admin/taches",
        element: <AdminThingsList />,
      },
      {
        path: "/admin/creer-priorités",
        element: <AdminCreatePrioprity />,
      },
      {
        path: "/admin/creer-roles",
        element: <AdminCreateRole />,
      },
    ],
  },
  {
    path: "/to-do-liste",
    element: <UserPage />,
    loader: () =>
      fetch(`${import.meta.env.VITE_API_URL}/auth/authentified`, {
        credentials: "include",
      }),
    children: [
      {
        path: "/to-do-liste/mes-taches",
        element: <UserNotDonePage />,
      },
      {
        path: "/to-do-liste/accomplies",
        element: <UserDonePage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
