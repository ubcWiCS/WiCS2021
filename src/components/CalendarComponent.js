export default function CalendarComponent() {
  return (
    <main>
      <div className="w-full">
        <div className="md:px-28 px-16 pb-10 max-w-6xl block ml-auto mr-auto mb-40 sm:mb-0">
          <iframe
            title="google-cal"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FVancouver&showTz=0&showPrint=0&showCalendars=0&showNav=1&src=MThxYjhiMmR1NGgwYnJxYzlpN3R2NHY4b2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23cc89b6"
            height="600px"
            width="100%"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
