import React from "react";
import { Link } from "react-router-dom";

export default function SponsorCard(props) {
  return (
    <article>
      <Link to={"/sponsor/" + props.slug} key={props.slug}>
        <div classname="flex flex-col">
          <span className="block h-64 relative leading-snug" key={props.index}>
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="w-full h-full object-contain absolute"
            />
          </span>
          <span className="block relative h-full flex justify-end items-end">
            <h3 className="text-lg font-bold px-3 py-1 bg-yellow-100 bg-opacity-80 text-gray-600 rounded">
              {props.role}
            </h3>
          </span>
        </div>
      </Link>
    </article>
  );
}
