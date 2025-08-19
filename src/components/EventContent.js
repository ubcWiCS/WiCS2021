import React from "react";

import Gallery from "../components/Gallery";

export default function EventContent(props) {
  return (
    <div>
      {props.direction === "textLeft" ? (
        <div className={`container py-16 px-6 mx-auto flex flex-wrap md:flex-row items-center ${
          props.index === 0 || props.index === 2 ? "bg-transparent" : "bg-white"
        }`}>
          <div className="py-6 px-6 flex flex-col w-full md:w-1/2">
            <h1 className="text-5xl cursive text-gray-700 title">
              {props.title}
            </h1>
            <div className="py-2 text-md text-gray-700">{props.date}</div>
            <div className="py-3 text-lg text-gray-700 body">{props.body}</div>
          </div>
          <div className="py-6 px-6 flex flex-col w-full md:w-1/2">
            <Gallery images={props.images} />
          </div>
        </div>
      ) : (
        <div className={`container py-16 px-6 mx-auto flex flex-wrap md:flex-row items-center ${
          props.index === 0 || props.index === 2 ? "bg-transparent" : "bg-white"
        }`}>
          <div className="py-6 px-6 flex flex-col w-full md:w-1/2">
            <Gallery images={props.images} />
          </div>
          <div className="py-6 px-6 flex flex-col w-full md:w-1/2">
            <h1 className="text-5xl cursive text-gray-700 title">
              {props.title}
            </h1>
            <div className="py-2 text-md text-gray-700">{props.date}</div>
            <div className="py-3 text-lg text-gray-700 body">{props.body}</div>
          </div>
        </div>
      )}
    </div>
  );
}
