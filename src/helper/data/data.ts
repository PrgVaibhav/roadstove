interface ROUTE {
  id: number;
  name: string;
  path: string;
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
