import { CheckCircleIcon } from "@phosphor-icons/react/ssr";
import { TIERS } from "@/content/tiers";
import { accentVars } from "@/lib/accents";
import { BecomeFounderButton } from "./BecomeFounderButton";
import shared from "./shared.module.css";
import styles from "./Tiers.module.css";

export function Tiers() {
  return (
    <section className={`${shared.container} ${styles.section}`}>
      <div className={shared.centerHead}>
        <div className={shared.eyebrow}>how to become a founder</div>
        <h2 className={shared.h2}>choose your tier</h2>
      </div>

      <div className={styles.grid}>
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`${shared.card} ${styles.card}`}
            data-featured={tier.badge ? "" : undefined}
            style={accentVars(tier.accent)}
          >
            <div className={shared.cardStripe} />
            <div className={styles.body}>
              <div className={styles.labelRow}>
                <div className={styles.label}>{tier.label}</div>
                {tier.badge && <span className={styles.badge}>{tier.badge}</span>}
              </div>
              <h3 className={styles.name}>{tier.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>{tier.price}</span>
                <span className={styles.period}>{tier.period}</span>
              </div>
              <div className={styles.blurbRow}>
                <CheckCircleIcon className={styles.check} aria-hidden />
                <span className={styles.blurb}>{tier.blurb}</span>
              </div>
              <div className={styles.ctaWrap}>
                <BecomeFounderButton
                  size="lg"
                  arrow
                  className={styles.tierCta}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
