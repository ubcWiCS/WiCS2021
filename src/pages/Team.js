import React from "react";

import Button from "../components/Button";
import GridContainer from "../components/GridContainer";
import Footer from "../components/navigation/Footer";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <main className="bg-white p-12 md:p-20">
        <GridContainer
          queryString={`*[_type == "profile" && profileType == "executive"] | order(pageOrder asc){
      name,
      role,
      slug,
      mainImage{
        ...,
        asset->{
          _id,
          url,
        },
        alt
      }
    }`}
          path="profile"
          title="Executive Team"
          subTitle="Meet our team of creators, coders, and change-makers."
          type="profile"
        ></GridContainer>

<div className="align-center">
        <GridContainer
          queryString={`*[_type == "profile" && profileType == "faculty"]{
      name,
      role,
      slug,
      mainImage{
        ...,
        asset->{
          _id,
          url
        },
        alt
      }
    }`}
    title="Faculty Advisors"
    subTitle="Meet our Faculty Advisors!"
    path="profile"
    type="profile"
    center  
  />
</div>

        <div className="m-10 flex justify-center items-center">
          
        <Link
  to="/team-archive"
  className="inline-flex items-center justify-center rounded-full
             bg-wicsPurple text-white px-10 py-3 font-poppins shadow-md
             hover:opacity-90 hover:shadow-lg focus:outline-none
             focus:ring-2 focus:ring-wicsPurple/40 transition w-full sm:w-auto"
>
SEE OUR PAST EXECUTIVE TEAM
</Link>


        </div>
      </main>
      <Footer />
    </>
  );
}
