import shared from "./shared.module.css";
import styles from "./WhatItIs.module.css";

export function WhatItIs() {
  return (
    <section className={`${shared.container} ${styles.section}`}>
      <div className={styles.grid}>
        <div>
          <div className={shared.eyebrow}>what the foundation is</div>
          <h2 className={`${shared.h2} ${styles.heading}`}>
            the recurring donors who have joined the One House Project
          </h2>
        </div>
        <div>
          <p className={shared.lead}>
            Every house starts with a foundation. Ours is built of people. The
            Foundation is a community of charitable investors who believe in the
            work we want to do and want to be involved in what we&apos;re
            building. Pick your tier at $10, $50 or $100 and we&apos;ll thank you
            by recognizing your contribution on this page and offering you
            exclusive membership perks as long as you&apos;re subscribed.
          </p>
        </div>
      </div>
    </section>
  );
}
