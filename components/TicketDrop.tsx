import { ClockIcon, TicketIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { DROP_STOPS, type DropStop } from "@/content/drop";
import { accentVars } from "@/lib/accents";
import shared from "./shared.module.css";
import styles from "./TicketDrop.module.css";

function DropCard({ stop }: { stop: DropStop }) {
  const Badge = stop.badgeIcon;
  return (
    <div className={styles.timelineCol}>
      <div className={styles.dot} style={accentVars(stop.accent)} />
      <div
        className={`${shared.card} ${styles.card}`}
        style={accentVars(stop.accent)}
      >
        <div className={shared.cardStripe} />
        <div className={styles.cardBody}>
          <div className={styles.overline}>{stop.overline}</div>
          <div className={styles.badge}>
            <Badge aria-hidden /> {stop.badgeLabel}
          </div>
          <div className={styles.date}>{stop.date}</div>
          <div className={styles.time}>
            <ClockIcon aria-hidden /> {stop.time}
          </div>
          <div className={styles.ticketsRow}>
            <TicketIcon className={styles.ticketIcon} aria-hidden />
            <span className={styles.bigNum}>{stop.tickets}</span>
            <span className={styles.muted}>tickets</span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.price}>{stop.price}</span>
            <span className={styles.muted}>/ month to unlock</span>
          </div>
          <p className={styles.note}>{stop.note}</p>
        </div>
      </div>
    </div>
  );
}

/* ===== TEMPORARY: HUNTSVILLE HOPE CLASSIC TICKET DROP =====
   Remove this whole section after the drop closes (late June 2026), along with
   the hero marquee, the exclusivity callout, and the brand-moment free-ticket copy. */
export function TicketDrop() {
  return (
    <section className={styles.section}>
      {/* Full-bleed Huntsville Hope Classic banner */}
      <div className={styles.banner}>
        <div className={styles.bannerLight1} aria-hidden />
        <div className={styles.bannerLight2} aria-hidden />
        <div className={styles.bannerTopRule} aria-hidden />
        <div className={styles.bannerBottomRule} aria-hidden />
        <div className={styles.bannerFrame} aria-hidden />

        <div className={styles.bannerInner}>
          <div className={styles.presenter}>
            <img
              src="/assets/logo-white.svg"
              alt="the onehouse project"
              className={styles.presenterLogo}
            />
            <span className={styles.presenterDivider} />
            <span className={styles.presents}>presents</span>
          </div>

          <div className={styles.inauguralPill}>
            <span className={styles.pillDot} />
            <span>first membership perk · 2026</span>
          </div>

          <h2 className={styles.hhcLockup}>
            Huntsville <span className={styles.hhcHope}>Hope</span> Classic
          </h2>

          <div className={styles.goldDivider}>
            <span className={styles.goldLine} />
            <span className={styles.goldDot} />
            <span className={styles.goldLine} />
          </div>
          <div className={styles.theDrop}>
            june 29 • canebrake club • golf tournament
          </div>
        </div>
      </div>

      {/* Padded content */}
      <div className={`${shared.container} ${styles.content}`}>
        {/* staccato tournament beats */}
        <div className={styles.lead}>
          <div className={styles.leadLabel}>
            you&apos;ve seen the ads. here&apos;s the short version.
          </div>
          <div className={styles.beats}>
            <span className={styles.beat}>$15,000 in prizes.</span>
            <span className={styles.beatDot} />
            <span className={styles.beat}>NFL players.</span>
            <span className={styles.beatDot} />
            <span className={`${styles.beat} ${styles.beatFree}`}>free.</span>
          </div>
        </div>

        {/* drop timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden />
          <div className={styles.timelineGrid}>
            {DROP_STOPS.map((stop) => (
              <DropCard key={stop.overline} stop={stop} />
            ))}
          </div>
        </div>

        {/* explainer CTA */}
        <div className={styles.explainer}>
          <div className={styles.explainerHand}>haven&apos;t seen our ads?</div>
          <a
            href="https://onehouseproject.com/golf"
            target="_blank"
            rel="noopener"
            className={styles.explainerCta}
          >
            learn more about the event{" "}
            <ArrowUpRightIcon className={styles.explainerArrow} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
/* ===== END TEMPORARY: TICKET DROP ===== */
