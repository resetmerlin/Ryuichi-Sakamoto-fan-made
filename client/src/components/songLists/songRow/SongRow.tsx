import { ISong } from '../../../types';
import styles from './SongRow.module.scss';

type IProps = {
  song: ISong;
};
export default function SongRow({ song }: IProps) {
  return (
    <button className={styles.songRow}>
      <img src={song?.img} alt="song1" />
      <div className={styles.songRow__text}>
        <span>{song?.name}</span>
        <span>{song?.artist}</span>
      </div>
      <i className={`bx bx-play-circle ${styles.songRow__icon}`}></i>
    </button>
  );
}
