import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { NewThingType, PriorityType } from "../lib/definitions";

const UserTaskForm = () => {
  const [priorityData, setPriorityData] = useState<PriorityType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/priority`,
          {
            withCredentials: true,
          },
        );
        setPriorityData(response.data);
      } catch (error) {
        toast.error("Impossible de charger les priorités");
      }
    };
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewThingType>();

  const newThingSubmit: SubmitHandler<NewThingType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/thing`,
        data,
        {
          withCredentials: true,
        },
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("veuillez réessayer plus tard");
    }
  };

  return (
    <div>
      <form
        className="flex justify-between bg-white shadow-md rounded-lg overflow-hidden px-2 py-3"
        onSubmit={handleSubmit(newThingSubmit)}
      >
        <label className="text-xl" htmlFor="content">
          Choisir le contenu de la tâche
          <input
            type="text"
            className="mx-2 inset-shadow-sm inset-shadow-gray-700 rounded-sm w-3xl"
            {...register("content", {
              required: true,
              minLength: 3,
              maxLength: 200,
            })}
          />
          {errors.content && errors.content.type === "required" && (
            <span>Champ obligatoire</span>
          )}
          {errors.content && errors.content.type === "minLength" && (
            <span>Le champ doit contenir au minimum 3 caractères</span>
          )}
          {errors.content && errors.content.type === "maxLength" && (
            <span>Le champ doit contenir au maximum 200 caractères</span>
          )}
        </label>

        <label htmlFor="priority_id">
          <select {...register("priority_id")}>
            {priorityData?.map((element) => (
              <option key={element.id} value={element.id}>
                {element.label}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="w-32 h-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-0.5 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default UserTaskForm;
