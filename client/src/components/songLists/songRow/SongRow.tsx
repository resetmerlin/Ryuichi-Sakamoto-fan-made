import styles from './SongRow.module.scss';

export default function SongRow() {
  return (
    <button className={styles.songRow}>
      <img src="./song1.jpg" alt="song1" />
      <div className={styles.songRow__text}>
        <span>Amore</span>
        <span>Ryuichi Sakamoto</span>
      </div>
      <i className={`bx bx-play-circle ${styles.songRow__icon}`}></i>
    </button>
  );
}
