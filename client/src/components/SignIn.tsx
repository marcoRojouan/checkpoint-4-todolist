import axios from "axios";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { UserType } from "../lib/definitions";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const submitLogin: SubmitHandler<UserType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        data,
        {
          withCredentials: true,
        },
      );
      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/to-do-liste");
      }, 1000);
    } catch (err) {
      toast.error("Erreur dans la connexion");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="shadow-md shadow-gray-600">
        <form
          className="h-40 w-80 flex flex-col items-center gap-3"
          onSubmit={handleSubmit(submitLogin)}
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
                  message:
                    "Le mot de passe doit contenir au moins 12 caratères",
                },
                maxLength: {
                  value: 20,
                  message:
                    "Le mot de passe doit contenir moins de 20 caractères",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </label>
          <button
            className="w-40 h-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="submit"
          >
            Me Connecter
          </button>
        </form>
      </section>
    </>
  );
};

export default SignIn;
