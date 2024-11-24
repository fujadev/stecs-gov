import type { FC, ReactNode } from 'react';
import { ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import Providers from './providers';

import localFont from 'next/font/local';
import './globals.css';
import StoreModal from '@/components/Common/StoreModal';

export const metadata: Metadata = {
  title: 'Stecs',
  description: 'Crowdfunding platform for everyone',
};

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const aeonikFont = localFont({
  src: [
    { path: '../assets/fonts/aeonik/aeonik-light.otf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/aeonik/aeonik-regular.otf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/aeonik/aeonik-bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-aeonik',
});


const RootLayout: FC<RootLayoutProps> = ({
  children,
  params: { locale },
}) => (
  <html lang={locale}>
    <head>
      <ColorSchemeScript defaultColorScheme='auto' />
    </head>
    <body className={`${aeonikFont.className} font-sans`}>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
