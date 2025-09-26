// -----------------------------------------------------------
// ProfileCard.jsx — mobile-friendly sizing + accessibility
import React from "react";
import { Link } from "react-router-dom";

export function ProfileCard(props) {
  return (
    <article className="w-full sm:max-w-sm\" aria-label={`${props.name} ${props.role ? "- " + props.role : ""}`}>
      <Link to={`/${props.path}/${props.slug}`}>
        <span
          className="block h-72 sm:h-80 relative rounded-xl overflow-hidden leading-snug shadow transition hover:shadow-lg hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-wicsPurple/40"
        >
          <div className="h-3/4 w-full overflow-hidden">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="h-1/4 px-3 py-2 flex flex-col justify-center">
            <h3 className="text-base sm:text-lg title font-semibold break-words whitespace-normal text-center">
              {props.name}
            </h3>
            {props.role && (
              <h4 className="text-sm body break-words whitespace-normal text-center opacity-80">
                {props.role}
              </h4>
            )}
          </div>
        </span>
      </Link>
    </article>
  );
}

export default ProfileCard;
