import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jedi Fighters',
  description: 'Assemble your team to fight the dark side!',
};

export default function FighterDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
