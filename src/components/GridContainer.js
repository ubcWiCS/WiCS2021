import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner.js";

export default function GridContainer(props) {
  //Get profile data from Sanity Studio
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(props.queryString)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (!postData) return <LoadingSpinner></LoadingSpinner>;

  //Render profile collection
  return (
    <main className="bg-white min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-gray-700 title">
          {props.title}
        </h1>
        <h2 className="text-lg body flex justify-center mb-12">
          {props.subTitle}
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {postData &&
            postData.map((object, index) => (
              <article>
                <Link
                  to={"/" + props.path + "/" + object.slug.current}
                  key={object.slug.current}
                >
                  <span
                    className="block h-80 relative rounded shadow leading-snug bg-indigo-50"
                    key={index}
                  >
                    <img
                      src={object.mainImage.asset.url}
                      alt={object.mainImage.alt}
                      className="w-full h-3/4 rounded rounded-b-none object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-start items-end pr-4 pb-4">
                      <div className="flex flex-col items-start">
                        <h3 className="text-lg title px-3">{object.name}</h3>
                        <h4 className="text-sm body px-3">{object.role}</h4>
                      </div>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
