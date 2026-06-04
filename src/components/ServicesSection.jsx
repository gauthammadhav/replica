import styles from './ServicesSection.module.css';
import HighlightedText from './ui/HighlightedText';
import { YellowScribble } from './ui/DecorativeShapes';

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
              <YellowScribble className={styles.offerUnderline} />
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
