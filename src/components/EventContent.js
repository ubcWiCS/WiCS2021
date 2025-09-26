import React from "react";
import Gallery from "../components/Gallery";

/**
 * Mobile-first, breakpoint-driven layout.
 * - Stacks on mobile; becomes two columns at md (≥768px)
 * - Uses order utilities to flip image/text without duplicating markup
 * - Scales typography and spacing by breakpoint
 */
export default function EventContent(props) {
  const textFirst = props.direction === "textLeft"; // true => text on left at md+
  const isTransparent = props.index === 0 || props.index === 2;

  return (
    <section
      className={[
        "w-full",
        isTransparent ? "bg-transparent" : "bg-white",
      ].join(" ")}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 lg:gap-12">
          {/* Image column */}
          <div
            className={[
              // On mobile, show image first for visual context
              "order-1",
              // At md+, decide order by props.direction
              textFirst ? "md:order-2" : "md:order-1",
              "w-full",
            ].join(" ")}
          >
            <div className="py-4 sm:py-6 px-0">
              <Gallery images={props.images} />
            </div>
          </div>

          {/* Text column */}
          <div
            className={[
              // On mobile, text goes second by default
              "order-2",
              // At md+, flip if textFirst
              textFirst ? "md:order-1" : "md:order-2",
              "w-full",
            ].join(" ")}
          >
            <div className="py-4 sm:py-6">
              <h2 className="cursive text-gray-700 title text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                {props.title}
              </h2>
              {props.date && (
                <div className="pt-2 text-sm sm:text-base text-gray-700">
                  {props.date}
                </div>
              )}
              {props.body && (
                <div className="pt-3 text-base sm:text-lg text-gray-700 body leading-relaxed">
                  {props.body}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
