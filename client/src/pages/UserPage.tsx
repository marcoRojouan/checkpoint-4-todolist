import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserNav from "../components/UserNav";
import type { AuthUserType } from "../lib/definitions";

const UserPage = () => {
  const data = useLoaderData() as AuthUserType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.authentified) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col">
        <header className="flex flex-col items-center gap-5 text-white bg-gray-800">
          <h1 className="text-4xl mt-2">TO DO THINGS</h1>
          <section className="pb-3">
            <UserNav />
          </section>
        </header>
        <main className="h-screen">
          <Outlet />
        </main>
        <footer className="flex justify-center text-white bg-gray-800">
          <p className="m-5">Merci d'avoir utilisé mon site !</p>
        </footer>
      </div>
    </>
  );
};

export default UserPage;
