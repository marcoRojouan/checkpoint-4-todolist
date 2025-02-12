import type { ThingType } from "../lib/definitions";

const AdminThingElement = ({
  thingData,
  handleDelete,
}: { thingData: ThingType; handleDelete: (value: number) => void }) => {
  return (
    <div className="flex py-3 px-2 justify-between">
      <p className="text-xl font-medium text-gray-900">{thingData.content}</p>
      <p className="text-xl font-medium text-gray-900">{thingData.pseudo}</p>
      <p className="text-xl font-medium text-gray-900">
        {thingData.done === 0 ? "A faire" : "Accomplie"}
      </p>
      <p className="text-xl font-medium text-gray-900">{thingData.label}</p>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded"
        onClick={() => handleDelete(thingData.id)}
      >
        {" "}
        Delete
      </button>
    </div>
  );
};

export default AdminThingElement;
