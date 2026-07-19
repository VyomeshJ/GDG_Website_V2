import Image from "next/image";

const faqs = [
  {
    question: "I don’t know how to code!",
    answer: (
      <>
        If you don’t know how to code, that’s okay! One of our core workshops
        is teaching members how to code so you can come along there to learn,
        otherwise our Discord server has resources on some of the fundamentals
        of game development.
      </>
    ),
  },
  {
    question: "What if I’m non-UOA?",
    answer: (
      <>
        <strong className="font-black">You can still join!</strong> Several of
        our long-lasting members are graduates, non-UOA Students, industry
        workers, and more. We’re open to anyone and everyone, as long as you
        follow The Code (of Conduct), and love games and gamedev!
      </>
    ),
  },
  {
    question: "Help, I’m a total newbie…",
    answer: (
      <>
        Even if you’re ABSOLUTELY new to game development, our community is open
        for all to ask questions and help each other in any way.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section
      data-section="faq"
      className="relative isolate min-h-[1250px] scroll-mt-24 overflow-hidden bg-white px-[clamp(20px,5vw,72px)] pt-[clamp(180px,20vw,280px)] pb-[clamp(60px,7vw,90px)] text-[#292929] max-[760px]:min-h-[1300px] max-[760px]:scroll-mt-22 max-[760px]:pt-40"
      aria-labelledby="faq-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Pattern.svg')" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[clamp(260px,32vw,460px)] bg-[linear-gradient(to_bottom,#fff_0%,#fff_18%,rgba(255,255,255,.94)_38%,rgba(255,255,255,.55)_68%,transparent_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[clamp(260px,28vw,420px)] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,.48)_42%,rgba(255,255,255,.9)_72%,#fff_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1450px]">
        <h2
          id="faq-heading"
          className="mb-[clamp(34px,5vw,64px)] text-center font-boxel text-[clamp(64px,8vw,112px)] leading-[.8] font-black tracking-[-.06em] uppercase"
        >
          FAQ
        </h2>

        <div className="grid grid-cols-3 items-start gap-[clamp(28px,5vw,76px)] max-[760px]:grid-cols-1 max-[760px]:gap-14">
          {faqs.map((faq) => (
            <article className="text-center" key={faq.question}>
              <h3 className="mb-5 text-[clamp(24px,2.4vw,34px)] leading-[1.12] font-medium tracking-[-.025em]">
                {faq.question}
              </h3>
              <p className="mx-auto max-w-[390px] text-[clamp(17px,1.45vw,21px)] leading-[1.45]">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="relative mx-auto mt-[clamp(60px,8vw,100px)] flex h-[clamp(280px,30vw,400px)] max-w-[1200px] items-center justify-between gap-[clamp(18px,3vw,48px)] max-[760px]:mt-16 max-[760px]:h-[230px]">
          <Image
            className="pointer-events-none relative z-0 h-auto w-[clamp(110px,15vw,210px)] flex-none max-[760px]:hidden"
            src="/assets/Socials_Left.png"
            alt=""
            width={665}
            height={664}
            unoptimized
            aria-hidden="true"
          />

          <div className="group relative z-10 aspect-[1301/798] w-[min(45vw,520px)] flex-none transition-transform duration-200 ease-out hover:scale-[1.035] focus-within:scale-[1.035] max-[760px]:w-full">
            <Image
              className="pointer-events-none absolute inset-0 size-full object-contain"
              src="/assets/Socials.png"
              alt="Our social platforms"
              width={1301}
              height={798}
              unoptimized
            />
            <a
              className="absolute top-[1%] left-[4%] h-[23%] w-[20%] rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-[#12caca]"
              href="https://www.instagram.com/uoagdg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GDG on Instagram"
            />
            <a
              className="absolute top-[1%] right-[1%] h-[24%] w-[22%] rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-[#12caca]"
              href="https://www.youtube.com/channel/UCiwPc3JSk--DZmBnUDP4eeg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GDG on YouTube"
            />
            <a
              className="absolute top-[28%] left-[34%] h-[47%] w-[34%] rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-[#12caca]"
              href="https://discord.com/invite/cnmjh8NQDT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join the GDG Discord"
            />
            <a
              className="absolute top-[35%] right-0 h-[28%] w-[21%] rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-[#12caca]"
              href="https://drive.google.com/drive/folders/1kHfv8UXbKuWpPqWyolEuCuUhauK3m11E"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GDG Google Drive"
            />
            <a
              className="absolute bottom-0 left-[5%] h-[24%] w-[20%] rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-[#12caca]"
              href="https://www.facebook.com/UoAGDG/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GDG on Facebook"
            />
          </div>

          <Image
            className="pointer-events-none relative z-0 h-auto w-[clamp(110px,15vw,210px)] flex-none max-[760px]:hidden"
            src="/assets/Socials_Right.png"
            alt=""
            width={671}
            height={730}
            unoptimized
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
