import { BecomeFounderButton } from "./BecomeFounderButton";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <img
            src="/assets/logo-color.svg"
            alt="the onehouse project"
            className={styles.logo}
          />
          <p className={styles.legal}>
            One House Project, Inc. is a 501c3 nonprofit organization.
          </p>
        </div>
        <BecomeFounderButton size="lg" arrow />
      </div>
    </footer>
  );
}
