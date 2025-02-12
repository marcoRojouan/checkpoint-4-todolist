import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminUser from "../components/AdminUser";
import type { UserType } from "../lib/definitions";

const AdminUserList = () => {
  const [userData, setUserData] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/`,
        );
        setUserData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des recettes, veuillez essayer ultérieurement.",
        );
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (userPseudo: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/user/${userPseudo}`);

      setUserData((previousUserData) =>
        previousUserData.filter((user) => user.pseudo !== userPseudo),
      );

      toast.success("utilisateur supprimé avec succès");
    } catch (err) {
      toast.error(
        "Erreur lors de la suppression, veuillez réesayer plus tard.",
      );
    }
  };
  return (
    <main className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl text-gray-800">Gérer les Utilisateurs</h2>
      <section className="bg-white shadow-md rounded-lg overflow-hidden">
        <article className="bg-white divide-y divide-gray-200">
          {userData?.map((element: UserType) => (
            <AdminUser
              key={element.pseudo}
              handleDelete={handleDelete}
              userData={element}
            />
          ))}
        </article>
      </section>
    </main>
  );
};

export default AdminUserList;
