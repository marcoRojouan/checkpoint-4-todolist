import type { ThingType } from "../lib/definitions";

const DoneThingCard = ({ thingData }: { thingData: ThingType }) => {
  const { content, label } = thingData;

  return (
    <div className="flex flex-col items-center justify-around gap-5 p-5 m-5 bg-white shadow-md rounded-lg overflow-hidden">
      <p className="text-center text-3xl">{content}</p>
      <p className="text-center text-xl text-sky-600">{label}</p>
    </div>
  );
};

export default DoneThingCard;
