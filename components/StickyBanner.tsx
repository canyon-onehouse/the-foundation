"use client";

import { useSyncExternalStore } from "react";
import { TicketIcon, ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { givebutterTriggerProps } from "@/lib/givebutter";
import { trackBecomeFounderClick } from "@/lib/analytics";
import styles from "./StickyBanner.module.css";

/* ===== TEMPORARY: sticky free-ticket countdown banner =====
   Tied to the Huntsville Hope Classic ticket drop. Remove after the drop closes
   (drop the <StickyBanner /> from app/page.tsx and delete this component). */

// Membership deadline — June 23, 2026, end of day Central.
const DEADLINE = new Date("2026-06-23T23:59:59-05:00").getTime();

// Live clock via useSyncExternalStore: subscribe ticks every second, the snapshot
// is whole seconds remaining (stable within a render pass). Server snapshot is null
// (deadline-relative time can't be known on the server) → boxes render "--" until
// the client hydrates, so there's no mismatch.
const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
};

const getSnapshot = () => Math.max(0, Math.floor((DEADLINE - Date.now()) / 1000));

const getServerSnapshot = (): number | null => null;

const pad = (n: number) => String(n).padStart(2, "0");

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.box}>
      <span className={styles.num}>{value}</span>
      <span className={styles.unit}>{label}</span>
    </div>
  );
}

export function StickyBanner() {
  const secondsLeft = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const ready = secondsLeft !== null;
  const days = ready ? pad(Math.floor(secondsLeft / 86_400)) : "--";
  const hrs = ready ? pad(Math.floor((secondsLeft % 86_400) / 3_600)) : "--";
  const min = ready ? pad(Math.floor((secondsLeft % 3_600) / 60)) : "--";
  const sec = ready ? pad(secondsLeft % 60) : "--";

  return (
    <aside className={styles.banner} aria-label="Free-ticket window countdown">
      <div className={styles.inner}>
        <div className={styles.message}>
          <TicketIcon className={styles.ticket} aria-hidden />
          <div className={styles.lines}>
            <span className={styles.headline}>
              get a free $600 golf ticket by june 23
            </span>
          </div>
        </div>

        <div
          className={styles.countdown}
          role="timer"
          aria-label="Time remaining until the free-ticket window closes"
        >
          <Unit value={days} label="days" />
          <span className={styles.sep} aria-hidden>
            :
          </span>
          <Unit value={hrs} label="hrs" />
          <span className={styles.sep} aria-hidden>
            :
          </span>
          <Unit value={min} label="min" />
          <span className={styles.sep} aria-hidden>
            :
          </span>
          <Unit value={sec} label="sec" />
        </div>

        <button
          type="button"
          {...givebutterTriggerProps}
          onClick={trackBecomeFounderClick}
          className={styles.cta}
        >
          join the project <ArrowRightIcon aria-hidden />
        </button>
      </div>
    </aside>
  );
}
/* ===== END TEMPORARY: sticky banner ===== */
