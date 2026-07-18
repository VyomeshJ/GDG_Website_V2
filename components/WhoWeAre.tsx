import ScrollArcadeController from "./ScrollArcadeController";

export default function WhoWeAre() {
  return (
    <section data-section="who-we-are" className="relative isolate grid min-h-svh scroll-mt-24 grid-cols-[minmax(0,1.05fr)_minmax(320px,.95fr)] items-center gap-[clamp(50px,8vw,130px)] overflow-hidden bg-white px-[clamp(24px,9vw,140px)] py-[clamp(100px,12vw,160px)] max-[760px]:scroll-mt-22 max-[760px]:grid-cols-1 max-[760px]:gap-7.5" aria-label="Who we are">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[clamp(140px,16vw,220px)] bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,.62)_32%,rgba(0,0,0,.22)_68%,transparent_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-[700px]">
        <p className="mb-[13px] text-[clamp(11px,1.25vw,16px)] font-black tracking-[.08em] text-[#10b8b5] uppercase">Est. 2018 · Tāmaki Makaurau</p>
        <h2 className="m-0 font-boxel text-[clamp(54px,8vw,112px)] leading-[.9] font-black tracking-[-.065em] uppercase">Who we are</h2>
        <div className="my-7 h-2 w-18 bg-gdg-teal shadow-[12px_0_0_#ef633f]" />
        <p className="mb-[19px] max-w-[660px] text-[clamp(17px,1.7vw,23px)] leading-[1.38]">The University of Auckland Game Developers Guild is an inclusive community dedicated to teaching students and hobbyists the core aspects of game development.</p>
        <p className="mb-[19px] max-w-[660px] text-[clamp(17px,1.7vw,23px)] leading-[1.38]">We run tutorials throughout the semester covering art, code and game design, then put those skills to the test in our semester-long GDG Jam.</p>
      </div>
      <div className="relative z-10 grid place-items-center max-[760px]:order-first"><ScrollArcadeController /></div>
    </section>
  );
}
