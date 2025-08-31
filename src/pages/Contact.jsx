import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import ContactForm from "../components/ContactForm";
import contactBanner from "../img/contactus_banner.png";
import SocialMedia from "../components/SocialMedia";

export default function Contact() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contactUs"] | order(pageOrder asc){
          title,
          body,
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

  return (
    <main className="bg-white ">
        <div className="relative w-full h-64 md:h-96">
    <img
      src={contactBanner}
      alt="Contact Us Banner"
      className="w-full h-full object-cover"
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-5xl md:text-5xl font-poppins text-wicsPurple font-bold transform -translate-y-6 md:-translate-y-10">
      Contact Us
    </h1>
  </div>
  <div className="p-12 md:p-20">

  
      {postData &&
        postData.map((post, index) => (
          <section
            key={index}
            className="max-w-6xl mx-auto font-poppins transform md:-translate-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left: Sanity Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">{post.title}</h2>
                <div className="text-gray-700 leading-relaxed">
                  <BlockContent
                    blocks={post.body}
                    projectId="xvhe4elt"
                    dataset="production"
                  />
                </div>
                <div className="flex flex-row mt-3">
          <SocialMedia url="https://www.linkedin.com/company/ubcwics/" width="48px" height="48px" color="#B089DD" />
          <SocialMedia url="https://www.instagram.com/ubcwics/" width="48px" height="48px"color="#B089DD" />
          <SocialMedia url="https://www.facebook.com/ubcwics/" width="48px" height="48px" color="#B089DD"/>
          <SocialMedia url="https://discord.gg/jvqdhrCk3z" width="48px" height="48px" color="#B089DD" />
        </div>
              </div>
  
              {/* Right: Contact Form */}
              <div className="rounded-lg p-6">
                <ContactForm />
              </div>
            </div>
          </section>
        ))}
            </div>
    </main>

  );
        }  