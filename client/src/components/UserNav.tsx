import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <nav className="flex justify-center gap-8">
      <Link
        to="/to-do-liste/mes-taches"
        className="text-xl focus:text-gray-400"
      >
        {" "}
        Mes Tâches{" "}
      </Link>
      <Link
        to="/to-do-liste/accomplies"
        className="text-xl focus:text-gray-400"
      >
        {" "}
        Accomplies{" "}
      </Link>
    </nav>
  );
};

export default UserNav;
