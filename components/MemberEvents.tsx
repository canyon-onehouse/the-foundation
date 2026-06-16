import {
  BroadcastIcon,
  CompassToolIcon,
  LockSimpleOpenIcon,
  UsersThreeIcon,
  MonitorPlayIcon,
  ChatsCircleIcon,
  InstagramLogoIcon,
  FacebookLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/ssr";
import shared from "./shared.module.css";
import styles from "./MemberEvents.module.css";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/theonehouseproject/",
    icon: InstagramLogoIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582913517584",
    icon: FacebookLogoIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@theonehouseproject",
    icon: YoutubeLogoIcon,
  },
];

export function MemberEvents() {
  return (
    <section className={styles.section}>
      <div className={shared.container}>
        <div className={styles.head}>
          <div className={shared.eyebrow}>members only</div>
          <h2 className={shared.h2}>stay in the room as we build</h2>
          <p className={`${shared.lead} ${styles.intro}`}>
            the foundation isn&apos;t just a name on a wall — it&apos;s a standing
            invitation to follow the work closely and help steer it.
          </p>
        </div>

        <div className={styles.grid}>
          {/* All founders */}
          <div className={styles.cardLight}>
            <div className={styles.cardHead}>
              <div className={styles.iconBoxBlue}>
                <BroadcastIcon className={styles.iconBlue} aria-hidden />
              </div>
              <div>
                <div className={styles.overlineBlue}>every founder</div>
                <h3 className={styles.cardTitle}>town halls &amp; progress updates</h3>
              </div>
            </div>
            <p className={styles.body}>
              throughout the year we bring founders together — in person and over
              livestream — to share where the project stands and walk through
              what&apos;s next. our town halls are built to ensure you know exactly
              what impact your support is having.
            </p>
            <div className={styles.chips}>
              <span className={styles.chip}>
                <UsersThreeIcon className={styles.chipIcon} aria-hidden /> in-person
                gatherings
              </span>
              <span className={styles.chip}>
                <MonitorPlayIcon className={styles.chipIcon} aria-hidden />{" "}
                livestreamed
              </span>
              <span className={styles.chip}>
                <ChatsCircleIcon className={styles.chipIcon} aria-hidden /> open q&amp;a
              </span>
            </div>
          </div>

          {/* Capstone exclusive */}
          <div className={styles.cardDark}>
            <div className={styles.darkStripe} aria-hidden />
            <div className={styles.cardHeadDark}>
              <div className={styles.iconBoxGreen}>
                <CompassToolIcon className={styles.iconGreen} aria-hidden />
              </div>
              <div>
                <div className={styles.capstoneBadge}>
                  <LockSimpleOpenIcon aria-hidden /> capstone only
                </div>
                <h3 className={styles.cardTitleDark}>help direct the work</h3>
              </div>
            </div>
            <p className={styles.bodyDark}>
              capstone founders join interactive working sessions — small,
              hands-on rooms where you help shape the project&apos;s next steps and
              direct what we build and program next.
            </p>
            <div className={styles.darkFooter}>
              <span className={styles.pricePill}>$100 / month</span>
              <span className={styles.darkFooterNote}>
                a seat at the table, not just in the audience.
              </span>
            </div>
          </div>
        </div>

        {/* follow along */}
        <div className={styles.followAlong}>
          <p className={styles.followText}>
            not ready to join yet? follow along and watch the project take shape.
          </p>
          <div className={styles.socials}>
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className={styles.social}
                >
                  <Icon className={styles.socialIcon} aria-hidden /> {s.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
