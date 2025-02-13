import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/images/oui404.png" alt="" className="w-5xl" />
      <h1 className="text-5xl">ERREUR 404</h1>
      <p>ATTENTION TU T'ES TROMPÉ DE LIEN</p>
      <p>MAIS N'AI PAS PEUR JE SUIS BIENVEILLANT</p>
      <Link
        className="text-blue-800 underline"
        to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      >
        Retourne sur le droit chemin
      </Link>
    </div>
  );
};

export default Error404;
