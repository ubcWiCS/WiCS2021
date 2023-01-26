import React from "react";
import { NavLink } from "react-router-dom";

/* Reusable Button Component
**=== Props: ===**
type: external (linking outside of website) or local (linking within website)
link: url or path 
text: button text 
width: relative width of button*/

export default function Button(props) {
  let buttonStyle =
    "bg-gray-300 bg-gradient-to-br nav hover:from-pink-200 hover:via-indigo-200 hover:to-indigo-400 text-gray-600 hover:text-white px-3 py-2 rounded-md text-sm";

  return (
    <div className="rounded-md whitespace-nowrap">
      {props.type === "external" ? (
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className={buttonStyle}
        >
          {props.text}
        </a>
      ) : (
        <NavLink to={props.link} className={buttonStyle}>
          {props.text}
        </NavLink>
      )}
    </div>
  );
}
