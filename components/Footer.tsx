import Image from "next/image";

const socialLinks = [
  {
    label: "Facebook",
    icon: "/assets/Socials/fb.png",
    width: 80,
    height: 64,
    href: "https://www.facebook.com/UoAGDG/",
  },
  {
    label: "Google Drive",
    icon: "/assets/Socials/drive.png",
    width: 76,
    height: 60,
    href: "https://drive.google.com/drive/folders/1kHfv8UXbKuWpPqWyolEuCuUhauK3m11E",
  },
  {
    label: "Instagram",
    icon: "/assets/Socials/insta.png",
    width: 92,
    height: 64,
    href: "https://www.instagram.com/uoagdg/",
  },
  {
    label: "YouTube",
    icon: "/assets/Socials/yt.png",
    width: 100,
    height: 72,
    href: "https://www.youtube.com/channel/UCiwPc3JSk--DZmBnUDP4eeg",
  },
  {
    label: "X",
    icon: "/assets/Socials/twitter.png",
    width: 96,
    height: 72,
    href: "https://x.com/UoAGDG",
  },
];

export default function Footer() {
  return (
    <footer className="rounded-t-[22px] border-t border-white/25 bg-[#05252d] px-[clamp(22px,5vw,72px)] py-[clamp(18px,2.5vw,28px)] font-k2d text-white shadow-[inset_0_2px_0_rgba(255,255,255,.08)]">
      <div className="mx-auto flex max-w-[1500px] items-end justify-between gap-10 max-[760px]:flex-col max-[760px]:items-center max-[760px]:text-center">
        <div className="flex flex-col items-start gap-2 max-[760px]:items-center">
          <p className="text-[clamp(15px,1.5vw,22px)] leading-tight font-black">
            Copyright © 2026 UoA Game Developer Guild
          </p>
          <a
            className="text-[clamp(13px,1.25vw,18px)] font-black uppercase transition-colors hover:text-[#12caca] focus-visible:text-[#12caca] focus-visible:outline-none"
            href="mailto:council@uoagdg.com"
          >
            <Image
              className="mr-2 inline-block h-4 w-auto object-contain"
              src="/assets/Socials/email.png"
              alt=""
              width={216}
              height={172}
              aria-hidden="true"
            />
            council@uoagdg.com
          </a>
        </div>

        <div className="flex flex-col items-end gap-3 max-[760px]:items-center">
          <div className="flex flex-wrap justify-end gap-3 max-[760px]:justify-center">
            {socialLinks.map((social) => (
              <a
                className="grid size-10 place-items-center rounded-[7px] border-2 border-white text-lg font-black transition-[color,border-color,transform] duration-150 hover:-translate-y-0.5 hover:border-[#12caca] hover:text-[#12caca] focus-visible:border-[#12caca] focus-visible:text-[#12caca] focus-visible:outline-none"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                key={social.label}
              >
                <Image
                  className="h-6 w-auto object-contain"
                  src={social.icon}
                  alt=""
                  width={social.width}
                  height={social.height}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
          <a
            className="text-[clamp(15px,1.4vw,20px)] font-black transition-colors hover:text-[#12caca] focus-visible:text-[#12caca] focus-visible:outline-none"
            href="tel:+642041129013"
          >
            <Image
              className="mr-2 inline-block size-5 object-contain"
              src="/assets/Socials/phone.png"
              alt=""
              width={112}
              height={112}
              aria-hidden="true"
            />
            020 4112 9013
          </a>
        </div>
      </div>
    </footer>
  );
}
