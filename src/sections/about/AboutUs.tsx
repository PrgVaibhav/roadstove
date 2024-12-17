import aboutUsLogo from "../../assets/logo.png";
import { AboutData } from "../../helper/data/data";

export const AboutUs = () => {
  return (
    <section
      className=" flex flex-col items-center justify-center w-full p-3 mona min-h-[calc(100vh-48px)] gap-[8vh]"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col items-center justify-center  gap-2 w-full ">
        <h1
          id="hero-heading"
          className="text-5xl font-bold text-[#111] leading-none tracking-tight"
        >
          About <span className="text-[#EF0016]">Us.</span>
        </h1>
        <p className=" font-bold text-[#746f6f] leading-snug tracking-tighter capitalize bg-[#d2c9c9] px-2 py-1 w-max rounded-lg shadow-lg border border-[#b3b0b0]">
          Who we are?
        </p>
      </div>

      <section className="flex flex-col sm:flex-row items-center justify-center gap-8  ">
        <div className="w-full sm:w-[50%] h-auto object-contain flex items-center justify-center">
          <img
            src={aboutUsLogo}
            alt=""
            className="w-[60vw] sm:w-[40vw] h-auto object-contain"
          />
        </div>

        <div className="w-full sm:w-[50%]">
          <p className="text-sm sm:text-xl font-medium text-[#746f6f] leading-tight tracking-wide capitalize ">
            We are a family-owned restaurant that specializes in serving
            delicious food to our customers. Our menu features a wide variety of
            dishes, including burgers, sandwiches, salads, and desserts.
          </p>

          <div className="cards grid gap-4 mt-[4vh] grid-cols-2 lg:grid-cols-2">
            {AboutData.map((data) => (
              <div
                className="card flex flex-col gap-2 border border-[#b3b0b0] p-3 w-full sm:w-auto shadow-lg rounded-lg"
                key={data.id}
              >
                <div className="card-icon text-sm sm:text-lg font-bold text-[#3d3d3d] bg-[#d2c9c9] p-2 w-max rounded-lg shadow-lg border border-[#b3b0b0]">
                  {data.icon}
                </div>
                <div className="card-title text-md sm:text-xl font-bold text-[#111] leading-tight tracking-wide">
                  {data.title}
                </div>
                <div className="card-description text-xs sm:text-md font-medium text-[#746f6f] leading-tight tracking-wide">
                  {data.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
