import { ROUTES } from "../../../helper/data/data";
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-around w-full mona p-3 relative">
      <div className="logo flex gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#111] leading-none tracking-tighter">
            RoadStove
          </h1>
        </div>
        <ul className="flex items-center gap-4">
          {ROUTES.map((route) => (
            <li key={route.id}>
              <a
                href={route.path}
                className="text-gray-400 text-md font-medium leading-none cursor-pointer hover:text-slate-500 transition-all duration-200 "
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-[#EB6B6B] font-medium ">Contact Us</button>
        <button className="text-[#EB6B6B] font-medium border border-[#EB6B6B] p-2 rounded-xl">
          Order Now
        </button>
      </div>
    </nav>
  );
};
