import zomato from "../../assets/zomato.jpg";
import swiggy from "../../assets/swiggy.png";

export const DeliveryPartners = () => {
  return (
    <section
      className=" flex flex-col items-center justify-center w-full p-3 mona min-h-lvh gap-[8vh]"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col items-center justify-center  gap-2 w-full ">
        <h1
          id="hero-heading"
          className="text-5xl font-bold text-[#111] leading-none tracking-tight"
        >
          Delivery Partners.
        </h1>
        <p className=" font-bold text-[#746f6f] leading-snug tracking-tighter capitalize bg-[#d2c9c9] px-2 py-1 w-max rounded-lg shadow-lg border border-[#b3b0b0]">
          Partners helping us deliver our food to your doorstep.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <div className="w-[35vw] h-auto flex items-center justify-center overflow-hidden">
          <img
            src={zomato}
            alt="Zomato Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[39vw] h-auto   flex items-center justify-center overflow-hidden">
          <img
            src={swiggy}
            alt="Swiggy Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
