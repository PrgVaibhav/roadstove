import { Home } from "../../sections";
import { Navbar } from "./navbar/Navbar";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-none">
        <Navbar />
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Home />
      </main>
      <footer className="flex-none">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};
