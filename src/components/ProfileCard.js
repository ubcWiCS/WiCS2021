import React from "react";
import { Link } from "react-router-dom";

export default function ProfileCard(props) {
  return (
    <article>
      <Link to={"/" + props.path + "/" + props.slug} key={props.slug}>
        <span
          className="block h-80 relative rounded shadow leading-snug bg-indigo-50"
          key={props.index}
        >
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="w-full h-3/4 rounded rounded-b-none object-cover absolute"
          />
          <span className="block relative h-full flex justify-start items-end pr-4 pb-4">
            <div className="flex flex-col items-start">
              <h3 className="text-lg title px-3">{props.name}</h3>
              <h4 className="text-sm body px-3">{props.role}</h4>
            </div>
          </span>
        </span>
      </Link>
    </article>
  );
}
