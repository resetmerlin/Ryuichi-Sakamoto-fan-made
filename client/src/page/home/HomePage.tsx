import { Description, Donut, Home, Layout } from '../../components';

export default function HomePage() {
  return (
    <Layout>
      <Home.Section>
        <Donut />
        <Description />
      </Home.Section>
    </Layout>
  );
}
