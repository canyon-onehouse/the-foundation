import { UserCirclePlusIcon } from "@phosphor-icons/react/ssr";
import { WALL_BANDS, type WallBand } from "@/content/wall";
import { accentVars } from "@/lib/accents";
import shared from "./shared.module.css";
import styles from "./Wall.module.css";

function Band({ band }: { band: WallBand }) {
  return (
    <div className={styles.band} style={accentVars(band.accent)}>
      <div className={styles.bandHead}>
        <span className={styles.dot} />
        <h3 className={styles.bandName}>{band.name}</h3>
        <span className={styles.pricePill}>{band.price}</span>
        <span className={styles.access}>{band.access}</span>
        <span className={styles.rule} />
      </div>

      {band.names.length > 0 ? (
        <ul className={styles.names}>
          {band.names.map((name) => (
            <li key={name} className={styles.name}>
              {name}
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.placeholder}>
          <div className={styles.avatar}>
            <UserCirclePlusIcon className={styles.avatarIcon} aria-hidden />
          </div>
          <div>
            <div className={styles.placeholderTitle}>{band.placeholderTitle}</div>
            <p className={styles.placeholderText}>{band.placeholderText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function Wall() {
  return (
    <section id="wall" className={styles.section}>
      <div className={shared.container}>
        <div className={styles.head}>
          <div className={shared.eyebrow}>the foundation wall</div>
          <h2 className={styles.heading}>your name belongs here</h2>
          <p className={styles.intro}>
            every member&apos;s name is etched onto the wall and will remain here
            as long as you remain a part of the project.
          </p>
        </div>

        <div className={styles.bands}>
          {WALL_BANDS.map((band) => (
            <Band key={band.name} band={band} />
          ))}
        </div>
      </div>
    </section>
  );
}
