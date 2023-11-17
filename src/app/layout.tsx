import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/redux/ReduxProvider';

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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
