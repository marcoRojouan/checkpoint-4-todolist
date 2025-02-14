import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DoneThingCard from "../components/DoneThingCard";
import type { ThingType } from "../lib/definitions";

const UserDonePage = () => {
  const [doneThingData, setDoneThingData] = useState<ThingType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/thing/done`,
          {
            withCredentials: true,
          },
        );
        setDoneThingData(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données des tâches accomplies, veuillez essayer ultérieurement.",
        );
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-10 flex flex-row gap-10 items-center bg-white shadow-md rounded-lg overflow-hidden">
      {doneThingData?.map((element) => (
        <DoneThingCard key={element.id} thingData={element} />
      ))}
    </div>
  );
};

export default UserDonePage;
