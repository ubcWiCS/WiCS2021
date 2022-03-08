import React from "react";
import Footer from "./Footer.js";
import GridContainer from "./GridContainer.js";

export default function Advisors() {
  return (
    <main>
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
        symbol="🎓"
      ></GridContainer>
      <Footer></Footer>
    </main>
  );
}
