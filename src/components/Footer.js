import React from "react";
import SocialMedia from "./SocialMedia";
import Emoji from "./Emoji";
import Button from "./Button";
import VercelLogo from "../img/powered-by-vercel.svg";

export default function Footer() {
  var date = new Date().getFullYear();
  return (
    <main class="bg-gradient-to-br from-pink-100 via-indigo-50 to-indigo-200 w-screen">
      <div className="container mx-auto flex flex-col py-16 px-6 justify-center items-start">
        <div className="w-full">
          <div class="m-auto flex justify-start md:flex-row md:items-center flex-col">
            <div class="flex flex-col p-5 mr-6 flex-grow">
              <div class="text-sm subtitle font-medium pb-2">Mailing List</div>
              <div class="text-sm body font-sm">
                Sign up for our mailing list and stay up to date!
              </div>
              <div className="pt-4">
                <Button
                  link="https://forms.gle/Z1ysCLnxGL1zZ7o39"
                  text="Sign Up!"
                  type="external"
                  width="w-1/4"
                ></Button>
              </div>
            </div>
            <div class="flex flex-col p-5 mr-6 flex-grow">
              <div class="text-sm subtitle uppercase font-medium pb-2">
                Contact us
              </div>
              <div class="text-sm body font-sm">
                Interested in sponsorship or want to get in touch?
              </div>
              <div className="pt-2 pl-0">
                <SocialMedia
                  email="true"
                  url="ubcwics@gmail.com"
                  width="35px"
                  height="35px"
                  className="pl-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pr-8">
          <div class="flex pb-10 py-16 px-6 mx-auto pt-5 border-t border-indigo-200 text-sm flex-col md:flex-row md:items-center">
            <div class="mt-2 body object-left">
              {" "}
              @UBCWiCS {date} <Emoji symbol="❤️" label="heart" />
            </div>
            <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex object-right">
              <SocialMedia
                url="https://www.linkedin.com/company/ubcwics/mycompany/"
                width="25px"
                height="25px"
              ></SocialMedia>
              <SocialMedia
                url="https://www.instagram.com/ubcwics/"
                width="25px"
                height="25px"
              ></SocialMedia>
              <SocialMedia
                url="https://www.facebook.com/ubcwics/"
                width="25px"
                height="25px"
              ></SocialMedia>
            </div>
          </div>
          <div className="flex justify-start pl-6">
            <a href="https://vercel.com/?utm_source=[ubc-wics-2021]&utm_campaign=oss">
              <img src={VercelLogo} alt="powered by vercel"></img>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
