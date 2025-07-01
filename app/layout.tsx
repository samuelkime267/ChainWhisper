import { fonts } from "@/data/fonts.data";
import { metadata } from "@/data/metadata.data";
import "./globals.css";
import Image from "next/image";
import defaultBg from "@/assets/imgs/default-bg-small.png";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>
        <div className="fixed top-0 left-0 w-full h-full">
          <Image
            src={defaultBg}
            alt="default-bg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
