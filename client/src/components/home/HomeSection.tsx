import { PropsWithChildren } from 'react';
import styles from './Home.module.scss';

export default function HomeSection({ children }: PropsWithChildren) {
  return <section className={styles.home}>{children}</section>;
}
