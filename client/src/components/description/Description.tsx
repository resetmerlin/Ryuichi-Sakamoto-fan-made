import styles from './Description.module.scss';

export default function Description() {
  return (
    <div className={styles.description__container}>
      <div className={styles.description}>
        <span>Ryuichi Sakamoto</span>, Japanese composer, pianist, singer,
        record producer and actor who has pursued a diverse range of s tyles as
        a solo artist and as a member of Yellow Magic Orchestra (YMO).
      </div>
      <div className={styles.nonstop__text}>
        <div className={styles.nonstop__text__scrolling}>
          負けたら終わりじゃなくて。やめたら終わりなんだよね。
        </div>
      </div>
    </div>
  );
}
