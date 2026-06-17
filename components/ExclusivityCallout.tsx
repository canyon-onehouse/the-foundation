import { TicketIcon } from "@phosphor-icons/react/ssr";
import shared from "./shared.module.css";
import styles from "./ExclusivityCallout.module.css";

/* TEMPORARY (ticket drop): membership deadline to claim free tickets.
   Remove together with the Ticket Drop section after the drop closes. */
export function ExclusivityCallout() {
  return (
    <section className={`${shared.container} ${styles.section}`}>
      <div className={styles.card}>
        <div className={styles.iconBox}>
          <TicketIcon className={styles.icon} aria-hidden />
        </div>
        <div>
          <div className={styles.eyebrow}>become a member by june 23</div>
          <p className={styles.text}>
            join by june 23 to get a free $600 golf ticket
          </p>
        </div>
      </div>
    </section>
  );
}
