import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.uoagdg.com";
const siteDescription =
  "The University of Auckland Game Developer Guild is an inclusive community for students and hobbyists learning and making games together.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Game Developer Guild",
  description: siteDescription,
  applicationName: "Game Developer Guild",
  category: "education",
  creator: "University of Auckland Game Developer Guild",
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Game Developer Guild",
    description: siteDescription,
    siteName: "Game Developer Guild",
    locale: "en_NZ",
    images: [
      {
        url: "/assets/hero-bg.png",
        width: 3508,
        height: 2000,
        alt: "University of Auckland Game Developer Guild",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Developer Guild",
    description: siteDescription,
    images: ["/assets/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#030506",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "University of Auckland Game Developer Guild",
  alternateName: "UoA GDG",
  url: siteUrl,
  email: "council@uoagdg.com",
  description: siteDescription,
  logo: `${siteUrl}/assets/laser-logo.svg`,
  foundingDate: "2018",
  sameAs: [
    "https://www.facebook.com/UoAGDG/",
    "https://www.instagram.com/uoagdg/",
    "https://www.youtube.com/channel/UCiwPc3JSk--DZmBnUDP4eeg",
    "https://x.com/UoAGDG",
    "https://uoagdg.itch.io/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body className="m-0 bg-black font-k2d text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
