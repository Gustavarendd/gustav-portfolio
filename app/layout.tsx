import './globals.css';
import { Nunito } from 'next/font/google';
import ToasterProvider from './providers/toasterProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Gustav | Portfolio',
  description: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
