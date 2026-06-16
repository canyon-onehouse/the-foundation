import type { Accent } from "@/lib/accents";

export type WallBand = {
  name: string; // "capstone"
  price: string; // "$100 / month"
  access: string; // "earliest & best access"
  accent: Accent;
  placeholderTitle: string;
  placeholderText: string;
  /** Real donor names — empty for launch (data-ready placeholder). */
  names: string[];
};

export const WALL_BANDS: WallBand[] = [
  {
    name: "capstone",
    price: "$100 / month",
    access: "earliest & best access",
    accent: "green",
    placeholderTitle: "your name will be set here first",
    placeholderText:
      "capstone founders are listed at the top of the wall. you're first in line for every donor perk — the earliest drop windows, and the best of everything we offer.",
    names: [],
  },
  {
    name: "keystone",
    price: "$50 / month",
    access: "early access",
    accent: "orange",
    placeholderTitle: "your name will be set here",
    placeholderText:
      "keystone founders fill the middle band. you get early access to every perk — just behind capstone, and always ahead of cornerstone.",
    names: [],
  },
  {
    name: "cornerstone",
    price: "$10 / month",
    access: "full access",
    accent: "blue",
    placeholderTitle: "your name will be set here",
    placeholderText:
      "cornerstone founders form the base of the wall. you always have access to everything we offer — usually in the final window, and never left out.",
    names: [],
  },
];
