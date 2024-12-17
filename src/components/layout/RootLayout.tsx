import { useEffect, useState } from "react";
import { Home } from "../../sections";
import { AboutUs } from "../../sections/about/AboutUs";
import { DeliveryPartners } from "../../sections/delivery/DeliveryPartners";
import { FullPageScroll } from "../website/FullPageScroll";
import { Navbar } from "./navbar/Navbar";

export const RootLayout = () => {
  const sections = ["hero", "about", "delivery", "footer"];
  const navbarHeight = 64; // Navbar height in pixels
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile breakpoint at 768px
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="flex-none sticky top-0 z-10 bg-[#f9eeee]">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {!isMobile && (
          <FullPageScroll sections={sections} offsetHeight={navbarHeight} />
        )}
        <section id="hero">
          <Home />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="delivery">
          <DeliveryPartners />
        </section>
        <section id="footer">
          <div className="text-center text-gray-600">Footer Content Here</div>
        </section>
      </main>
    </div>
  );
};
