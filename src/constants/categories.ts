import { Category } from "../interfaces";

export const CATEGORIES: Category[] = [
  {
    id: "meat",
    name: "Meat & Fish",
    image: require("../assets/images/meat and fish.png"),
  },
  {
    id: "dairy",
    name: "Dairy & Eggs",
    image: require("../assets/images/dairyandeggs.png"),
  },
  {
    id: "fruits",
    name: "Fruits & Vegetables",
    image: require("../assets/images/fruitandveg.png"),
  },
  {
    id: "beverages",
    name: "Beverages",
    image: require("../assets/images/beverages.png"),
  },
  {
    id: "bakery",
    name: "Bakery & Snacks",
    image: require("../assets/images/bakeryandsnacks.png"),
  },
  {
    id: "oil",
    name: "Oils & Ghee",
    image: require("../assets/images/oilandghee.png"),
  },
];
