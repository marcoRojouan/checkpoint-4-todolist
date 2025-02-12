import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminNav from "../components/AdminNav";
import type { AuthType } from "../lib/definitions";

const AdminPage = () => {
  const data = useLoaderData() as AuthType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.isAdmin) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <>
      <ToastContainer />
      <header className="flex flex-col items-center gap-5 text-white bg-gray-800">
        <h1 className="text-2xl mt-2">Admin</h1>
        <section className="pb-3">
          <AdminNav />
        </section>
      </header>
      <Outlet />
    </>
  );
};

export default AdminPage;
