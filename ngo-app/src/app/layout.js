import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: "NP",
  description: "A NGO Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
