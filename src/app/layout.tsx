// app/layout.tsx
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

// Konfigurasi font Poppins
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

// Metadata untuk SEO
export const metadata: Metadata = {
  title: {
    default: 'SENI RUANG MINIMALIS PEKALONGAN - Spesialis Interior Minimalis',
    template: '%s | SENI RUANG MINIMALIS PEKALONGAN'
  },
  description: 'Spesialis desain interior dan konstruksi yang berkomitmen menghadirkan karya seni minimalis yang fungsional dan estetik di Pekalongan dan sekitarnya.',
  keywords: [
    'desain interior', 'interior minimalis', 'plafon gypsum', 'wallpanel', 
    'backdrop tv', 'kitchen set', 'partisi', 'interior pekalongan'
  ],
  authors: [{ name: 'SENI RUANG MINIMALIS PEKALONGAN' }],
  creator: 'SENI RUANG MINIMALIS PEKALONGAN',
  publisher: 'SENI RUANG MINIMALIS PEKALONGAN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://seniruangminimalis.mubarokah.id'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'SENI RUANG MINIMALIS PEKALONGAN - Spesialis Interior Minimalis',
    description: 'Spesialis desain interior dan konstruksi yang berkomitmen menghadirkan karya seni minimalis yang fungsional dan estetik di Pekalongan dan sekitarnya.',
    url: 'https://seniruangminimalis.mubarokah.id',
    siteName: 'SENI RUANG MINIMALIS PEKALONGAN',
    images: [
      {
        url: 'https://seniruangminimalis.mubarokah.id/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SENI RUANG MINIMALIS PEKALONGAN',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SENI RUANG MINIMALIS PEKALONGAN - Spesialis Interior Minimalis',
    description: 'Spesialis desain interior dan konstruksi yang berkomitmen menghadirkan karya seni minimalis yang fungsional dan estetik di Pekalongan dan sekitarnya.',
    images: ['https://seniruangminimalis.mubarokah.id/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#10B981', // Sesuaikan dengan warna primer Anda
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code', // Ganti dengan kode verifikasi Google sebenarnya
  },
  category: 'interior design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={poppins.variable}>
      <head>
        {/* Font Awesome dari CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Structured Data / JSON-LD untuk Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "SENI RUANG MINIMALIS PEKALONGAN",
              "image": "https://seniruangminimalis.mubarokah.id/images/logo.jpg",
              "@id": "https://seniruangminimalis.mubarokah.id",
              "url": "https://seniruangminimalis.mubarokah.id",
              "telephone": "+6285643132938",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Desa Jetak Lengkong, Dukuh Blumbang, RT04/RW02",
                "addressLocality": "Kec. Wonopringgo",
                "postalCode": "51181",
                "addressRegion": "Pekalongan",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.975043,
                "longitude": 109.6322213
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://facebook.com/seniruangminimalispekalongan",
                "https://instagram.com/seniruangminimalis"
              ],
              "priceRange": "$$",
              "servesCuisine": "Interior Design"
            })
          }}
        />
      </head>
      
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Google Analytics - Uncomment dan ganti dengan ID Google Analytics sebenarnya saat siap */}
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> */}
      </body>
    </html>
  )
}