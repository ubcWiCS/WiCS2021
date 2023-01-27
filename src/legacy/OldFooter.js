import React from "react";
import Emoji from "../components/Emoji";

export default function Footer() {
  var date = new Date().getFullYear();
  return (
    <div className="w-screen bg-gradient-to-br from-pink-100 via-indigo-50 to-indigo-200">
      <div className="container mx-auto flex flex-col py-16 px-6 justify-center items-start">
        <p className="pl-6 pb-3 body">
          UBC WiCS would like to acknowledge that UBC Vancouver is located on
          the traditional, ancestral and unceded territory of the xʷməθkʷəy̓əm
          (Musqueam).
        </p>
        <p className="pl-6 pb-3 title">
          @UBCWiCS {date} <Emoji symbol="❤️" label="search" />
        </p>
      </div>
    </div>
  );
}
