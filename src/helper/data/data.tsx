import { IndianRupeeIcon, Package, Snowflake, SprayCan } from "lucide-react";
import React from "react";

interface ROUTE {
  id: number;
  name: string;
  path: string;
}

interface ABOUT_DATA {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ROUTES: ROUTE[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },

  {
    id: 2,
    name: "About Us",
    path: "#about",
  },

  {
    id: 3,
    name: "Menu",
    path: "#menu",
  },
  {
    id: 4,
    name: "Gallery",
    path: "#gallery",
  },
];

export const AboutData: ABOUT_DATA[] = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "The food will be delivered to your home withing [some time span] of your ordering.",
    icon: <Package />,
  },
  {
    id: 2,
    title: "Fresh Food",
    description:
      "Your food will be delivered 100% fresh to your home, we don't deliver stale food.",
    icon: <SprayCan />,
  },
  {
    id: 3,
    title: "Affordable Prices",
    description:
      "Enjoy delicious meals at pocket-friendly prices. Great taste doesn’t have to break the bank!.",
    icon: <IndianRupeeIcon />,
  },
  {
    id: 4,
    title: "Hygienic Preparation",
    description:
      "Every dish is prepared with utmost care and hygiene, ensuring your safety and satisfaction with every bite.",
    icon: <Snowflake />,
  },
];
