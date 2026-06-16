"use client";

import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { givebutterTriggerProps } from "@/lib/givebutter";
import { trackBecomeFounderClick } from "@/lib/analytics";
import styles from "./BecomeFounderButton.module.css";

type Props = {
  /** "sm" = nav pill, "lg" = hero/footer CTA */
  size?: "sm" | "lg";
  /** show the trailing arrow (large CTAs) */
  arrow?: boolean;
  label?: string;
  className?: string;
};

/** Primary donation CTA. The Givebutter script binds to the data-gb-* attributes
 *  and opens the campaign popup; our onClick additionally fires the Meta Pixel lead. */
export function BecomeFounderButton({
  size = "lg",
  arrow = false,
  label = "become a founder",
  className,
}: Props) {
  return (
    <button
      type="button"
      {...givebutterTriggerProps}
      onClick={trackBecomeFounderClick}
      className={[styles.btn, styles[size], className].filter(Boolean).join(" ")}
    >
      {label}
      {arrow && <ArrowRightIcon className={styles.arrow} aria-hidden />}
    </button>
  );
}
