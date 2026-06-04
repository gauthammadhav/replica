import styles from './AboutSection.module.css';
import CircularImage from './ui/CircularImage';
import HighlightedText from './ui/HighlightedText';
import { RedTriangle } from './ui/DecorativeShapes';

export default function AboutSection() {
  return (
    <section className={styles.section} id="studio" aria-label="About section">
      <div className={`${styles.inner} container`}>
        {/* Left column — text */}
        <div className={styles.textCol}>
          <h2 className={styles.heading}>
            <HighlightedText type="thinkers">tomorrow</HighlightedText> should{'\n'}be better than <HighlightedText type="bg-green">today</HighlightedText>
          </h2>
          <p className={styles.body}>
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to play things safe.
          </p>
          <a href="#contact" className={styles.readMore}>
            Read more <span className={styles.arrow}>——————→</span>
          </a>
        </div>

        {/* Right column — image with decorative elements */}
        <div className={styles.imageCol}>
          {/* Radial blob background */}
          <div className={styles.blob} aria-hidden="true" />

          {/* Red triangle — top left corner of image */}
          <RedTriangle
            className={styles.triangleTopLeft}
            size={0.9}
          />

          <CircularImage
            id="about-circle"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&q=80"
            alt="Team collaborating in a modern office"
            size={420}
          />

          {/* Red triangle — bottom right corner */}
          <RedTriangle
            className={styles.triangleBottomRight}
            size={1.1}
          />
        </div>
      </div>

    </section>
  );
}
