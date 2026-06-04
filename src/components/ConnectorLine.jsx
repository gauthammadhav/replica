import { useEffect, useRef, useState } from 'react';
import styles from './ConnectorLine.module.css';

/**
 * ConnectorLine — draws a coral S-curve connecting the About circle (right)
 * to the Progress circle (left).
 *
 * Uses an absolutely-positioned SVG that sits in a wrapper spanning both
 * sections. The SVG covers the full wrapper height so we can draw the path
 * from one circle to the other using their bounding rect coordinates relative
 * to the wrapper.
 */
export default function ConnectorLine({ aboutImageId, progressImageId }) {
  const wrapperRef = useRef(null);
  const [path, setPath]     = useState(null);
  const [svgH, setSvgH]     = useState(400);   // wrapper height in px

  useEffect(() => {
    function calculate() {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const aboutEl = document.getElementById(aboutImageId);
      const progEl  = document.getElementById(progressImageId);
      if (!aboutEl || !progEl) return;

      const wRect  = wrapper.getBoundingClientRect();
      const aRect  = aboutEl.getBoundingClientRect();
      const pRect  = progEl.getBoundingClientRect();

      // Convert element screen coords → coords inside the wrapper
      // wRect.top can vary as the user scrolls, so use offsetTop from document
      const wTop = wrapper.offsetTop; // px from document top (scroll-invariant)

      const aTop  = aboutEl.getBoundingClientRect().top + window.scrollY;
      const pTop  = progEl.getBoundingClientRect().top  + window.scrollY;

      // Start: bottom-center of About circle (relative to wrapper top)
      const x1 = aRect.left + aRect.width  / 2;   // screen x (no scroll offset for x)
      const y1 = (aTop + aRect.height) - wTop;     // bottom of circle from wrapper top

      // End: top-center of Progress circle (relative to wrapper top)
      const x2 = pRect.left + pRect.width / 2;
      const y2 = pTop - wTop;                      // top of circle from wrapper top

      // SVG width = viewport width, height = total wrapper height
      const totalH = Math.max(y2 + pRect.height + 60, y1 + 60);
      setSvgH(totalH);

      const dx = x2 - x1;
      const dy = y2 - y1;

      // Wide S-curve control points
      const cp1x = x1 + dx * 0.1;
      const cp1y = y1 + dy * 0.6;
      const cp2x = x1 + dx * 0.8;
      const cp2y = y1 + dy * 0.3;

      setPath(`M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`);
    }

    // Small delay to let layout settle after mount
    const t = setTimeout(calculate, 100);
    window.addEventListener('resize', calculate);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', calculate);
    };
  }, [aboutImageId, progressImageId]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <svg
        className={styles.svg}
        style={{ height: svgH }}
        viewBox={`0 0 ${typeof window !== 'undefined' ? window.innerWidth : 1440} ${svgH}`}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Drop shadow filter for the main stroke */}
          <filter id="lineShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="6"
              floodColor="#E8463A"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {path && (
          <>
            {/* Layer 1 — wide soft coral glow (outermost halo) */}
            <path
              d={path}
              stroke="#F28B7D"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              opacity="0.15"
            />
            {/* Layer 2 — medium halo */}
            <path
              d={path}
              stroke="#E8463A"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.28"
            />
            {/* Layer 3 — crisp main stroke with drop shadow */}
            <path
              d={path}
              stroke="#E8463A"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#lineShadow)"
            />
          </>
        )}
      </svg>
    </div>
  );
}

