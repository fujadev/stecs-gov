import { type FC, type ReactNode } from 'react';
import { ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Providers from './providers';
import './globals.css';

export const metadata: Metadata = {
	title: 'G-Pay',
	// description:
	//   "Stecs Ethical Money App is The Ethical and Interest-Free Money App for Professionals. Save, invest and grow your wealth ethically with ease. Get Started. Track, save and build wealth.",
	keywords:
		'money, bank app, finance, savings, credit, balance, savings, deposit, financial planning, investments, wealth management, digital banking, e-banking, online payments, savings account, financial services, credit cards, investment solutions, mobile banking, fintech, digital investing, fixed deposits, online transaction, dollar savings, vaults, banking vaults, savings vault, online investment, ethical, app, stecs, islamic, Islamic banking, Islamic Fintech, Sharia, ethical mobile money app, money app, Islamic Finance',
};

interface RootLayoutProps {
	children: ReactNode;
	params: {
		locale: string;
	};
}

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--font-montserrat',
});

const RootLayout: FC<RootLayoutProps> = ({ children, params: { locale } }) => (
	<html lang={locale} className={montserrat.variable}>
		<meta property="og:url" content="https://stecs.ng/" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Stecs Ethical Money App" />
		<meta
			property="og:description"
			content="Stecs Ethical Money App is The Ethical and Interest-Free Money App for Professionals. Save, invest and grow your wealth ethically with ease. Get Started. Track, save and build wealth."
		/>
		<meta property="og:image" content="" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta property="twitter:domain" content="stecs.ng" />
		<meta property="twitter:url" content="https://stecs.ng/" />
		<meta name="twitter:title" content="Stecs Ethical Money App" />
		<meta name="twitter:description" content="Stecs Ethical Money App" />
		<meta name="twitter:image" content="" />

		<head>
			<ColorSchemeScript defaultColorScheme="auto" />
		</head>
		<body className={`${montserrat.className} font-sans`}>
			<Providers>{children}</Providers>
		</body>

	</html>
);

export default RootLayout;
