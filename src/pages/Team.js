import React from "react";
import GridContainer from "../components/GridContainer.js";
import Footer from "../components/navigation/Footer.js";

export default function Team() {
  //Get profile data from Sanity Studio

  //Render profile collection
  return (
    <main>
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
        subTitle="Meet our executive team!"
        type="profile"
        symbol="👋"
      ></GridContainer>
      <Footer></Footer>
    </main>
  );
}
