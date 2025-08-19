import { useEffect, useState } from "react";

function toDate(val) {
  // Handles all-day {date} and timed {dateTime}
  return new Date(val.dateTime || val.date);
}

function formatDateRange(evt) {
  const tz = "America/Vancouver";
  const fmtDay = new Intl.DateTimeFormat("en-CA", { month: "long", day: "numeric", timeZone: tz });
  const fmtTime = new Intl.DateTimeFormat("en-CA", { hour: "numeric", minute: "2-digit", timeZone: tz });

  const s = toDate(evt.start);
  const e = toDate(evt.end);

  const sameDay = s.toDateString() === e.toDateString();

  // All-day events come without times; we'll show just the date(s).
  const hasTimes = Boolean(evt.start.dateTime || evt.end?.dateTime);

  if (sameDay) {
    return hasTimes
      ? `${fmtDay.format(s)} • ${fmtTime.format(s)}`
      : fmtDay.format(s);
  }
  // Multi-day range
  return `${fmtDay.format(s)} – ${fmtDay.format(e)}`;
}

export default function useGoogleCalendarEvents({
  apiKey,
  calendarId,
  maxResults = 25,
  monthsAhead = 6,
}) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const now = new Date();
    const until = new Date(now);
    until.setMonth(until.getMonth() + monthsAhead);

    const params = new URLSearchParams({
      key: apiKey,
      singleEvents: "true",        // expand recurring
      orderBy: "startTime",
      maxResults: String(maxResults),
      timeZone: "America/Vancouver",
      timeMin: now.toISOString(),
      timeMax: until.toISOString(),
    });

    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params}`;

    fetch(url)
      .then(async (r) => {
        if (!r.ok) throw new Error(await r.text());
        return r.json();
      })
      .then((data) => {
        const mapped = (data.items || [])
          .filter((e) => e.status !== "cancelled")
          .map((e) => ({
            id: e.id,
            title: e.summary || "Untitled Event",
            date: formatDateRange(e),
            dueDate: extractDueDate(e.description), // optional helper
            link: e.htmlLink,
            location: e.location,
            raw: e,
          }));
        setEvents(mapped);
      })
      .catch((err) => setError(err.message || String(err)))
      .finally(() => setLoading(false));
  }, [apiKey, calendarId, maxResults, monthsAhead]);

  return { events, loading, error };
}

// If your descriptions include "Application due ..." we can surface it:
function extractDueDate(desc) {
  if (!desc) return undefined;
  const m = desc.match(/Application due[:\s]+(.+)/i);
  return m ? `Application due ${m[1].trim()}` : undefined;
}
