import type { FC, ReactNode } from 'react';
import { ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import Providers from './providers';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stecs',
  description: 'tecs Ethical Money App is The Ethical and Interest-Free Money App for Professionals. Save, invest and grow your wealth ethically with ease. Get Started. Track, save and build wealth.',
  keywords: "money, bank app, finance, savings, credit, balance, savings, deposit, financial planning, investments, wealth management, digital banking, e-banking, online payments, savings account, financial services, credit cards, investment solutions, mobile banking, fintech, digital investing, fixed deposits, online transaction, dollar savings, vaults, banking vaults, savings vault, online investment, ethical, app, stecs, islamic, Islamic banking, Islamic Fintech, Sharia, ethical mobile money app, money app, Islamic Finance"
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
