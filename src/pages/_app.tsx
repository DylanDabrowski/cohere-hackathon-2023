import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const textFont = localFont({
  src: "../assets/fonts/textFont.ttf",
});

const titleFont = localFont({
  src: "../assets/fonts/titleFont.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${textFont.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
