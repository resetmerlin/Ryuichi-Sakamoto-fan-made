import { Description, Donut, Header } from '../../components';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="container">
        <section className={styles.home}>
          <Donut />
          <Description />
        </section>
      </main>
    </>
  );
}
