import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from './providers';
import "./global.css";
import "@tailwindplus/elements";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Painel de Eventos',
  description: 'Gestão de eventos e participantes',
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`h-full antialiased ${interFont.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}