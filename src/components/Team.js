import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

export default function Team() {
  //Get profile data from Sanity Studio
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "profile" && profileType == "executive"]{
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

  //Render profile collection
  return (
    <main className="bg-white min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-gray-700 title">
          Executive Team
        </h1>
        <h2 className="text-lg body flex justify-center mb-12">
          Meet our executive team!
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {postData &&
            postData.map((profile, index) => (
              <article>
                <Link
                  to={"/profile/" + profile.slug.current}
                  key={profile.slug.current}
                >
                  <span
                    className="block h-80 relative rounded shadow leading-snug bg-indigo-50"
                    key={index}
                  >
                    <img
                      src={profile.mainImage.asset.url}
                      alt={profile.mainImage.alt}
                      className="w-full h-3/4 rounded rounded-b-none object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-start items-end pr-4 pb-4">
                      <div className="flex flex-col items-start">
                        <h3 className="text-lg font-bold px-3 text-gray-600">
                          {profile.name}
                        </h3>
                        <h4 className="text-sm font-normal px-3 text-gray-500">
                          {profile.role}
                        </h4>
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
