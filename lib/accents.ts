import type { CSSProperties } from "react";

/** Program accent palette. `stripe` = the vivid brand hue (top bar, dots);
 *  `text` = a darker, readable variant for small labels; `soft` = tinted fill. */
export type Accent = "blue" | "orange" | "green" | "pink" | "yellow";

export const ACCENTS: Record<
  Accent,
  { stripe: string; text: string; soft: string; label: string }
> = {
  // `label` follows the prototype's tier/drop convention: bright hue for
  // blue/orange, a darker readable green (raw #24CB97 is too light on white).
  blue: { stripe: "var(--ohp-blue)", text: "#0A6FB8", soft: "var(--ohp-blue-soft)", label: "var(--ohp-blue)" },
  orange: { stripe: "var(--ohp-orange)", text: "#9A6612", soft: "var(--ohp-orange-soft)", label: "var(--ohp-orange)" },
  green: { stripe: "var(--ohp-green)", text: "#16996E", soft: "var(--ohp-green-soft)", label: "#16996E" },
  pink: { stripe: "var(--ohp-pink)", text: "#C2455F", soft: "var(--ohp-pink-soft)", label: "var(--ohp-pink)" },
  yellow: { stripe: "var(--ohp-yellow)", text: "#9A7A12", soft: "var(--ohp-yellow-soft)", label: "var(--ohp-yellow)" },
};

/** Returns inline CSS custom properties
 *  (--accent / --accent-text / --accent-soft / --accent-label)
 *  to drive an accent-aware card's CSS module. */
export function accentVars(a: Accent): CSSProperties {
  const c = ACCENTS[a];
  return {
    "--accent": c.stripe,
    "--accent-text": c.text,
    "--accent-soft": c.soft,
    "--accent-label": c.label,
  } as CSSProperties;
}
