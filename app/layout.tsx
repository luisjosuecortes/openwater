import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenWater",
  description: "Resolviendo la escases de aguas en cultivos de México",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
