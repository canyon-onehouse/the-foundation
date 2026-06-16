import type { Accent } from "@/lib/accents";

export type Tier = {
  label: string; // "tier one"
  name: string; // "cornerstone"
  price: string; // "$10"
  period: string; // "/ month"
  blurb: string;
  accent: Accent;
  badge?: string; // e.g. "most chosen"
};

export const TIERS: Tier[] = [
  {
    label: "tier one",
    name: "cornerstone",
    price: "$10",
    period: "/ month",
    blurb: "the first stone laid. every house starts with one.",
    accent: "blue",
  },
  {
    label: "tier two",
    name: "keystone",
    price: "$50",
    period: "/ month",
    blurb: "the stone that locks the arch together and holds the weight.",
    accent: "orange",
    badge: "most chosen",
  },
  {
    label: "tier three",
    name: "capstone",
    price: "$100",
    period: "/ month",
    blurb: "the crowning stone at the very top of the build.",
    accent: "green",
  },
];
