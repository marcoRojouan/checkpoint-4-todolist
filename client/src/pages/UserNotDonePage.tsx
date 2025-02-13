import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ThingCard from "../components/ThingCard";
import UserTaskForm from "../components/UserTaskForm";
import type { ThingType } from "../lib/definitions";

const UserNotDonePage = () => {
  const [toDoThingData, setTodoThingData] = useState<ThingType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/thing/notdone`,
          {
            withCredentials: true,
          },
        );
        toDoThingData;
        setTodoThingData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des recettes, veuillez essayer ultérieurement.",
        );
      }
    };
    fetchData();
  }, [toDoThingData]);

  const handleClick = async (thingId: number) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/thing/${thingId}`,
      );

      setTodoThingData((previousThingData) =>
        previousThingData.filter((thing) => thing.id !== thingId),
      );

      toast.success(response.data.message);
    } catch (err) {
      toast.error("oups problem");
    }
  };

  return (
    <div>
      <section>
        <UserTaskForm />
      </section>
      <section className="pt-10 flex flex-row gap-10 items-center bg-white shadow-md rounded-lg overflow-hidden">
        {toDoThingData?.map((element) => (
          <ThingCard
            key={element.id}
            thingData={element}
            handleClick={handleClick}
          />
        ))}
      </section>
    </div>
  );
};

export default UserNotDonePage;
