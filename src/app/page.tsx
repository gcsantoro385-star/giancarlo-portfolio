import Navbar from "./components/Navbar";
import Background from "./components/Background";

export default function Home() {
  return (
    <Background image="/background-home.png">
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-bold text-blue-400 mb-3">Giancarlo Santoro</h1>
        <p className="text-lg text-gray-200 max-w-xl">
          Aspiring <span className="text-blue-300">Network Engineer</span> & IT Intern — 
          passionate about designing, securing, and optimizing network systems.
        </p>
      </section>
    </Background>
  );
}
