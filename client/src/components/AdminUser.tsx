import type { UserType } from "../lib/definitions";

const AdminUser = ({
  userData,
  handleDelete,
}: { userData: UserType; handleDelete: (value: string) => void }) => {
  return (
    <div className="flex py-3 px-2 justify-between">
      <p className="text-xl font-medium text-gray-900">{userData.pseudo}</p>
      <p className=" text-xl font-medium text-gray-900">{userData.label}</p>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded"
        onClick={() => handleDelete(userData.pseudo)}
      >
        {" "}
        Delete
      </button>
    </div>
  );
};

export default AdminUser;
