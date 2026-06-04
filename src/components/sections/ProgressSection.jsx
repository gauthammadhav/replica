import styles from './ProgressSection.module.css';
import CircularImage from '../ui/CircularImage';
import { RedTriangleLeft } from '../ui/DecorativeShapes';

export default function ProgressSection() {
  return (
    <section
      className={styles.section}
      id="progress"
      aria-label="Progress section"
    >
      <div className={`${styles.inner} container`}>
        {/* Left column — image */}
        <div className={styles.imageCol}>
          {/* Soft green blob behind image */}
          <div className={styles.blob} aria-hidden="true" />

          {/* Triangle top-right */}
          <RedTriangleLeft className={styles.triangleTopRight} size={0.9} />

          <CircularImage
            id="progress-circle"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80"
            alt="Professional working on progress"
            size={420}
          />

          {/* Triangle bottom-left */}
          <RedTriangleLeft className={styles.triangleBottomLeft} size={1.1} />
        </div>

        {/* Right column — text */}
        <div className={styles.textCol}>
          <h2 className={styles.heading}>
            See how we can{'\n'}help you progress
          </h2>
          <p className={styles.body}>
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
          <a href="#contact" className={styles.readMore}>
            Read more <span className={styles.dash}>——————→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
