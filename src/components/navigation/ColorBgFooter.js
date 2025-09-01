import React from "react";
import SocialMedia from "../SocialMedia";
import NewsletterSignupTailwind from "../NewsletterSignupTailwind";
import footerBg from "../../img/footer.png";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer
      className="w-screen"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "400px",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-start max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-poppins font-semibold text-wicsPurple mb-3">
            Subscribe to Our Newsletter
          </h2>
          <NewsletterSignupTailwind className="items-start text-left py-2 max-w-md" />
        </div>

        <div className="border-t border-wicsPurple mt-6 mb-4 w-full max-w-3xl mx-auto"></div>

        <div className="flex justify-between items-center max-w-3xl mx-auto w-full">
          <p className="text-sm mt-4 font-poppins">
            UBC Women in Computer Science {date}
          </p>
          <div className="flex gap-1">
            <SocialMedia
              url="https://www.linkedin.com/company/ubcwics/mycompany/"
              width="25px"
              height="25px"
              color="#B089DD"
            />
            <SocialMedia
              url="https://www.instagram.com/ubcwics/"
              width="25px"
              height="25px"
              color="#B089DD"
            />
            <SocialMedia
              url="https://www.facebook.com/ubcwics/"
              width="25px"
              height="25px"
              color="#B089DD"
            />
            <SocialMedia
              url="https://discord.gg/jvqdhrCk3z"
              width="25px"
              height="25px"
              color="#B089DD"
            />
            <SocialMedia
              email="true"
              url="ubcwics@gmail.com"
              width="25px"
              height="25px"
              color="#B089DD"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
