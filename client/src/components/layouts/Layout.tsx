import { PropsWithChildren } from 'react';
import { Header } from './parts';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main id="container">{children}</main>
    </>
  );
}
