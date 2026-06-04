import styles from './TestimonialSection.module.css';

import t1 from '../../../images/t1.png';
import t2 from '../../../images/t2.png';
import t3 from '../../../images/t3.png';
import t4 from '../../../images/t4.png';
import t5 from '../../../images/t5.png';
import t6 from '../../../images/t6.png';
import t7 from '../../../images/t7.png';
import t8 from '../../../images/t8.png';

/**
 * 8 floating circles extracted from the Figma/screenshot design.
 *
 * LEFT (4):
 *  1. Medium  ~110px  top:13%  left:7%
 *  2. Small   ~60px   top:42%  left:3%
 *  3. Large   ~200px  top:32%  left:9%   ← the big prominent one
 *  4. Small   ~65px   top:68%  left:3%
 *
 * RIGHT (4):
 *  5. Medium  ~90px   top:10%  right:14%
 *  6. Large   ~120px  top:7%   right:4%
 *  7. Medium  ~100px  top:40%  right:7%
 *  8. XLarge  ~260px  top:42%  right:-20px ← bleeds off screen
 */

const circles = [
  // LEFT
  { id: 1, size: 110, style: { top: '10%', left: '8%' }, src: t1 },
  { id: 2, size: 60, style: { top: '40%', left: '4%' }, src: t2 },
  { id: 3, size: 180, style: { top: '45%', left: '9%' }, src: t3 },
  { id: 4, size: 80, style: { top: '70%', left: '3%' }, src: t4 },
  // RIGHT
  { id: 5, size: 80, style: { top: '22%', right: '16%' }, src: t6 },
  { id: 6, size: 110, style: { top: '10%', right: '3%' }, src: t7 },
  { id: 7, size: 100, style: { top: '44%', right: '11%' }, src: t8 },
  { id: 8, size: 240, style: { top: '58%', right: '1%' }, src: t5 }, // t5 mapped to the biggest circle
];

export default function TestimonialSection() {
  return (
    <section
      className={styles.testimonialSection}
      id="testimonials"
      aria-label="Testimonials"
    >
      {/* ── 8 Floating circular photos ── */}
      {circles.map(({ id, size, style, src }) => (
        <div
          key={id}
          className={styles.photo}
          style={{ width: size, height: size, ...style }}
          data-slot={`photo-${id}`}
          aria-label={`Customer photo ${id}`}
        >
          {src ? (
            <img src={src} alt={`Testimonial ${id}`} />
          ) : (
            <svg
              className={styles.placeholderSvg}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="50" cy="36" r="18" fill="#BBBBBB" />
              <ellipse cx="50" cy="82" rx="28" ry="20" fill="#BBBBBB" />
            </svg>
          )}
        </div>
      ))}

      {/* ── CENTER content ── */}
      <div className={styles.center}>
        <h2 className={styles.heading}>
          <span className={styles.whatHighlight}>What</span>
          {' our customer'}
          <br />
          {'says '}
          <span className={styles.aboutUnderline}>About Us</span>
        </h2>

        <div className={styles.quoteCard}>
          <span className={styles.openQuote}>{'\u201C'}</span>
          <p className={styles.quoteText}>
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to
            be easy to use and reliable.
          </p>
          <span className={styles.closeQuote}>{'\u201D'}</span>
        </div>
      </div>
    </section>
  );
}
