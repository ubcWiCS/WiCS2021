import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import LoadingSpinner from "./LoadingSpinner.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      id,
      slug,
      mainImage{
        ...,
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

  if (!singlePost) return <LoadingSpinner></LoadingSpinner>;

  return (
    <main className="bg-white min-h-screen p-12">
      <article className="containershadow-lg mx-auto bg-white-100 rounded-lg px-20">
        <header className="relative flex flex-col justify-center">
          <div className="flex justify-center max-h-96">
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="flex justify-center w-full h-auto object-cover rounded"
            />
          </div>
          <div className="p-12">
            <h1 className="text-5xl flex justify-center cursive text-gray-600 title">
              {singlePost.title}
            </h1>
          </div>
        </header>
        <div className="absolute h-full w-full flex items-center justify-center p-8"></div>
        <div className="px-2 pb-20 pt-2 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="xvhe4elt"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
