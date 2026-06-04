import styles from './Hero.module.css';
import HighlightedText from './ui/HighlightedText';
import { DoubleSquiggle, PurpleFrame } from './ui/DecorativeShapes';

import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import p4 from '../../images/p4.png';
import p5 from '../../images/p5.png';
import p6 from '../../images/p6.png';
import p7 from '../../images/p7.png';
import p8 from '../../images/p8.png';

// ─── Figma-derived avatar layout ──────────────────────────────────────────────
// Source: https://www.figma.com/design/0K35IOZ4Qwqur0b9o2PXlN/Assignment
// Figma frame: 1920px wide. Coordinates below are converted to % of 1920.
//
// Staggered overlapping bubble layout:
//   • 4 pairs of circles, each pair = one circle upper-row + one lower-row
//   • Adjacent circles OVERLAP ~40px (≈ 25% of the smaller circle's diameter)
//   • Circles are sized differently: larger prominent = 170px, standard = 150px
//   • Layer order: circles drawn later in the DOM appear on top (higher z-index)
// ──────────────────────────────────────────────────────────────────────────────

// Figma absolute x,y (in a 1920px frame) → converted to % left / px top
// Container (photoRow) height = 330px accounts for tallest stacked column
// Positions scaled so the rightmost circle ends at ~95% of the container.
// Scale factor 1.246 applied from the 0.9% left anchor:
//   new_left = 0.9% + (old_left - 0.9%) * 1.246
// This gives ~160-190px gaps between pairs and ~40px overlap within each pair.
const photos = [
  // ── PAIR 1 — far left ─────────────────────────────────────────────────────
  { src: p1, size: 170, left:  '0.9%', top: '148px', zIndex: 1 }, // lower
  { src: p2, size: 150, left:  '7.6%', top:  '10px', zIndex: 2 }, // upper

  // ── PAIR 2 — left-center ──────────────────────────────────────────────────
  { src: p3, size: 170, left: '27.7%', top:  '10px', zIndex: 1 }, // upper
  { src: p4, size: 150, left: '35.2%', top: '148px', zIndex: 2 }, // lower

  // ── PAIR 3 — center ───────────────────────────────────────────────────────
  { src: p5, size: 150, left: '53.7%', top:  '10px', zIndex: 1 }, // upper
  { src: p6, size: 150, left: '60.9%', top: '148px', zIndex: 2 }, // lower

  // ── PAIR 4 — far right ────────────────────────────────────────────────────
  { src: p7, size: 170, left: '78.3%', top:  '10px', zIndex: 1 }, // upper
  { src: p8, size: 150, left: '86.0%', top: '148px', zIndex: 2 }, // lower → ends at ~95%
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Hero section">
      {/* Left double-curve squiggle — Figma: black + coral, left edge vertically centered */}
      <DoubleSquiggle className={styles.squiggleLeft} />

      {/* Purple rotated frame + D-shape — Figma: mid-right, partially off-screen */}
      <PurpleFrame className={styles.purpleFrame} />

      <div className={styles.inner}>
        {/* Main heading — Figma: bold geometric sans-serif, ~96px */}
        <h1 className={styles.heading}>
          <span className={styles.line1}>
            The{' '}
            <HighlightedText type="thinkers">thinkers</HighlightedText>
            {' '}and
          </span>
          <span className={styles.line2}>
            doers were{' '}
            <HighlightedText type="bg-pink">changing</HighlightedText>
          </span>
          <span className={styles.line3}>
            the{' '}
            <HighlightedText type="bg-green">status</HighlightedText>
            {' '}Quo with
          </span>
        </h1>

        {/* Subtext paragraph */}
        <p className={styles.subtext}>
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>

      {/* Profile photos — absolutely scattered across full width */}
      <div className={styles.photoRow}>
        {photos.map((p, i) => (
          <div
            key={i}
            className={styles.photoWrapper}
            style={{ width: p.size, height: p.size, left: p.left, top: p.top, zIndex: p.zIndex }}
          >
            <img src={p.src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
