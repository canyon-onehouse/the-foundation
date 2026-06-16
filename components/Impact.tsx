import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { IMPACT } from "@/content/impact";
import { accentVars } from "@/lib/accents";
import shared from "./shared.module.css";
import styles from "./Impact.module.css";

export function Impact() {
  return (
    <section className={styles.section}>
      <div className={shared.container}>
        <div className={styles.head}>
          <div className={shared.eyebrow}>where your money goes</div>
          <h2 className={shared.h2}>the impact</h2>
          <p className={`${shared.lead} ${styles.intro}`}>
            three ways the foundation turns monthly gifts into a stronger safety
            net for huntsville.
          </p>
        </div>

        <div className={styles.grid}>
          {IMPACT.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`${shared.card} ${styles.card}`}
                style={accentVars(card.accent)}
              >
                <div className={shared.cardStripe} />
                <div className={styles.cardBody}>
                  <div className={styles.iconBox}>
                    <Icon className={styles.icon} aria-hidden />
                  </div>
                  <div className={styles.overline}>{card.overline}</div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.blurb}>{card.blurb}</p>
                  {card.link && (
                    <a
                      href={card.link.href}
                      target="_blank"
                      rel="noopener"
                      className={styles.link}
                    >
                      {card.link.label}{" "}
                      <ArrowRightIcon className={styles.linkArrow} aria-hidden />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
