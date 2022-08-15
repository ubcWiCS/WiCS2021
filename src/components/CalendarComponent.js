import SocialMedia from "./SocialMedia";
import Calendar from "@ericz1803/react-google-calendar";
import Events from "../img/WicsEvent.png";
import TwoUpContent from "./TwoUpContent";
import Button from "./Button.js";
import Emoji from "./Emoji.js";
import "dotenv/config";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API;

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

export default function CalendarComponent() {
  return (
    <main>
      <TwoUpContent
        title="Events"
        body={
          <div className="flex flex-col">
            <p className="pb-2 body">
              Want to stay up to date? Follow us on social!&nbsp;&nbsp;
              <Emoji symbol="🎉" label="search" />
            </p>
            <div className="flex flex-row items center justify center">
              <SocialMedia
                url="https://www.linkedin.com/company/ubcwics/mycompany/"
                width="35px"
                height="35px"
              ></SocialMedia>
              <SocialMedia
                url="https://www.instagram.com/ubcwics/"
                width="35px"
                height="35px"
              ></SocialMedia>
              <SocialMedia
                url="https://www.facebook.com/ubcwics/"
                width="35px"
                height="35px"
              ></SocialMedia>
            </div>
            <p className="pb-4 pt-6 body">
              Or sign up for one of our events here&nbsp;&nbsp;
              <Emoji symbol="📅" label="search" />
            </p>
            <Button
              link="https://linktr.ee/UBCWiCS"
              text="Sign Up!"
              type="external"
              width="w-2/4"
            ></Button>
          </div>
        }
        imageSrc={Events}
        imageAlt="Image of women chatting"
        direction="textLeft"
      ></TwoUpContent>
      <div className="w-full">
        <div className="md:px-28 px-16 pb-10 max-w-7xl block ml-auto mr-auto">
          <Calendar
            apiKey={GOOGLE_API_KEY}
            calendars={calendars}
            styles={styles}
            showFooter={false}
          />
        </div>
      </div>
    </main>
  );
}
