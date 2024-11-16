import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import { nanoid } from "nanoid";

export const pageLinks = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#services", text: "services" },
  { id: nanoid(), href: "#tours", text: "tours" },
];
export const socialLinks = [
  { id: nanoid(), href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: nanoid(), href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: nanoid(), href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: nanoid(),
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: nanoid(),
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: nanoid(),
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: nanoid(),
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: nanoid(),
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: nanoid(),
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: nanoid(),
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
