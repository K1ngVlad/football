import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BurgerMenu, Footer, Header } from '@/components';
import { BurgerMenuProvider, PopupProvider, StoreProvider } from '@/providers';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Футбол',
  description: 'Занятия футболом',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Head>
        <link rel="shortcut icon" href="/src/assets/logo.png" />
      </Head>
      <body className={inter.className}>
        <StoreProvider>
          <PopupProvider>
            <BurgerMenuProvider component={<BurgerMenu />}>
              <Header />
              {children}
              <Footer />
            </BurgerMenuProvider>
          </PopupProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
