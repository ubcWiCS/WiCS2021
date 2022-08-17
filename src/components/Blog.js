import React from "react";
import GridContainer from "./GridContainer.js";
import Footer from "./Footer.js";

export default function Blog() {
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
        title="=What We've Been Up To"
        subTitle="Check out some of our Recent Events!"
        type="profile"
        symbol="🎉"
      ></GridContainer>
      <Footer></Footer>
    </main>
  );
}
