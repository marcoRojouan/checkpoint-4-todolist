import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminCreatePrioprity from "./pages/AdminCreatePrioprity";
import AdminCreateRole from "./pages/AdminCreateRole";
import AdminPage from "./pages/AdminPage";
import AdminThingsList from "./pages/AdminThingsList";
import AdminUserList from "./pages/AdminUserList";
import HomePage from "./pages/HomePage";

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
]);
