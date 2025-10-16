import Navbar from "../components/Navbar";
import Background from "../components/Background";

export default function About() {
  return (
    <Background image="/background-about.jpg">
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
        <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
          Hello! I'm <span className="text-blue-300">Giancarlo Santoro</span>, 
          a dedicated IT enthusiast pursuing a career in 
          <strong> network administration and engineering</strong>.
          I enjoy building reliable, secure network infrastructures and 
          working hands-on with routers, switches, and diagnostics.
          <br /><br />
          My focus now is on gaining practical experience as a 
          <strong> networking intern</strong>, applying technical skills 
          and solving real-world challenges.
        </p>
      </section>
    </Background>
  );
}

