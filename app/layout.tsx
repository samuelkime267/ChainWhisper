import { fonts } from "@/data/fonts.data";
import { metadata } from "@/data/metadata.data";
import "./globals.css";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>{children}</body>
    </html>
  );
}
