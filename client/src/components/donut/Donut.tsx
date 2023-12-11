import styles from './Donut.module.scss';

export default function Donut() {
  return (
    <div className={styles.donut}>
      <div className={styles.donut__img}></div>
      <div className={styles.donut__effect__innerBlurr}></div>
    </div>
  );
}
