import React from "react";

export default function TwoUpContent(props) {
  return (
    <div>
      {props.direction === "textLeft" ? (
        <div className="container py-16 px-6 mx-auto flex flex-wrap md:flex-row items-center bg-white">
          <div className="py-6 px-6 flex flex-col w-full md:w-1/2">
            <h1 className="text-5xl cursive text-gray-700 title">
              {props.title}
            </h1>
            <div className="py-6 text-lg text-gray-700 body">{props.body}</div>
          </div>
          <div className="py-6 px-6 flex flex-col w-full md:w-1/2">
            <img
              className="object-contain h-96"
              src={props.imageSrc}
              alt={props.imageAlt}
            />
          </div>
        </div>
      ) : (
        <div className="container py-16 px-6 mx-auto flex flex-wrap-reverse md:flex-row items-center bg-white">
          <div className="py-6 px-6 flex flex-col w-full md:w-1/2">
            <img
              className="object-contain h-96"
              src={props.imageSrc}
              alt={props.imageAlt}
            />
          </div>
          <div className="py-6 px-6 flex flex-col w-full md:w-1/2">
            <h1 className="text-5xl cursive text-gray-700 title">
              {props.title}
            </h1>
            <div className="py-6 text-lg text-gray-700 body">{props.body}</div>
          </div>
        </div>
      )}
    </div>
  );
}
