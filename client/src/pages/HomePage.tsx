import Register from "../components/Register";
import SignIn from "../components/SignIn";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center gap-6">
      <Register />
      <SignIn />
    </main>
  );
};

export default HomePage;
