import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getEvents, type GuildEvent } from "@/data/events";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events | Game Developer Guild",
  description:
    "Find upcoming events from the University of Auckland Game Developer Guild.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "GDG Events",
    description: "Upcoming events from the Game Developer Guild.",
    url: "/events",
  },
};

const eventStartTimestamp = (event: GuildEvent) =>
  new Date(event.startDate).getTime();

const eventEndTimestamp = (event: GuildEvent) =>
  new Date(event.endDate).getTime();

export default async function EventsPage() {
  const events = await getEvents();
  const upcomingEvents = events
    .filter((event) => eventEndTimestamp(event) >= Date.now())
    .sort(
      (first, second) =>
        eventStartTimestamp(first) - eventStartTimestamp(second),
    );

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      <main className="flex flex-1 flex-col pb-[clamp(72px,10vw,140px)]">
        <div className="flex flex-col items-center pt-8">
          <h1
            className={`mb-8 pt-[78px] font-boxel text-4xl font-bold md:pt-[140px] ${
              upcomingEvents.length === 0 ? "text-transparent" : "text-white"
            }`}
          >
            Upcoming Events
          </h1>
        </div>

        <div className="flex w-full flex-col items-center overflow-y-visible md:flex-1 md:overflow-y-auto">
          {upcomingEvents.length === 0 ? (
            <div className="mt-16 flex flex-col items-center justify-center text-center text-white/50">
              <h2 className="mb-2 font-k2d text-2xl font-bold">
                No upcoming events
              </h2>
              <p className="max-w-md font-k2d text-sm md:text-base">
                Please check back later — new events will be announced soon.
              </p>
            </div>
          ) : (
            upcomingEvents.map((event, index) => {
              const startDate = new Date(event.startDate);
              const endDate = new Date(event.endDate);
              const month = startDate
                .toLocaleDateString("en-NZ", {
                  month: "short",
                  timeZone: "Pacific/Auckland",
                })
                .toUpperCase();
              const day = startDate.toLocaleDateString("en-NZ", {
                day: "numeric",
                timeZone: "Pacific/Auckland",
              });
              const startTime = startDate.toLocaleTimeString("en-NZ", {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "Pacific/Auckland",
              });
              const endTime = endDate.toLocaleTimeString("en-NZ", {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "Pacific/Auckland",
              });
              const startTime24 = startDate.toLocaleTimeString("en-NZ", {
                hour: "2-digit",
                minute: "2-digit",
                hourCycle: "h23",
                timeZone: "Pacific/Auckland",
              });
              const endTime24 = endDate.toLocaleTimeString("en-NZ", {
                hour: "2-digit",
                minute: "2-digit",
                hourCycle: "h23",
                timeZone: "Pacific/Auckland",
              });
              const startDay = startDate.toLocaleDateString("en-CA", {
                timeZone: "Pacific/Auckland",
              });
              const endDay = endDate.toLocaleDateString("en-CA", {
                timeZone: "Pacific/Auckland",
              });
              const dateOnly = startTime24 === "00:00" && endTime24 === "00:00";
              const fullStartDate = startDate.toLocaleDateString("en-NZ", {
                day: "numeric",
                month: "short",
                year: "numeric",
                timeZone: "Pacific/Auckland",
              });
              const fullEndDate = endDate.toLocaleDateString("en-NZ", {
                day: "numeric",
                month: "short",
                year: "numeric",
                timeZone: "Pacific/Auckland",
              });
              const timing = dateOnly
                ? startDay === endDay
                  ? fullStartDate
                  : `${fullStartDate} - ${fullEndDate}`
                : startDay === endDay
                  ? `${startTime} - ${endTime}`
                  : `${startDate.toLocaleDateString("en-NZ", {
                      day: "numeric",
                      month: "short",
                      timeZone: "Pacific/Auckland",
                    })}, ${startTime} - ${endDate.toLocaleDateString("en-NZ", {
                      day: "numeric",
                      month: "short",
                      timeZone: "Pacific/Auckland",
                    })}, ${endTime}`;

              const cardClassName = `relative m-2 flex min-h-[190px] w-[calc(100vw-32px)] items-stretch overflow-hidden rounded-lg bg-[#151515] sm:w-[82vw] md:min-h-40 md:w-[60vw] lg:w-[50vw] ${
                event.href
                  ? "border-2 border-[#12caca]"
                  : "border-2 border-transparent"
              }`;

              const cardContent = (
                <>
                  <div
                    className={`flex w-[28%] min-w-[88px] max-w-[116px] shrink-0 flex-col items-center justify-center px-2 py-4 md:w-[20%] md:max-w-none md:px-4 ${
                      index === 0 ? "bg-[#087f82]" : "bg-[#05252d]"
                    }`}
                  >
                    <h2 className="max-w-full text-center font-boxel text-[clamp(16px,5vw,24px)] leading-none font-bold text-white">
                      {month}
                    </h2>
                    <p className="mt-2 max-w-full text-center font-boxel text-[clamp(36px,12vw,48px)] leading-none font-bold text-white">
                      {day}
                    </p>
                  </div>

                  <div className="flex min-w-0 flex-1 items-center justify-center px-3 py-5 text-center sm:p-5 md:px-6">
                    {event.href && (
                      <span
                        className="absolute top-3 right-3 text-xl font-bold text-[#12caca]"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    )}
                    <div className="flex min-w-0 w-full flex-col items-center gap-2">
                      <h2 className="w-full text-center font-k2d text-lg leading-tight font-bold text-white md:text-2xl">
                        {event.title}
                      </h2>
                      <p className="w-full text-center font-k2d text-sm leading-snug font-bold break-words text-white/50 md:text-lg">
                        Location: {event.location}
                      </p>
                      <div className="flex max-w-full w-fit items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-white">
                        <span
                          className="shrink-0 text-[28px] leading-none md:text-xl"
                          aria-hidden="true"
                        >
                          {dateOnly ? "▦" : "◷"}
                        </span>
                        <span className="min-w-0 font-k2d text-xs leading-snug font-bold break-words sm:text-sm md:text-base">
                          {timing}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );

              return event.href ? (
                <a
                  className={cardClassName}
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${event.title} — open event link`}
                  key={event.id}
                >
                  {cardContent}
                </a>
              ) : (
                <article className={cardClassName} key={event.id}>
                  {cardContent}
                </article>
              );
            })
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
