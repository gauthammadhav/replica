import styles from './CircularImage.module.css';

export default function CircularImage({ src, size = 80, alt = 'Profile photo', id }) {
  return (
    <div
      id={id}
      className={styles.circle}
      style={{ width: size, height: size }}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

