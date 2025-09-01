import React from "react";
import GridContainer from "../components/GridContainer.js";
import ColorBgFooter from "../components/navigation/ColorBgFooter";

export default function Sponsors() {
  function getColor(tier) {
    switch (tier) {
      case "Platinum":
        return "#D0C3EA";
      case "Gold":
        return "#F3CEE9";
      case "Silver":
        return "#D6E2F6";
      default:
        return "#FFFFFF";
    }
  }

  return (
    <>
      <main className="bg-white p-12 md:p-20 flex flex-col gap-5 items-center">
        <div className="text-center space-y-4 font-poppins">
          <h1 className="text-6xl text-wicsPurple font-poppins font-semibold">
            Sponsors
          </h1>
          <p className="text-lg">
            Supported by brands who share our vision for an inclusive future in
            computing
          </p>
          <a
            href="/contact"
            className="hover:underline font-medium text-black "
          >
            <span className="font-bold text-lg">Contact us</span> for
            sponsorship inquiries &gt;
          </a>
        </div>

        {/* Platinum Sponsors Grid */}
        <GridContainer
          queryString={`*[_type == "sponsor" && sponsorLevel == "platinum"] | order(pageOrder asc){
            name,
            slug,
            sponsorLevel,
            pageOrder,
            hasEvent,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`}
          title={
            <span
              className="inline-block text-black text-2xl flex items-center justify-center"
              style={{
                backgroundColor: getColor("Platinum"),
                width: "465px",
                height: "75px",
                borderRadius: "11px",
                marginTop: "60px",
              }}
            >
              Platinum Sponsors
            </span>
          }
          cardColor={getColor("Platinum")}
          type="sponsor"
        />

        {/* Gold Sponsors Grid */}
        <GridContainer
          queryString={`*[_type == "sponsor" && sponsorLevel == "gold"] | order(pageOrder asc){
            name,
            slug,
            sponsorLevel,
            pageOrder,
            hasEvent,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`}
          title={
            <span
              className="inline-block text-black text-2xl flex items-center justify-center"
              style={{
                backgroundColor: getColor("Gold"),
                width: "465px",
                height: "75px",
                borderRadius: "11px",
                marginTop: "20px",
              }}
            >
              Gold Sponsors
            </span>
          }
          cardColor={getColor("Gold")}
          type="sponsor"
        />

        {/* Silver Sponsors Grid */}
        <GridContainer
          queryString={`*[_type == "sponsor" && sponsorLevel == "silver"] | order(pageOrder asc){
            name,
            slug,
            sponsorLevel,
            hasEvent,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`}
          title={
            <span
              className="inline-block text-black text-2xl flex items-center justify-center"
              style={{
                backgroundColor: getColor("Silver"),
                width: "465px",
                height: "75px",
                borderRadius: "11px",
                marginTop: "20px",
              }}
            >
              Silver Sponsors
            </span>
          }
          cardColor={getColor("Silver")}
          type="sponsor"
        />
      </main>
      <ColorBgFooter />
    </>
  );
}
