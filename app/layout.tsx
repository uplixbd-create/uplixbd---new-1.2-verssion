import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UplixBD - Performance Marketing & Creative Digital Agency',
  description: 'We Turn Digital Marketing Into Measurable Business Growth. Performance ads, SEO, high-converting websites, creative media, and advanced tracking analytics.',
  keywords: [
    'Digital Marketing Agency',
    'Performance Marketing',
    'Facebook Ads',
    'Google Ads',
    'SEO Bangladesh',
    'E-commerce Growth',
    'UplixBD',
    'Web Design & Analytics',
  ],
  authors: [{name: 'UplixBD Agency'}],
  openGraph: {
    title: 'UplixBD - We Turn Digital Marketing Into Measurable Business Growth',
    description: 'Data-driven performance marketing strategies designed for high-growth startups and established enterprises globally.',
    type: 'website',
    url: 'https://uplixbd.com',
    siteName: 'UplixBD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UplixBD - Performance Marketing & Creative Digital Agency',
    description: 'We Turn Digital Marketing Into Measurable Business Growth.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#100022] text-[#E9E1F5] antialiased selection:bg-[#7606CB] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

