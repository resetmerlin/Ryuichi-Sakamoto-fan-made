import styles from './SongLists.module.scss';
import { SongRow } from './songRow';

export default function SongLists() {
  return (
    <div className={styles.songLists}>
      <span className={styles.songLists__title}>TRENDING SONGS</span>
      <SongRow />
    </div>
  );
}
