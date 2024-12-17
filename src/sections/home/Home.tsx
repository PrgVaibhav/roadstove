import { ReactTyped } from "react-typed";
import heroSectionImage from "../../assets/roadstove-hero.png";
import { ClockArrowUp, MessageCircleMore } from "lucide-react";

export const Home = () => {
  const sentences: string[] = [
    "Have a great time!",
    "Enjoy your meal!",
    "Have a nice day!",
    "Bring the family!",
  ];

  return (
    <section
      className="flex items-center flex-col justify-center sm:flex-row sm:justify-around w-full p-3 min-h-[calc(100vh-48px)] mona"
      aria-labelledby="hero-heading"
    >
      {/* Text Content Section */}
      <div className="flex flex-col gap-4 w-full sm:w-[50%]">
        {/* Dynamic Typing Component */}
        <div
          className="text-lg font-bold text-[#3d3d3d] leading-none tracking-wide bg-[#d2c9c9] p-2 w-max rounded-lg shadow-lg border border-[#b3b0b0]"
          aria-label="Dynamic Greeting Messages"
        >
          <ReactTyped
            strings={sentences}
            typeSpeed={50} // Typing speed
            backSpeed={30} // Backspacing speed
            backDelay={1500} // Delay before backspacing
            loop // Loops through the sentences
          />
        </div>

        {/* Heading and Description */}
        <div className="flex flex-col gap-2">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl font-bold text-[#111] leading-tight tracking-wide"
          >
            Welcome to <span className="text-[#EF0016]">Roadstove</span>, Where
            Taste Meets Comfort!
          </h1>
          <p className="text-md sm:text-xl font-bold text-[#746f6f] leading-tight tracking-wide capitalize">
            Hungry? We’ve got you covered. Explore a world of tasty dishes just
            a click away.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex  items-start sm:flex-row sm:items-center gap-4">
          <button
            className="
              text-[#EB6B6B] font-medium border border-[#EB6B6B] px-6 py-3 sm:py-2 sm:px-4 rounded-lg flex gap-2 items-center 
              transition-all duration-300 ease-in-out hover:bg-[#EB6B6B] hover:text-white shadow-md active:scale-95 text-md"
            aria-label="Order Food Now"
          >
            <ClockArrowUp size={20} />
            Order Now
          </button>
          <button
            className="
              bg-[#25D366] text-white font-medium px-6 py-3 sm:py-2 sm:px-4 rounded-lg flex gap-2 items-center 
              transition-transform duration-300 ease-in-out shadow-md active:scale-95 text-md"
            aria-label="Order Food on WhatsApp"
          >
            <MessageCircleMore size={20} />
            Order On WhatsApp
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-[80vw] sm:w-[40vw] ">
        <img
          src={heroSectionImage}
          alt="Roadstove Hero - Delicious food delivered"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};
