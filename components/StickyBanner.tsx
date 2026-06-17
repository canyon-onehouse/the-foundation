"use client";

import { useSyncExternalStore } from "react";
import { TicketIcon, ClockIcon } from "@phosphor-icons/react/ssr";
import { givebutterTriggerProps } from "@/lib/givebutter";
import { trackBecomeFounderClick } from "@/lib/analytics";
import styles from "./StickyBanner.module.css";

/* ===== TEMPORARY: sticky free-ticket countdown banner =====
   Tied to the Huntsville Hope Classic ticket drop. Remove after the drop closes
   (drop the <StickyBanner /> from app/page.tsx and delete this component). */

// Membership deadline — June 23, 2026, end of day Central.
const DEADLINE = new Date("2026-06-23T23:59:59-05:00").getTime();

function computeDaysLeft(): number {
  return Math.max(0, Math.ceil((DEADLINE - Date.now()) / 86_400_000));
}

// Client-only value via useSyncExternalStore: server renders null (→ "ends june 23"),
// the client renders the real countdown after hydration — no mismatch, no setState-in-effect.
const subscribe = () => () => {};

export function StickyBanner() {
  const daysLeft = useSyncExternalStore(
    subscribe,
    computeDaysLeft,
    () => null,
  );

  const chipLabel =
    daysLeft === null
      ? "ends june 23"
      : daysLeft <= 1
        ? "last day"
        : `${daysLeft} days left`;

  return (
    <aside className={styles.banner} aria-label="Founding-membership offer">
      <div className={styles.inner}>
        <span className={styles.chip}>
          <ClockIcon aria-hidden /> {chipLabel}
        </span>

        <p className={styles.message}>
          join<span className={styles.long}> the foundation</span> by{" "}
          <span className={styles.gold}>june 23</span> to claim your{" "}
          <span className={styles.gold}>
            free<span className={styles.long}> huntsville hope classic</span>{" "}
            ticket
          </span>
        </p>

        <button
          type="button"
          {...givebutterTriggerProps}
          onClick={trackBecomeFounderClick}
          className={styles.cta}
        >
          <TicketIcon aria-hidden /> claim my ticket
        </button>
      </div>
    </aside>
  );
}
/* ===== END TEMPORARY: sticky banner ===== */
