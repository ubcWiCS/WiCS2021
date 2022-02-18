import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner.js";

export default function Sponsors() {
  //Get profile data from Sanity Studio
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "profile" && profileType == "sponsor"]{
      name,
      role,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (!postData) return <LoadingSpinner></LoadingSpinner>;

  //Render profile collection
  return (
    <main className="bg-white min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center title">Sponsors</h1>
        <h2 className="text-lg body flex justify-center mb-12">
          Say Hello to our sponsors!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
          {postData &&
            postData.map((profile, index) => (
              <article>
                <Link
                  to={"/sponsor/" + profile.slug.current}
                  key={profile.slug.current}
                >
                  <div classname="flex flex-col">
                    <span
                      className="block h-64 relative leading-snug"
                      key={index}
                    >
                      <img
                        src={profile.mainImage.asset.url}
                        alt={profile.mainImage.alt}
                        className="w-full h-full object-contain absolute"
                      />
                    </span>
                    <span className="block relative h-full flex justify-end items-end">
                      <h3 className="text-lg font-bold px-3 py-1 bg-yellow-100 bg-opacity-80 text-gray-600 rounded">
                        {profile.role}
                      </h3>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
