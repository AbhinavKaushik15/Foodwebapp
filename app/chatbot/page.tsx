"use client";
import React, { useEffect, useState } from "react";

const ChatbotPage = () => {
  useEffect(() => {
    document.title = "AI Chatbot | Fofood";
  }, []);

  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { role: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffffffe5]  p-6 font-['fredoka'] font-[900]">
      <div className="w-full max-w-2xl rounded-2xl shadow-lg p-6 flex flex-col text-black border border-zinc-300">
        <h1 className="text-2xl font-bold text-center mb-4">
          Fofood AI Chatbot
        </h1>

        {/* Chat Window */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl w-fit ${
                msg.role === "user"
                  ? "bg-[#DB6885] ml-auto text-right"
                  : "bg-zinc-300 mr-auto text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <div className="text-gray-400">Thinking...</div>}
        </div>

        {/* Input Box */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 p-3 rounded-xl border border-zinc-400 hover:border-[#DB6885] focus:outline-[#DB6885]"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-3 rounded-xl text-white border border-[#DB6885] bg-[#DB6885] hover:bg-white hover:text-[#DB6885]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
