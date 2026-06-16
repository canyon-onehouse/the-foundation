import { BecomeFounderButton } from "./BecomeFounderButton";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#top" aria-label="the onehouse project — top">
        <img
          src="/assets/logo-white.svg"
          alt="the onehouse project"
          className={styles.logo}
        />
      </a>
      <div className={styles.right}>
        <a href="#top" className={styles.link}>
          the foundation
        </a>
        <a
          href="https://onehouseproject.com"
          className={styles.link}
          target="_blank"
          rel="noopener"
        >
          our programs
        </a>
        <BecomeFounderButton size="sm" />
      </div>
    </nav>
  );
}
