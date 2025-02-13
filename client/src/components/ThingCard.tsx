import type { ThingType } from "../lib/definitions";

const ThingCard = ({
  thingData,
  handleClick,
}: {
  thingData: Omit<ThingType, "pseudo">;
  handleClick: (value: number) => void;
}) => {
  const { id, content, label } = thingData;

  return (
    <div className="flex flex-col items-center justify-around gap-5 p-5 m-5 bg-white shadow-md rounded-lg overflow-hidden">
      <p className="text-center text-3xl">{content}</p>
      <p className="text-center text-xl text-sky-600">{label}</p>
      <button
        type="button"
        className="w-40 h-8 bg-green-500 hover:bg-green-400 text-white font-bold py-0.5 px-2 border-b-4 border-green-700 hover:border-green-500 rounded"
        onClick={() => handleClick(id)}
      >
        Check ✓
      </button>
    </div>
  );
};

export default ThingCard;
