import type { Icon } from "@phosphor-icons/react";
import {
  LightningIcon,
  TimerIcon,
  ConfettiIcon,
} from "@phosphor-icons/react/ssr";
import type { Accent } from "@/lib/accents";

export type DropStop = {
  overline: string; // "capstone · tier 3"
  badgeIcon: Icon;
  badgeLabel: string; // "earliest access"
  date: string; // "wed · jun 24"
  time: string; // "portal opens 5:30 pm"
  tickets: string; // "15"
  price: string; // "$100"
  note: string;
  accent: Accent;
};

/** Ordered earliest → latest, matching the timeline (Capstone → Keystone → Cornerstone). */
export const DROP_STOPS: DropStop[] = [
  {
    overline: "capstone · tier 3",
    badgeIcon: LightningIcon,
    badgeLabel: "earliest access",
    date: "wed · jun 24",
    time: "portal opens 5:30 pm",
    tickets: "15",
    price: "$100",
    note: "first crack at the drop — claim before any other tier opens.",
    accent: "green",
  },
  {
    overline: "keystone · tier 2",
    badgeIcon: TimerIcon,
    badgeLabel: "early window",
    date: "thu · jun 25",
    time: "portal opens 5:30 pm",
    tickets: "15",
    price: "$50",
    note: "your window opens a day after capstone — plenty still on the board.",
    accent: "orange",
  },
  {
    overline: "cornerstone · tier 1",
    badgeIcon: ConfettiIcon,
    badgeLabel: "the main drop",
    date: "fri · jun 26",
    tickets: "30",
    time: "portal opens 5:30 pm",
    price: "$10",
    note: "the biggest release — 30 tickets open to every cornerstone founder.",
    accent: "blue",
  },
];
