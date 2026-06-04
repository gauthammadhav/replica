import styles from './Footer.module.css';

const footerColumns = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Careers', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
  {
    title: 'Get in Touch',
    links: [
      '123 Main St, New York',
      '+1 (555) 000-0000',
      'hello@elementum.co',
      'Contact Us',
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact" aria-label="Footer">
      <div className={styles.divider} />

      <div className={`${styles.inner} container`}>
        {footerColumns.map((col) => (
          <div key={col.title} className={styles.column}>
            <h3 className={styles.colTitle}>{col.title}</h3>
            <ul className={styles.colLinks} role="list">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.colLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.copyright}>
        <div className={styles.copyrightLine}>
          ©2021 Elementum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
