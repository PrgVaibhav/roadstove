import { BestDeliveryData } from "../../helper/data/data";

export const BestSeller = () => {
  // Array of light-shaded tints of the theme color

  return (
    <section
      className="flex flex-col items-center justify-center w-full p-3 mona min-h-[calc(100vh-58px)] gap-[8vh]"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl font-bold text-[#111] leading-none tracking-tight"
        >
          Best Sellers.
        </h1>
        <p className="text-sm font-bold text-[#746f6f] leading-snug tracking-tighter capitalize bg-[#d2c9c9] px-2 py-1 w-max rounded-lg shadow-lg border border-[#b3b0b0]">
          Satisfy your cravings with our bestsellers.
        </p>
      </div>

      <div className="flex items-stretch justify-center gap-10 flex-wrap p-3">
        {BestDeliveryData.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[230px] h-[200px] bg-red-300 relative flex items-end shadow-md rounded-lg p-3"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[180px] h-auto object-contain absolute rounded-full -top-10 right-0"
            />
            <div className="flex flex-col w-full gap-6">
              <h1 className="text-2xl sm:text-xl font-bold text-[#111] leading-none tracking-normal">
                {item.title}
              </h1>
              <div className="flex items-center justify-between w-full">
                <p>$45</p>
                <button>Buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
