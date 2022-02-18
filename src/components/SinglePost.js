import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

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
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-white min-h-screen p-12">
      <article className="containershadow-lg mx-auto bg-white-100 rounded-lg px-20">
        <header className="relative flex flex-col justify-center">
          <div className="flex justify-center">
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="flex justify-center w-full h-2/5 object-cover rounded"
              style={{ height: "400px" }}
            />
          </div>
          <div className="p-12">
            <h1 className="cursive flex justify-center text-base text-2xl lg:text-3xl mb-4">
              {singlePost.title}
            </h1>
            <div className="flex justify-center text-gray-800">
              <img
                src={urlFor(singlePost.authorImage).url()}
                alt={singlePost.name}
                className="w-10 h-10 rounded-full"
              />
              <p className="cursive flex items-center pl-2 text-sm">
                {singlePost.name}
              </p>
            </div>
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
