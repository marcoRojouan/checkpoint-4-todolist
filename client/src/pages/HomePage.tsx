import Register from "../components/Register";
import SignIn from "../components/SignIn";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="flex flex-col items-center gap-5 text-white bg-gray-800">
        <h1 className="text-4xl m-5">TO DO THINGS</h1>
      </header>
      <main className="flex flex-col items-center gap-16">
        <p className="text-2xl">
          Bienvenu sur TO DO THINGS le site de to-do-list le plus basique
          possible
        </p>
        <p>CRÉER TON COMPTE OU CONNECTE TOI POUR ACCEDER AU SITE </p>
        <section className="flex flex-row justify-evenly gap-24">
          <Register />
          <SignIn />
        </section>
      </main>
      <footer className="flex justify-center text-white bg-gray-800">
        <p className="m-5">Merci d'avoir utilisé mon site !</p>
      </footer>
    </div>
  );
};

export default HomePage;
