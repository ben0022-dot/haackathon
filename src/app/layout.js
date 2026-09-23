import { Space_Grotesk, Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: {
    default: "SpaceMakers — Find verified work near you",
    template: "%s · SpaceMakers",
  },
  description:
    "SpaceMakers matches skilled young people in Githogoro, Nairobi with verified, localized job and gig opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}