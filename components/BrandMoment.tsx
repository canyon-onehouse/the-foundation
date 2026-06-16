import styles from "./BrandMoment.module.css";

/* TEMPORARY (ticket drop): "claim your free ticket" perk moment.
   Remove together with the Ticket Drop section after the drop closes. */
export function BrandMoment() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <img src="/assets/symbol-color.svg" alt="" className={styles.glyph} />
        <div className={styles.eyebrow}>membership perks</div>
        <p className={styles.headline}>
          thank you.
          <br />
          now claim your <span className={styles.highlight}>free ticket</span>
        </p>
      </div>
    </section>
  );
}
