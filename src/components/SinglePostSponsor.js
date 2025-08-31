import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import LoadingSpinner from "./LoadingSpinner.js";

export default function SinglePostSponsor() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          name,
          role,
          id,
          sponsorLevel,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <LoadingSpinner />;

  return (
    <main className="flex flex-col min-h-screen font-poppins">
      {/* Gradient section */}
      <section
        className="flex flex-col justify-start flex-grow"
        style={{
          background:
            "linear-gradient(103.03deg, #FFEBF7 9.32%, #D8DCFF 101.95%)",
        }}
      >
        <div className="container rounded-lg mx-auto p-10 transform duration-500 flex flex-col">
          <img
            className="w-48 md:w-64 p-4 h-auto object-contain rounded-lg"
            src={singlePost.mainImage.asset.url}
            alt={singlePost.name}
          />

          <div className="px-4 mt-4">
            <div className="text-3xl md:text-4xl font-bold text-gray-800">
              {singlePost.name}
            </div>
            <div className="text-gray-700 text-2xl pt-2">
              {"Sponsorship level: " + singlePost.sponsorLevel}
            </div>
            <div className="mt-4 text-gray-600 text-base">
              <BlockContent
                blocks={singlePost.body}
                projectId="xvhe4elt"
                dataset="production"
              />
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/sponsors"
              className="inline-flex items-center justify-center rounded-full
            bg-wicsPurple text-white px-10 py-3 font-poppins shadow-md
            hover:opacity-90 hover:shadow-lg focus:outline-none
            focus:ring-2 focus:ring-wicsPurple/40 transition"
            >
              BACK TO SPONSORS
            </Link>
          </div>
        </div>
      </section>

      {/* White footer */}
      <section className="w-full bg-white py-6">
        <div className="text-center text-sm md:text-base">
          UBC Women in Computer Science 2025
        </div>
      </section>
    </main>
  );
}
