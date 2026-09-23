import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
export default function MarketingLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}