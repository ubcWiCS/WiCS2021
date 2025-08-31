import React from "react";
import { Link } from "react-router-dom";

export default function SponsorCard(props) {
  return (
    <article className="w-[200px] mx-auto">
      {/* Main sponsor card */}
      <Link to={"/sponsor/" + props.slug}>
        <div
          className="relative flex items-center h-full w-full border-4 p-4"
          style={{ borderColor: props.color, aspectRatio: "5 / 6" }}
        >
          {/* Image container */}
          <div className="relative w-full h-full">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="w-full h-full object-contain -mt-4"
            />
            {/* Company name overlay */}
            <h3 className="absolute bottom-2 w-full text-center px-2 py-1 bg-white bg-opacity-80 text-gray-600 rounded title">
              {props.name}
            </h3>
          </div>
        </div>
      </Link>

      {/* Previous events button */}
      {props.hasEvent && (
        <div className="w-full mt-3">
          <Link to={"/sponsor-events/" + props.slug}>
            <div className="flex justify-between items-center px-3 py-2 rounded hover:text-black">
              <div
                className="flex-1 text-center text-gray-600"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                }}
              >
                <span className="block">See previous</span>
                <span className="block">{props.name} events</span>
              </div>

              {/* Arrow on the right */}
              <div
                className="ml-2"
                style={{ fontSize: "30px", lineHeight: "1" }}
              >
                {">"}
              </div>
            </div>
          </Link>
        </div>
      )}
    </article>
  );
}
