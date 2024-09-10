import type { Metadata } from 'next';
import { Bricolage_Grotesque, Oswald } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

//Fonts
const MainFont = Bricolage_Grotesque({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800'],
});
const OswaldFont = Oswald({
	subsets: ['latin'],
	variable: '--font-oswald',
	weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'James McCarthy - Portfolio',
	description: 'James McCarthy - Portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(MainFont.className, OswaldFont.variable)}>{children}</body>
		</html>
	);
}
