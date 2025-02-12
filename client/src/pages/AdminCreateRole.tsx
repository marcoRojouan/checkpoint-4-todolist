import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { PriorityType } from "../lib/definitions";

const AdminCreateRole = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PriorityType>();

  const formSubmit: SubmitHandler<PriorityType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/role`,
        data,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Erreur lors de l'ajout du rôle");
    }
  };

  return (
    <main className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl text-gray-800">Créer des Rôles</h2>
      <section>
        <form
          className="flex justify-between bg-white shadow-md rounded-lg overflow-hidden px-2 py-3"
          onSubmit={handleSubmit(formSubmit)}
        >
          <label className="text-xl" htmlFor="label">
            Choisir le label du rôle
            <input
              type="text"
              className="mx-2 inset-shadow-sm inset-shadow-gray-700 rounded-sm"
              {...register("label", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
            />
            {errors.label && errors.label.type === "required" && (
              <span>Champ obligatoire</span>
            )}
            {errors.label && errors.label.type === "minLength" && (
              <span>Le champ doit contenir au minimum 3 caractères</span>
            )}
            {errors.label && errors.label.type === "maxLength" && (
              <span>Le champ doit contenir au maximum 20 caractères</span>
            )}
          </label>
          <button
            type="submit"
            className="w-32 h-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-0.5 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Ajouter
          </button>
        </form>
      </section>
    </main>
  );
};

export default AdminCreateRole;
