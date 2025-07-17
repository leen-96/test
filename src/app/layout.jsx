import './globals.css';
 
import Navbar from './components/Navbar/Navbar';

import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    default: 'YallaMotor Clone',
    template: '%s | Used Cars UAE',
  },
  
  description: 'Find great deals on used cars in the UAE. Browse listings by price, model, and more.',
  icons: {
    icon: '/favicon.ico',  
  },
  openGraph: {
    title: 'Used Cars UAE',
    description: 'Find great deals on used cars in the UAE.',
    url: 'http://localhost:3000',  
    siteName: 'Used Cars UAE',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Used Cars UAE',
    description: 'Find the best second-hand cars in Dubai and other UAE cities.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
