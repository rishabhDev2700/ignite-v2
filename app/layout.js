import { Oswald, Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
const urbanist = Urbanist({subsets:["latin"]})
export const metadata = {
  title: "Ignite Property Services",
  description: "Commercial Power Cleaning Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={urbanist.className}>
      <NavBar />
      {children}
      <Footer />

      </body>
    </html>
  );
}
