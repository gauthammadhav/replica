/**
 * DecorativeShapes — Figma-verified SVG decorative elements
 *
 * Figma inspection confirmed:
 * - Left decoration: TWO curves (black back + coral front)
 * - Purple shape: Rotated rectangular frame with a purple D/semicircle inside
 * - "thinkers" underline: Multiple diagonal gold lines (cross-hatch scribble)
 * - Red triangle: Solid right-angle triangle
 * - Red squiggle: Wavy path
 */

/**
 * DoubleSquiggle — the black + coral double-curve left decoration
 * Figma: absolute left edge of hero, vertically centered
 */
export function DoubleSquiggle({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width="70"
      height="200"
      viewBox="0 0 70 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Black curve — back layer */}
      <path
        d="M50,10 C10,40 60,80 20,120 C-10,150 50,180 30,200"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Coral/pink curve — front layer, offset slightly left */}
      <path
        d="M38,10 C0,40 50,80 10,120 C-20,150 38,180 18,200"
        stroke="#F28B7D"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * PurpleFrame — Figma-confirmed: a tilted rectangular frame with a
 * purple D-shape (semicircle/half-circle) inside it.
 * Positioned mid-right of hero, partially clipped.
 */
export function PurpleFrame({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width="130"
      height="155"
      viewBox="0 0 130 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Tilted rectangular outline (the frame) */}
      <rect
        x="15"
        y="5"
        width="100"
        height="130"
        rx="2"
        stroke="#8B5CF6"
        strokeWidth="2"
        fill="none"
        transform="rotate(8 65 77)"
      />
      {/* Purple D-shape / semicircle inside the frame */}
      <path
        d="M55,30 L55,120 C90,120 115,100 115,75 C115,50 90,30 55,30 Z"
        fill="#9B72CF"
        transform="rotate(8 65 77)"
      />
    </svg>
  );
}

/**
 * ThinkersUnderline — Figma-confirmed: multiple diagonal gold lines
 * that form a cross-hatch / scribble pattern under "thinkers"
 */
export function ThinkersUnderline({ className = '', style = {}, width = 340 }) {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height="18"
      viewBox={`0 0 ${width} 18`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* Main bold diagonal line */}
      <path
        d={`M0,14 L${width},4`}
        stroke="#C9B84C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Second line below, slightly offset */}
      <path
        d={`M0,18 L${width},8`}
        stroke="#C9B84C"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Third thinner line */}
      <path
        d={`M${width * 0.08},16 L${width},6`}
        stroke="#C9B84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/**
 * PurpleTeardrop — Updated to match design: tilted half-circle (244x244, -120deg rotation)
 */
export function PurpleTeardrop({ className = '', style = {}, size = 1 }) {
  const w = Math.round(244 * size);
  const h = Math.round(244 * size);
  return (
    <svg
      className={className}
      style={style}
      width={w}
      height={h}
      viewBox="0 0 244 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 0 122 A 122 122 0 0 1 244 122 Z"
        fill="#934CEC"
        transform="rotate(-120 122 122)"
      />
    </svg>
  );
}

/**
 * RedTriangle — solid right-angle triangle
 */
export function RedTriangle({ className = '', style = {}, size = 1 }) {
  const w = Math.round(80 * size);
  const h = Math.round(80 * size);
  return (
    <svg
      className={className}
      style={style}
      width={w}
      height={h}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="0,80 80,80 80,0" fill="#E8463A" />
    </svg>
  );
}

/**
 * RedTriangleLeft — mirrored triangle for Progress section
 */
export function RedTriangleLeft({ className = '', style = {}, size = 1 }) {
  const w = Math.round(80 * size);
  const h = Math.round(80 * size);
  return (
    <svg
      className={className}
      style={style}
      width={w}
      height={h}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="80,80 0,80 0,0" fill="#E8463A" />
    </svg>
  );
}

/**
 * RedSquiggle — wavy red/coral path for section transitions
 */
export function RedSquiggle({ className = '', style = {}, width = 120, height = 80 }) {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10,40 C30,10 50,70 70,40 C90,10 110,70 120,40"
        stroke="#E8463A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * YellowScribble — A messy, overlapping hand-drawn underline
 */
export function YellowScribble({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={{ ...style, overflow: 'visible' }}
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0,10 Q10,0 20,15 T40,5 T60,18 T80,2 T100,12"
        stroke="#C9B84C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5,12 Q15,20 25,5 T45,15 T65,0 T85,18 T95,8"
        stroke="#C9B84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        d="M2,8 Q12,3 22,12 T42,10 T62,12 T82,8 T98,10"
        stroke="#C9B84C"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}
