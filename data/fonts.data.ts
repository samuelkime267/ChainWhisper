import { Audiowide, Roboto } from "next/font/google";

const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-audiowide",
});

const roboto = Roboto({
  weight: ["200", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const fonts = `${audiowide.variable} ${roboto.variable}`;
