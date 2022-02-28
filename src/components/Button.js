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
    "max-w-sm flex items-center justify-center px-4 py-2 button rounded-md bg-indigo-600 hover:bg-indigo-700";
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
