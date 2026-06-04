import styles from './ServicesSection.module.css';
import HighlightedText from './ui/HighlightedText';

const services = [
  {
    id: 1,
    label: 'Office of multiple interest content',
    name: 'Collaborative & partnership',
  },
  {
    id: 2,
    label: 'The hanger US Air force digital experimental',
    name: 'We talk about our weight',
  },
  {
    id: 3,
    label: 'Delta faucet content, social, digital',
    name: 'Piloting digital confidence',
  },
];

/**
 * OfferUnderline — hand-drawn style double zigzag SVG beneath "offer"
 * Matches Figma's golden/yellow scribble underline (#C9B84C).
 */
function OfferUnderline() {
  return (
    <svg
      className={styles.offerUnderline}
      viewBox="0 0 160 14"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Upper zigzag line */}
      <path
        d="M0,5 Q20,0 40,5 Q60,10 80,5 Q100,0 120,5 Q140,10 160,5"
        stroke="#C9B84C"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Lower zigzag line — offset for double-line scribble effect */}
      <path
        d="M0,9 Q20,4 40,9 Q60,14 80,9 Q100,4 120,9 Q140,14 160,9"
        stroke="#C9B84C"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
    </svg>
  );
}

/**
 * SweepingHook — perfectly matched S-curve.
 */
function SweepingHook() {
  const d = 'M -70 140 C -50 160, -30 160, -20 120 C -10 80, 50 20, 150 20 C 350 20, 450 140, 650 140 C 750 140, 850 40, 950 40';
  return (
    <svg
      className={styles.sweepingHook}
      viewBox="-100 0 1000 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="sweepingShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="6"
            floodColor="#FF6B6B"
            floodOpacity="0.3"
          />
        </filter>
      </defs>
      <path
        d={d}
        stroke="#FF6B6B"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        filter="url(#sweepingShadow)"
      />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services" aria-label="Services section">
      <div className={`${styles.inner} container`}>
        {/* Section heading block */}
        <div className={styles.headingBlock}>
          <h2 className={styles.heading}>
            What we{' '}
            <HighlightedText type="bg-green-box">can</HighlightedText>
            <br />
            {/* "offer" wrapped for the zigzag underline */}
            <span className={styles.offerWrap}>
              offer
              <OfferUnderline />
            </span>
            {' '}you!
          </h2>
          
          {/* Hook is positioned absolutely relative to the heading text block */}
          <SweepingHook />
        </div>

        {/* Services list */}
        <div className={styles.servicesList} role="list">
          {services.map((service) => (
            <div
              key={service.id}
              className={styles.serviceRow}
              role="listitem"
            >
              <span className={styles.serviceLabel}>{service.label}</span>
              <span className={styles.serviceName}>{service.name}</span>
              <span className={styles.serviceArrow} aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
