import Calendar from "@ericz1803/react-google-calendar";
import "dotenv/config";
import { css } from "@emotion/react";

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
    today: css`
      /* highlight today by making the text red and giving it a red border */
      color: "#818cf8";
      border: 1px solid "#818cf8";
    `,
  },
};

export default function CalendarComponent() {
  return (
    <main>
      <div className="w-full">
        <div className="md:px-28 px-16 pb-10 max-w-6xl block ml-auto mr-auto">
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
