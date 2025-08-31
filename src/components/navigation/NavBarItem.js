import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarItem({ text, path }) {
  return (
<NavLink
  to={path}
  className="bg-gradient-to-br hover:text-black px-3 py-2 rounded-md text-sm"
  exact
  activeClassName="font-bold"
>
  {text}
</NavLink>

  );
}
