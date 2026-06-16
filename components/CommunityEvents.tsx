import { EVENTS } from "@/content/events";
import { accentVars } from "@/lib/accents";
import shared from "./shared.module.css";
import styles from "./CommunityEvents.module.css";

export function CommunityEvents() {
  return (
    <section className={styles.section}>
      <div className={shared.container}>
        {/* lockup */}
        <div className={styles.head}>
          <div className={styles.eyebrow}>what&apos;s coming next</div>
          <img
            src="/assets/logo-color.svg"
            alt="the onehouse project"
            className={styles.logo}
          />
          <div className={styles.title}>event series</div>
          <div className={styles.footingBar}>
            <span style={{ background: "var(--ohp-orange)" }} />
            <span style={{ background: "var(--ohp-pink)" }} />
            <span style={{ background: "var(--ohp-yellow)" }} />
            <span style={{ background: "var(--ohp-blue)" }} />
          </div>
        </div>

        <div className={styles.intro}>
          <p className={shared.lead}>
            spaces for enrichment that are educational, fun, accessible, and
            welcoming — for individuals and the whole community.
          </p>
        </div>

        <div className={styles.grid}>
          {EVENTS.map((ev) => {
            const Icon = ev.icon;
            return (
              <div
                key={ev.title}
                className={`${shared.card} ${styles.card}`}
                style={accentVars(ev.accent)}
              >
                <div className={shared.cardStripe} />
                <div className={styles.cardBody}>
                  <div className={styles.iconBox}>
                    <Icon className={styles.icon} aria-hidden />
                  </div>
                  <div>
                    <div className={styles.overline}>{ev.overline}</div>
                    <h3 className={styles.cardTitle}>{ev.title}</h3>
                    <p className={styles.blurb}>{ev.blurb}</p>
                    <div className={styles.instructor}>
                      <div className={styles.name}>{ev.instructor}</div>
                      <div className={styles.role}>{ev.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
