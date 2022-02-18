import React from "react";
import GridContainer from "./GridContainer.js";

export default function SponsorTest() {
  //Get profile data from Sanity Studio

  //Render profile collection
  return (
    <GridContainer
      queryString={`*[_type == "profile" && profileType == "sponsor"]{
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
    }`}
      path="sponsor"
    ></GridContainer>
  );
}
