"use client";

import Navbar from "../components/Navbar";
import Background from "../components/Background";

export default function Projects() {
  return (
    <Background image="/background-projects.png">
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">Digital Circuits</h3>
            <p className="text-gray-200">
              Designed and simulated digital circuits using breadboards and constructed numerous projects with logic gates.
              Gained hands-on experience in circuit design and troubleshooting, which helped broaden my interest in hands-on IT work.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">Web Design Courses</h3>
            <p className="text-gray-200">
              Completed various projects in web design courses, focusing on HTML, CSS, and JavaScript.
              Developed a strong foundation in responsive design and user experience principles, which can help me
              grasp the front-end aspects of IT projects and network maintenance.
            </p>
          </div>
        </div>
      </section>
    </Background>
  );
}
