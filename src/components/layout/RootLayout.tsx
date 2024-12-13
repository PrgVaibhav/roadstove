import { Home } from "../../sections";
import { AboutUs } from "../../sections/about/AboutUs";
import { DeliveryPartners } from "../../sections/delivery/DeliveryPartners";
import { Navbar } from "./navbar/Navbar";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-none">
        <Navbar />
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <Home />
        <AboutUs />
        <DeliveryPartners />
      </main>
      <footer className="flex-none">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};
