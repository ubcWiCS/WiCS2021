import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import LoadingSpinner from "./LoadingSpinner.js";
import ActionButton from "./ActionButton.js";

export default function SinglePostSponsor() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // NOTE: This keeps the query, but you can parametrize it if desired
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
      .then((data) => setSinglePost(data?.[0] ?? null))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <LoadingSpinner />;

  const sponsorName = singlePost?.name ?? singlePost?.title ?? "Sponsor";
  const sponsorImg = singlePost?.mainImage?.asset?.url;

  return (
    <main className="flex min-h-screen flex-col font-poppins text-gray-800">
      {/* Gradient header/hero section */}
      <section
        className="w-full"
        style={{
          background:
            "linear-gradient(103.03deg, #FFEBF7 9.32%, #D8DCFF 101.95%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Layout changes from the mobile version (stacked layout) to two-column (when md+) */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:items-start gap-6 sm:gap-8 lg:gap-12">
            {/* Image */}
            <div className="md:col-span-5 flex md:block justify-center">
              {sponsorImg && (
                <img
                  className="w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain rounded-lg bg-white/40 p-3"
                  src={sponsorImg}
                  alt={`${sponsorName} logo`}
                  loading="lazy"
                />
              )}
            </div>

            {/* Text content */}
            <div className="md:col-span-7">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                {sponsorName}
              </h1>

              {singlePost?.sponsorLevel && (
                <p className="mt-2 text-base sm:text-lg text-gray-700">
                  <span className="font-medium">Sponsorship level:</span>{" "}
                  {singlePost.sponsorLevel}
                </p>
              )}

              <div className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-gray-700">
                <BlockContent
                  blocks={singlePost.body}
                  projectId="xvhe4elt"
                  dataset="production"
                />
              </div>

              <div className="mt-6 sm:mt-8">
                <ActionButton to="/sponsors" text="BACK TO SPONSORS" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="w-full bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm md:text-base text-gray-600">
          UBC Women in Computer Science 2025
        </div>
      </section>
    </main>
  );
}
