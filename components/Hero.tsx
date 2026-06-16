import { Nav } from "./Nav";
import { BecomeFounderButton } from "./BecomeFounderButton";
import styles from "./Hero.module.css";

function MarqueeItem() {
  return (
    <span className={styles.marqueeItem}>
      <span className={styles.marqueeText}>
        Huntsville <span className={styles.marqueeHope}>Hope</span> Classic
      </span>
      <span className={styles.marqueeDot} />
    </span>
  );
}

function MarqueeGroup() {
  return (
    <>
      <MarqueeItem />
      <MarqueeItem />
      <MarqueeItem />
      <MarqueeItem />
    </>
  );
}

export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      {/* blue gradient bursts */}
      <div className={styles.burst1} aria-hidden />
      <div className={styles.burst2} aria-hidden />

      <Nav />

      <div className={styles.content}>
        {/* PRIMARY: the ad payoff line */}
        <h1 className={styles.h1}>
          join the
          <br />
          project
        </h1>

        {/* SECONDARY: the reveal — this drive's sub-brand is the foundation */}
        <div className={styles.reveal}>
          <div className={styles.overlineRow}>
            <span className={styles.hairline} />
            <span className={styles.overline}>our founding membership drive</span>
            <span className={styles.hairline} />
          </div>
          <img
            src="/assets/the-foundation-wordmark.svg"
            alt="the foundation"
            className={styles.wordmark}
          />
        </div>

        {/* TEMPORARY (ticket drop): free-ticket teaser + Huntsville Hope Classic marquee.
            Remove together with the Ticket Drop section after the drop closes. */}
        <div className={styles.beat3}>
          <div className={styles.beat3Label}>and get a free ticket to the</div>
          <div className={styles.marqueeMask}>
            <div className={styles.marqueeTrack} data-hhc-track>
              <MarqueeGroup />
              <MarqueeGroup />
            </div>
          </div>
        </div>
        {/* END TEMPORARY */}

        <div className={styles.ctas}>
          <BecomeFounderButton size="lg" arrow />
          <a href="#wall" className={styles.secondaryCta}>
            see the wall
          </a>
        </div>
      </div>
    </header>
  );
}
