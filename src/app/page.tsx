import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse("Thinking...");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch {
      setResponse("Error connecting to AI.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      {/* 👇 PROFILE PHOTO */}
      <div className="mb-6">
        <Image
          src="/giancarlo.jpg"
          alt="Giancarlo Santoro"
          width={160}
          height={160}
          className="rounded-full border-4 border-blue-400 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 👇 NAME AND TITLE */}
      <h1 className="text-4xl font-bold mb-4 text-blue-400 text-center">
        Giancarlo Santoro
      </h1>
      <p className="text-lg mb-6 text-gray-300 text-center">
        Aspiring Network Engineer & IT Intern
      </p>

      {/* 👇 CHAT UI */}
      <div className="max-w-xl w-full bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Chat with my AI Assistant 💬</h2>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me about networking, my skills, or my projects..."
            className="flex-grow p-3 rounded-xl bg-gray-700 text-white outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            Send
          </button>
        </form>

        <div className="bg-gray-900 p-4 rounded-xl min-h-[100px]">
          {response && <p>{response}</p>}
        </div>
      </div>
    </main>
  );
}

