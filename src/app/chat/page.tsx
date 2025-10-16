"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Chat() {
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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-4">Chat with my AI Assistant 💬</h2>
        <p className="text-gray-200 mb-6 max-w-md">
          Ask about my IT experience, skills, or projects!
        </p>

        <div className="max-w-xl w-full bg-gray-800 bg-opacity-70 rounded-2xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-3 rounded-xl bg-gray-700 text-white outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl"
            >
              Send
            </button>
          </form>

          <div className="bg-gray-900 bg-opacity-70 p-4 rounded-xl min-h-[100px]">
            {response && <p>{response}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}
