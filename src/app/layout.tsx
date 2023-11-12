import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
