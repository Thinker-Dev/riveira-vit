import { Roboto, Space_Grotesk, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
export const font = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const oddvalRegular = localFont({
  src: "../../public/oddval/oddval-regular.otf",
  weight: "400",
});
export const oddvalLight = localFont({
  src: "../../public/oddval/oddval-light.otf",
  weight: "400",
});

export const oddvalSemiBold = localFont({
  src: "../../public/Oddval-SemiBold.ttf",
  weight: "600",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

export const juanaRegular = localFont({
  src: "../../public/joana/juanaalt-regular.otf",
  weight: "400",
});
export const juanaMedium = localFont({
  src: "../../public/joana/juanaalt-medium.otf",
  weight: "500",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
