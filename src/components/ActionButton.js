import React from "react";
import { Link } from "react-router-dom";

export default function ButtonLink({ to = "/", text }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-full
      bg-wicsPurple text-white px-10 py-3 font-poppins shadow-md
      hover:opacity-90 hover:shadow-lg focus:outline-none
      focus:ring-2 focus:ring-wicsPurple/40 transition"
    >
      {text}
    </Link>
  );
}
