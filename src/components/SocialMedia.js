import React from "react";
import { SocialIcon } from "react-social-icons";

export default function SocialMedia(props) {
  return (

    <div className="">


      <a href={props.url} target="_blank" rel="noopener noreferrer"></a>
      <SocialIcon
        url={props.email ? "mailto:" + props.url : props.url}
        className="p-2"
        target="_blank"
        fgColor="#fff"
        style={{ height: props.height, width: props.width, marginRight: "12px", marginTop: "24px" }}
      />
    </div>
  );
}
