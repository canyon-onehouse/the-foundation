import type { Icon } from "@phosphor-icons/react";
import {
  FilmSlateIcon,
  BuildingsIcon,
  BrainIcon,
  HeartbeatIcon,
} from "@phosphor-icons/react/ssr";
import type { Accent } from "@/lib/accents";

export type EventCard = {
  overline: string;
  title: string;
  blurb: string;
  instructor: string;
  role: string;
  icon: Icon;
  accent: Accent;
};

export const EVENTS: EventCard[] = [
  {
    overline: "filmmaking masterclass",
    title: "from script to screen",
    blurb:
      "a working director walks founders through how a story becomes a finished film.",
    instructor: "Jahmar Hill",
    role: "accomplished filmmaker",
    icon: FilmSlateIcon,
    accent: "orange",
  },
  {
    overline: "real estate masterclass",
    title: "from nothing to a portfolio",
    blurb:
      "how to build a multi-million-dollar real estate portfolio, starting from zero.",
    instructor: "Chris Richtsmeier",
    role: "successful real estate investor",
    icon: BuildingsIcon,
    accent: "blue",
  },
  {
    overline: "ai workshop",
    title: "ai for business leaders",
    blurb:
      "a practical, no-hype session on putting ai to work — built for leaders, not engineers.",
    instructor: "Canyon Browning",
    role: "former software executive and developer",
    icon: BrainIcon,
    accent: "green",
  },
  {
    overline: "health & wellness workshop",
    title: "the full spectrum of wellness",
    blurb:
      "traditional and holistic medicine, side by side — the whole picture of staying well.",
    instructor: "Dr. Dennis Sehgal & Kenesha Fudge",
    role: "physician & naturopath",
    icon: HeartbeatIcon,
    accent: "pink",
  },
];
