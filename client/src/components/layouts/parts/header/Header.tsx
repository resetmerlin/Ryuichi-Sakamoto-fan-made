import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div id="header" className={styles.header}>
      <div className={styles.header__left}>
        <Link to="/">Ryuichi Sakamoto</Link>
      </div>

      <div className={styles.header__right}>
        <Link to="songs">Songs</Link>
        <Link to="/">About</Link>
        <Link to="/">How to use</Link>
        <Link to="/">Services</Link>
      </div>
    </div>
  );
}
