export default function Trailer() {
  return (
    <section
      data-section="trailer"
      className="relative isolate overflow-hidden bg-white px-[clamp(20px,7vw,110px)] py-[clamp(44px,5vw,70px)] text-[#292929]"
      aria-labelledby="trailer-heading"
    >
      <div className="mx-auto max-w-[900px]">
        <h2
          id="trailer-heading"
          className="mb-[clamp(32px,4vw,48px)] text-center font-boxel text-[clamp(46px,6vw,82px)] leading-[.85] font-black tracking-[-.055em] uppercase"
        >
          Our Trailer
        </h2>
        <div className="overflow-hidden rounded-[16px] bg-black shadow-[0_24px_70px_rgba(0,0,0,.25)]">
          <iframe
            className="aspect-video w-full border-0"
            src="https://www.youtube-nocookie.com/embed/j2jVBNEXx0Y"
            title="GDG Launch Night trailer"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
