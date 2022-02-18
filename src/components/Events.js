import SocialMedia from "./SocialMedia";
import Calendar from "@ericz1803/react-google-calendar";
import Events from "../img/WicsEvent.png";
import TwoUpContent from "./TwoUpContent";

const API_KEY = "AIzaSyAQl9vulZ_MczguBaOCxOxn6TB8U1R0w7c";
let calendars = [
  { calendarId: "18qb8b2du4h0brqc9i7tv4v8ok@group.calendar.google.com" },
];
let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderRadius: "10px",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    color: "#818cf8",
  },
};

export default function Example() {
  return (
    <div>
      <TwoUpContent
        title="Events"
        body={
          <div className="flex flex-col">
            <p className="pb-2 body">
              Want to stay up to date? Follow us on social!
            </p>
            <div className="flex flex-row items center justify center">
              <SocialMedia url="https://www.linkedin.com/company/ubcwics/mycompany/"></SocialMedia>
              <SocialMedia url="https://www.instagram.com/ubcwics/"></SocialMedia>
              <SocialMedia url="https://www.facebook.com/ubcwics/"></SocialMedia>
            </div>
            <p className="pb-4 pt-6 body">
              Or sign up for one of our events here:
            </p>
            <div className="rounded-md shadow w-2/5">
              <a
                href="https://linktr.ee/UBCWiCS"
                target="_blank"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Sign Up!
              </a>
            </div>
          </div>
        }
        imageSrc={Events}
        imageAlt="Image of women chatting"
        direction="textLeft"
      ></TwoUpContent>
      <div className="md:px-28 px-16 pb-10">
        <Calendar
          apiKey={API_KEY}
          calendars={calendars}
          styles={styles}
          showFooter={false}
        />
      </div>
    </div>
  );
}
