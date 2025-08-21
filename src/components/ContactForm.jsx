import React, { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mqalvoyp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2">
      <input
        type="email"
        placeholder="Your Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border rounded-md bg-wicsbg-pink bg-opacity-50 p-3"
      />
      <textarea
        placeholder="Your Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows="4"
        className="border rounded-md bg-wicsbg-pink bg-opacity-50 p-3"
      />
      <button
        type="submit"
        className="bg-wicsPurple text-white font-semibold py-2 px-6 rounded-lg shadow hover:opacity-90"
      >
        SEND MESSAGE
      </button>

      {status === "success" && (
        <p className="text-green-600">Message sent! 🎉</p>
      )}
      {status === "error" && (
        <p className="text-red-600">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
