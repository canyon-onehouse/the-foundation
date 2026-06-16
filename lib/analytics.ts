/** Meta (Facebook) Pixel helpers.
 *  The Pixel ID is public/client-side; default is the production id, overridable via env. */

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1306608097630463";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fire a standard "Lead" event when a visitor clicks a "Become a Founder" CTA.
 *  The actual donation/subscription conversion is tracked via Givebutter's
 *  native Meta Pixel integration (popup completion isn't observable from here). */
export function trackBecomeFounderClick(): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", { content_name: "become_a_founder" });
  }
}
