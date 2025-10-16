import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white p-6">
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">Network Topology Simulator</h3>
            <p className="text-gray-200">
              Built a simulated LAN/WAN topology using Cisco Packet Tracer with VLANs and OSPF routing.
              Focused on redundancy and scalability for enterprise networking.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">Network Health Monitor</h3>
            <p className="text-gray-200">
              Developed a Python tool to ping and log device uptime, alerting via email on failure.
              Integrated SNMP for performance metrics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
