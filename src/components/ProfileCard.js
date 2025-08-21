import React from "react";
import { Link } from "react-router-dom";

export default function ProfileCard(props) {
  return (
    <article>
      <Link to={"/" + props.path + "/" + props.slug} key={props.slug}>
        <span
          className="block h-80 relative rounded leading-snug shadow hover:bg-purple-50"
          key={props.index}
        >
          <div className="h-3/4 w-full overflow-hidden">
          <img
            src={props.imageUrl}
            alt={ props.imageAlt}
            className="w-full h-full object-cover"
          />
          </div>
          <div className="h-1/4 px-3 py-2 flex flex-col justify-center">
            <h3 className="text-lg title font-semibold break-words whitespace-normal text-center">{props.name}</h3>
              <h4 className="text-sm body break-words whitespace-normal text-center">{props.role}</h4>
            </div>
        </span>
      </Link>
    </article>
  );
}
