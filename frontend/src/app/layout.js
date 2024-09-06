import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
