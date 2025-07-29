import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source).auto("format").url();
}

export default function ValueList() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "values"] | order(pageOrder asc) {
          _id,
          title,
          description,
          "logo": logo.asset->url
        }`
      )
      .then((data) => setValues(data))
      .catch(console.error);
  }, []);

  return (
    <div className="value-list space-y-5">
      {values.map(({ _id, logo, title, description }) => (
        <div key={_id} className="flex flex-col items-center text-center">
          {logo && (
            <img
              src={urlFor(logo)}
              alt={title}
              className="w-13 h-13 object-contain mb-2"
            />
          )}
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-base font-light max-w-l">{description}</p>
        </div>
      ))}
    </div>
  );
}
