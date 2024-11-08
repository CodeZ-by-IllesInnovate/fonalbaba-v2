import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Fonalbaba",
  description: "Foanalbaba amigurumi minták",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div> 
          <Navbar />
          <main className="">{children}</main>
          <footer className="bg-gray-800 text-white text-center py-4">
            <p>&copy; 2024 Fonalbaba. Minden jog fenntartva.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
