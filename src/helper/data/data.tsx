import { IndianRupeeIcon, Package, Snowflake, SprayCan } from "lucide-react";
import BURGER from "../../assets/burger.webp";
import CHICKEN_WINGS from "../../assets/chicken-wings.webp";
import FRIES from "../../assets/fries.webp";
import PIZZA from "../../assets/pizza.webp";
import PAW_BHAJI from "../../assets/paw-bhaji.webp";
import PASTA from "../../assets/pasta.webp";
import SAMOSA from "../../assets/samosa.webp";
import SANDWICH from "../../assets/sandwich.webp";

interface ROUTE {
  id: number;
  name: string;
  path: string;
}

interface BEST_DELIVERY_DATA {
  id: number;
  title: string;
  img: string;
  tag: string;
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
    icon: <Package size={15} />,
  },
  {
    id: 2,
    title: "Fresh Food",
    description:
      "Your food will be delivered 100% fresh to your home, we don't deliver stale food.",
    icon: <SprayCan size={15} />,
  },
  {
    id: 3,
    title: "Affordable Prices",
    description:
      "Enjoy delicious meals at pocket-friendly prices. Great taste doesn’t have to break the bank!.",
    icon: <IndianRupeeIcon size={15} />,
  },
  {
    id: 4,
    title: "Hygienic Preparation",
    description:
      "Every dish is prepared with utmost care and hygiene, ensuring your safety and satisfaction with every bite.",
    icon: <Snowflake size={15} />,
  },
];

export const BestDeliveryData: BEST_DELIVERY_DATA[] = [
  {
    id: 1,
    title: "Burger",
    img: BURGER,
    tag: "Popular",
  },
  {
    id: 2,
    title: "Chicken Wings",
    img: CHICKEN_WINGS,
    tag: "Trending",
  },
  {
    id: 3,
    title: "Fries",
    img: FRIES,
    tag: "New",
  },
  {
    id: 4,
    title: "Pasta",
    img: PASTA,
    tag: "Popular",
  },

  {
    id: 5,
    title: "Paw Bhaji",
    img: PAW_BHAJI,
    tag: "Popular",
  },

  {
    id: 6,
    title: "Pizza",
    img: PIZZA,
    tag: "Popular",
  },
  {
    id: 7,
    title: "Samosa",
    img: SAMOSA,
    tag: "Trending",
  },
  {
    id: 8,
    title: "Sandwich",
    img: SANDWICH,
    tag: "New",
  },
];
