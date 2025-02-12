import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserType } from "../lib/definitions";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserType>();

  const formSubmit: SubmitHandler<UserType> = async (data) => {
    const { confirmPassword, ...user } = data;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/`,
        user,
      );

      toast.success(response.data.message);
    } catch (err) {
      toast.error("La création de l'utilisateur a échoué");
    }
  };

  return (
    <section className="shadow-md shadow-gray-600">
      <form
        className="h-56 w-80 flex flex-col items-center gap-3"
        onSubmit={handleSubmit(formSubmit)}
      >
        <label className="flex flex-col gap-0.5" htmlFor="pseudo">
          Pseudo
          <input
            className="inset-shadow-sm inset-shadow-gray-700 rounded-sm"
            type="text"
            {...register("pseudo", {
              required: "Ce champ est obligatoire",
              minLength: {
                value: 2,
                message: "Le pseudo doit contenir au moins 2 caratères",
              },
              maxLength: {
                value: 20,
                message: "Le pseudo doit contenir moins de 20 caractères",
              },
            })}
          />
          {errors.pseudo && <span>{errors.pseudo.message}</span>}
        </label>
        <label className="flex flex-col gap-0.5" htmlFor="password">
          Mot de passe
          <input
            className="inset-shadow-sm inset-shadow-gray-700 rounded-sm"
            type="password"
            {...register("password", {
              required: "Ce champ est obligatoire",
              minLength: {
                value: 12,
                message: "Le mot de passe doit contenir au moins 12 caratères",
              },
              maxLength: {
                value: 20,
                message: "Le mot de passe doit contenir moins de 20 caractères",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <label className="flex flex-col gap-0.5" htmlFor="confirmPassword">
          Confirmer le mot de passe
          <input
            className="inset-shadow-sm inset-shadow-gray-700 rounded-sm"
            type="password"
            {...register("confirmPassword", {
              required: "Ce champ est obligatoire",
              minLength: {
                value: 12,
                message: "Le mot de passe doit contenir au moins 12 caratères",
              },
              maxLength: {
                value: 20,
                message: "Le mot de passe doit contenir moins de 20 caractères",
              },
              validate: (value: string) => {
                if (watch("password") !== value) {
                  return "Le mot de passe saisit est différent";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </label>
        <button
          className="w-32 h-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-0.5 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          type="submit"
        >
          {" "}
          Valider{" "}
        </button>
      </form>
    </section>
  );
};

export default Register;
