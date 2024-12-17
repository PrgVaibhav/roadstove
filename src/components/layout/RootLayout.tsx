import { Home } from "../../sections";
import { AboutUs } from "../../sections/about/AboutUs";
import { DeliveryPartners } from "../../sections/delivery/DeliveryPartners";
import { Navbar } from "./navbar/Navbar";
import { BestSeller } from "../../sections/best-seller/BestSeller";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="flex-none sticky top-0 z-10 bg-[#f9eeee]">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <section id="hero">
          <Home />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="delivery">
          <DeliveryPartners />
        </section>
        <section id="best-seller">
          <BestSeller />
        </section>
      </main>
      <footer id="footer">
        <div className="text-center text-gray-600">Footer Content Here</div>
      </footer>
    </div>
  );
};
