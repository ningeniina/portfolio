import "./globals.css";
import { Press_Start_2P, Noto_Sans_JP } from "next/font/google";

import Header from "@/app/_component/Header/Header";
import Footer from "@/app/_component/Footer/Footer";

export const press = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--press",
  display: "swap",
});

export const noto = Noto_Sans_JP({
  weight: "variable",
  subsets: ["latin"],
  variable: "--noto",
  display: "swap",
});

export const metadata = {
  title: "ポートフォリオ",
  description: "ポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="robots" content="noindex" /> {/*検索欄に表示させない*/}
      </head>
      <body className={`${press.variable} ${noto.variable} `}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
