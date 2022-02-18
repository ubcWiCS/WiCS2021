import React from "react";
import GridContainer from "./GridContainer.js";

export default function TeamTest() {
  //Get profile data from Sanity Studio

  //Render profile collection
  return (
    <GridContainer
      queryString={`*[_type == "profile" && profileType == "executive"]{
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
      path="profile"
      title="Executive Team"
      subTitle="Meet our executive team!"
    ></GridContainer>
  );
}
