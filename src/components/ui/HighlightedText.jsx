import { ThinkersUnderline } from './DecorativeShapes';

/**
 * HighlightedText — wraps children in a styled span
 *
 * Figma-verified types:
 *  'thinkers'       → wrapper with diagonal gold cross-hatch SVG underline
 *  'bg-pink'        → #F9C4CE pill, border-radius 60px (Figma-confirmed)
 *  'bg-green'       → #B5D5A8 pill, border-radius 60px (Figma-confirmed)
 *  'bg-green-box'   → #B5D5A8 small box for "can" in services heading
 *  'underline-yellow' → legacy fallback
 */
export default function HighlightedText({
  children,
  type = 'underline-yellow',
}) {
  if (type === 'thinkers') {
    return (
      <span className="highlight-thinkers">
        {children}
        <ThinkersUnderline
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '-4px',
            width: 'calc(100% + 8px)',
            pointerEvents: 'none',
          }}
        />
      </span>
    );
  }

  const classMap = {
    'underline-yellow': 'highlight-yellow-underline',
    'bg-pink': 'highlight-pink',
    'bg-green': 'highlight-green',
    'bg-green-box': 'highlight-green-box',
  };

  return (
    <span className={classMap[type] || classMap['underline-yellow']}>
      {children}
    </span>
  );
}
