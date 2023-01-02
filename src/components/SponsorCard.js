import React from "react";
import { Link } from "react-router-dom";

export default function SponsorCard(props) {
  function getColor(role) {
    let color = "";
    switch (role) {
      case "Gold":
        color = "bg-yellow-200 hover:bg-yellow-300";
        break;
      case "Platinum":
        color = "bg-gray-300 hover:bg-gray-400";
        break;
      case "Silver":
        color = "bg-slate-200 hover:bg-slate-300";
        break;
      default:
        color = "bg-indigo-200 hover:bg-indigo-300";
    }
    return color;
  }

  let bgColor = getColor(props.sponsorLevel);

  return (
    <article>
      <Link to={"/sponsor/" + props.slug} key={props.slug}>
        <div className="flex flex-col rounded hover:bg-indigo-50">
          <span className="block h-64 relative leading-snug" key={props.index}>
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="w-full h-full object-contain absolute"
            />
          </span>
          <span className="block relative h-full flex justify-end items-end">
            <h3
              className={
                "title px-3 py-1 bg-opacity-80 text-gray-600 rounded " + bgColor
              }
            >
              {props.name + ": " + props.sponsorLevel + " ➜"}
            </h3>
          </span>
        </div>
      </Link>
    </article>
  );
}
