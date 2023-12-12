import { ISong, ISongs } from '../../types';
import styles from './SongLists.module.scss';
import { SongRow } from './songRow';

type IProps = {
  songs: ISongs;
};

export default function SongLists({ songs }: IProps) {
  return (
    <div className={styles.songLists}>
      <span className={styles.songLists__title}>TRENDING SONGS</span>

      {songs && songs.map((song: ISong) => <SongRow song={song} />)}
    </div>
  );
}
