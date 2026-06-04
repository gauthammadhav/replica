import styles from './NewsletterSection.module.css';
import { PurpleTeardrop, RedSquiggle } from './ui/DecorativeShapes';

export default function NewsletterSection() {
  return (
    <section className={styles.section} id="newsletter" aria-label="Newsletter subscription section">
      {/* Decorative elements */}
      <RedSquiggle className={styles.squiggleTopLeft} width={120} height={70} />
      <PurpleTeardrop className={styles.teardropBottomRight} />

      <div className={`${styles.inner} container`}>
        <h2 className={styles.heading}>
          Subscribe to<br />our newsletter
        </h2>
        <p className={styles.subtext}>
          Stay up to date with our latest news, projects, and insights.
          No spam, unsubscribe at any time.
        </p>
        <button
          className={styles.button}
          id="subscribe-btn"
          type="button"
          aria-label="Subscribe to newsletter"
        >
          Subscribe Now
        </button>
      </div>
    </section>
  );
}
