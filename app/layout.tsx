import { Poppins } from "next/font/google";
import { Ubuntu } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { siteConfig } from "@/config/siteconfig";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-Poppins",
});

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-Ubuntu",
});

export const metadata: Metadata = {
  // Todo: Update the informations
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [{ url: "/logo.ico", href: "/logo.ico" }],
  authors: [
    {
      name: "Adharsh",
      url: "https://github.com/unknowncoder-gamer",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" dir="ltr" className="scroll-smooth antialiased">
        <body
          className={`${poppins.className} ${poppins.variable} ${ubuntu.variable} bg-p2`}
        >
          <NextTopLoader zIndex={1600} color="#00A86B" />
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
