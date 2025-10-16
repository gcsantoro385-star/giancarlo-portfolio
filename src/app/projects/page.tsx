import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white p-6">
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">Digital Circuits</h3>
            <p className="text-gray-200">
              My coursework in digital circuits provided a strong foundation in boolean algebra, 
              logic gates, and the architecture of computing systems (e.g., combinational and sequential logic). 
              This low-level hardware understanding gives me a unique perspective on network protocols and data transmission efficiency.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">Web Development</h3>
            <p className="text-gray-200">
              I'm now actively translating this analytical, systems-thinking approach to the software 
              domain through web development. I am eager to apply this hardware-to-software bridging 
              skill set to build and manage robust IT networking and web infrastructures.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
