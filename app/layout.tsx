import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angela-alvarez-psicologia.vercel.app"),
  title: "Ángela Álvarez Castellar | Psicología clínica",
  description:
    "Psicología clínica y neuropsicología. Consulta presencial y en línea con Ángela Álvarez Castellar.",
  openGraph: {
    title: "Ángela Álvarez Castellar | Psicología clínica",
    description: "Psicología clínica, neuropsicología y agendamiento de citas en línea.",
    images: [{ url: "/angela-principal-clara.webp", width: 1095, height: 1437, alt: "Ángela Álvarez Castellar, psicóloga clínica y neuropsicóloga" }],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ángela Álvarez Castellar | Psicología clínica",
    description: "Psicología clínica, neuropsicología y agendamiento de citas en línea.",
    images: ["/angela-principal-clara.webp"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
