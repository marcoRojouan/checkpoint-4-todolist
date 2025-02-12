import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="flex justify-center gap-8">
      <Link to="/admin/utilisateurs" className="text-xl focus:text-gray-400">
        {" "}
        Utilisateurs{" "}
      </Link>
      <Link to="/admin/taches" className="text-xl focus:text-gray-400">
        {" "}
        Taches{" "}
      </Link>
      <Link to="/admin/creer-priorités" className="text-xl focus:text-gray-400">
        {" "}
        Priorités{" "}
      </Link>
      <Link to="/admin/creer-roles" className="text-xl focus:text-gray-400">
        {" "}
        Rôles{" "}
      </Link>
    </nav>
  );
};

export default AdminNav;
