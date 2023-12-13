import { ISong, ISongs } from '../../types';
import styles from './SongLists.module.scss';
import { SongRow } from './songRow';

type IProps = {
  songs: ISongs;
  playMusic: (song: ISong) => void;
};

export default function SongLists({ songs, playMusic }: IProps) {
  return (
    <div className={styles.songLists}>
      <span className={styles.songLists__title}>TRENDING SONGS</span>

      {songs &&
        songs.map((song: ISong) => (
          <SongRow
            song={song}
            playMusic={playMusic}
            key={`${song.artist} + ${song.name}`}
          />
        ))}
    </div>
  );
}
