import React from "react";
import { SocialIcon } from "react-social-icons";

export default function SocialMedia(props) {
  return (
    <div className="p-2">
      <SocialIcon
        url={props.email ? "mailto:" + props.url : props.url}
        className="p-2"
        target="_blank"
        fgColor="#fff"
        style={{ height: props.height, width: props.width }}
      />
    </div>
  );
}
