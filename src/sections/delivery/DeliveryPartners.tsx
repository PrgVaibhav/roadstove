import zomato from "../../assets/zomato.jpg";
import swiggy from "../../assets/swiggy.png";

export const DeliveryPartners = () => {
  return (
    <section
      className=" flex flex-col  justify-center w-full p-3  mona"
      aria-labelledby="hero-heading"
    >
      <div>
        <h1>Delivery Partners.</h1>
        <p>Partners helping us deliver our food to your doorstep.</p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="w-[15vw] h-[15vw] bg-gray-200 flex items-center justify-center overflow-hidden">
          <img
            src={zomato}
            alt="Zomato Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[15vw] h-[15vw] bg-gray-200 flex items-center justify-center overflow-hidden">
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
