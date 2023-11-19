import { Montserrat } from 'next/font/google';
import './layout.css';
const monserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
export const metadata = {
  title: 'Michael | Portfolio',
  description: 'New version of Michael Castro portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={monserrat.className}>
      <body>{children}</body>
    </html>
  );
}
