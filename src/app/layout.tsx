import type { Metadata } from 'next';
import './globals.css';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: 'Jedi Fighters',
  description: 'Assemble your team to fight the dark side!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
