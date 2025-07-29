import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarItem({ text, path }) {
  return (
<NavLink
  to={path}
  className="bg-gradient-to-br hover:from-pink-200 hover:via-indigo-200 hover:to-indigo-200 hover:text-white px-3 py-2 rounded-md text-sm"
  exact
  activeClassName="font-bold"
>
  {text}
</NavLink>

  );
}
