import { HandHeartIcon } from "@phosphor-icons/react/ssr";
import shared from "./shared.module.css";
import styles from "./BeyondPerks.module.css";

export function BeyondPerks() {
  return (
    <section className={`${shared.container} ${styles.section}`}>
      <div className={styles.card}>
        <div className={styles.glow} aria-hidden />
        <div className={styles.iconBox}>
          <HandHeartIcon className={styles.icon} aria-hidden />
        </div>
        <div className={styles.text}>
          <div className={styles.eyebrow}>don&apos;t care about free tickets?</div>
          <p className={styles.headline}>
            the perks are just our way of saying thanks. here&apos;s where your
            monthly gift actually goes.
          </p>
        </div>
      </div>
    </section>
  );
}
