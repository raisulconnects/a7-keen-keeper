import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { TimelineContextProvider } from "./context/TimelineContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description:
    "Keep Your Friendships Alive - Track and nurture your important relationships with Keen Keeper.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <TimelineContextProvider>
        <Navbar />
        <body className="flex flex-col">{children}</body>
        <Footer />
        <ToastContainer position="bottom-right" />
      </TimelineContextProvider>
    </html>
  );
}
