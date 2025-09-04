import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primeira Igreja Batista no Retiro | Lar de Fé e Comunidade",
  description: "Encontre seu lar espiritual na Primeira Igreja Batista no Retiro. Um lugar de fé, comunhão e propósito para toda a família. Cultos aos domingos 9h e 19h.",
  keywords: "igreja batista, retiro, contagem, culto, fé, comunidade, família, jesus cristo, evangélica",
  authors: [{ name: "Primeira Igreja Batista no Retiro" }],
  creator: "Primeira Igreja Batista no Retiro",
  publisher: "Primeira Igreja Batista no Retiro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://igrejaretiro.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Primeira Igreja Batista no Retiro | Lar de Fé e Comunidade",
    description: "Encontre seu lar espiritual na Primeira Igreja Batista no Retiro. Um lugar de fé, comunhão e propósito para toda a família.",
    url: 'https://igrejaretiro.com.br',
    siteName: 'Primeira Igreja Batista no Retiro',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Primeira Igreja Batista no Retiro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Primeira Igreja Batista no Retiro | Lar de Fé e Comunidade",
    description: "Encontre seu lar espiritual na Primeira Igreja Batista no Retiro. Um lugar de fé, comunhão e propósito para toda a família.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              "name": "Primeira Igreja Batista no Retiro",
              "description": "Igreja evangélica batista localizada no bairro Retiro em Contagem, MG. Oferecemos cultos, estudos bíblicos e atividades para toda a família.",
              "url": "https://igrejaretiro.com.br",
              "telephone": "+55-31-3333-4444",
              "email": "contato@igrejaretiro.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua das Flores, 123",
                "addressLocality": "Contagem",
                "addressRegion": "MG",
                "postalCode": "32000-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -19.9167,
                "longitude": -44.0833
              },
              "openingHours": [
                "Su 09:00-10:30",
                "Su 19:00-20:30",
                "We 19:30-21:00",
                "Fr 19:30-21:00"
              ],
              "sameAs": [
                "https://www.facebook.com/igrejaretiro",
                "https://www.instagram.com/igrejaretiro",
                "https://www.youtube.com/igrejaretiro"
              ],
              "founder": {
                "@type": "Person",
                "name": "Pastor Fundador"
              },
              "foundingDate": "2004-03-06",
              "memberOf": {
                "@type": "Organization",
                "name": "Convenção Batista Mineira"
              }
            })
          }}
        />
      </body>
    </html>
  );
}

