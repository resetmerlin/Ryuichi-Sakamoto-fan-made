import { ISong } from '../../../types';
import styles from './SongRow.module.scss';

type IProps = {
  song: ISong;
  playMusic: (song: ISong) => void;
};
export default function SongRow({ song, playMusic }: IProps) {
  return (
    <button className={styles.songRow} onClick={() => playMusic(song)}>
      <img src={song?.img} alt="song1" />
      <div className={styles.songRow__text}>
        <span>{song?.name}</span>
        <span>{song?.artist}</span>
      </div>
      <i className={`bx bx-play-circle ${styles.songRow__icon}`}></i>
    </button>
  );
}
