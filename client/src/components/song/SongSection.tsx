import { PropsWithChildren } from 'react';
import styles from './Song.module.scss';

export default function SongSection({ children }: PropsWithChildren) {
  return <section className={styles.song}>{children}</section>;
}
