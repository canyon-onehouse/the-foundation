import type { Icon } from "@phosphor-icons/react";
import {
  HandCoinsIcon,
  BuildingsIcon,
  ShareNetworkIcon,
} from "@phosphor-icons/react/ssr";
import type { Accent } from "@/lib/accents";

export type ImpactCard = {
  overline: string;
  title: string;
  blurb: string;
  icon: Icon;
  accent: Accent;
  link?: { label: string; href: string };
};

export const IMPACT: ImpactCard[] = [
  {
    overline: "direct support",
    title: "direct assistance grants",
    blurb:
      "given to people already in crisis housing programs across the city — small, individualized grants to help someone pay a utility bill, catch up on rent, buy food or gas, or whatever they need to avoid a crisis.",
    icon: HandCoinsIcon,
    accent: "orange",
  },
  {
    overline: "our partners",
    title: "unrestricted grants to crisis housing operators",
    blurb:
      "the 20+ members of huntsville's homeless strategy network each house different groups, but their grants often come with narrow allowable uses. we give them flexible funding to round out programming and fill the gaps their funding won't permit.",
    icon: BuildingsIcon,
    accent: "blue",
  },
  {
    overline: "the big picture",
    title: "building toward a connected system",
    blurb:
      "we're working to launch a system that combines people, staff, and software to connect existing partners — a network that links every party together so no one falls through the gaps.",
    icon: ShareNetworkIcon,
    accent: "green",
    link: {
      label: "see our crisis housing work",
      href: "https://onehouseproject.com/crisis-housing",
    },
  },
];
