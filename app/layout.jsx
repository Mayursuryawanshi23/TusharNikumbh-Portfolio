import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Expertise from '@/app/components/Expertise'
import Experience from '@/app/components/Experience'
import TherapeuticAreas from '@/app/components/TherapeuticAreas'
import ToolsTechnologies from '@/app/components/ToolsTechnologies'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'
import GravitonFooter from '@/app/components/GravitonFooter'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://tusharnikumbh.netlify.app'),
  title: 'Tushar Nikumbh | Principal Biostatistician | Clinical Trials Expert',
  description: 'Principal Biostatistician with 10+ years expertise in clinical trial statistics, CDISC standards, SAP programming, and therapeutic area analysis (Oncology, Immunology). Expert in Phase I-III trials, data management, and regulatory submissions.',
  keywords: [
    'Tushar Nikumbh',
    'Principal Biostatistician',
    'Biostatistics',
    'Clinical Trials',
    'Statistical Analysis',
    'CDISC',
    'SAP',
    'Oncology',
    'Immunology',
    'Statistical Programming',
    'R',
    'Python',
    'SAS',
    'Clinical Data',
    'Phase III Trials',
    'CRO',
    'Pharmaceutical Statistics',
    'Data Management',
    'Regulatory Compliance',
    'FDA Submission'
  ],
  authors: [{ name: 'Tushar Nikumbh' }],
  creator: 'Tushar Nikumbh',
  publisher: 'Tushar Nikumbh',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tusharnikumbh.netlify.app',
    title: 'Tushar Nikumbh | Principal Biostatistician | Clinical Trials Expert',
    description: 'Principal Biostatistician with 10+ years expertise in clinical trials, CDISC standards, SAP programming, and statistical analysis across Oncology and Immunology.',
    siteName: 'Tushar Nikumbh - Biostatistician Portfolio',
    images: [
      {
        url: 'https://tusharnikumbh.netlify.app/profilepic/download.png',
        width: 1200,
        height: 630,
        alt: 'Tushar Nikumbh - Principal Biostatistician',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tushar Nikumbh | Principal Biostatistician',
    description: 'Expert in clinical trial statistics, CDISC standards, and statistical programming. 10+ years of CRO and pharmaceutical industry experience.',
    creator: '@TusharNikumbh',
    images: ['https://tusharnikumbh.netlify.app/profilepic/download.png'],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'XmGlFSzc9ae1c2a62sLkwKwXxfNEN7Mh3sRbmbmRsCs',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Tushar Nikumbh',
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://tusharnikumbh.netlify.app/',
              name: 'Tushar Nikumbh',
              url: 'https://tusharnikumbh.netlify.app/',
              image: 'https://tusharnikumbh.netlify.app/profilepic/download.png',
              jobTitle: 'Principal Biostatistician',
              description: 'Principal Biostatistician with 10+ years of expertise in clinical trials statistics, CDISC standards, SAP programming, and therapeutic area analysis',
              email: 'mailto:contact@tusharnikumbh.com',
              knowsAbout: [
                'Biostatistics',
                'Clinical Trials',
                'Statistical Analysis',
                'CDISC Standards',
                'SAP Programming',
                'Oncology',
                'Immunology',
                'Data Management',
                'Regulatory Compliance',
                'R Programming',
                'Python',
                'SAS',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Pharmaceutical/CRO Organizations',
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://tusharnikumbh.netlify.app/',
              name: 'Tushar Nikumbh - Biostatistician',
              description: 'Principal Biostatistician specializing in clinical trial statistics and CDISC standards',
              url: 'https://tusharnikumbh.netlify.app/',
              image: 'https://tusharnikumbh.netlify.app/profilepic/download.png',
              priceRange: '$$',
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://tusharnikumbh.netlify.app/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'About',
                  item: 'https://tusharnikumbh.netlify.app/#about',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Expertise',
                  item: 'https://tusharnikumbh.netlify.app/#expertise',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Experience',
                  item: 'https://tusharnikumbh.netlify.app/#experience',
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  name: 'Contact',
                  item: 'https://tusharnikumbh.netlify.app/#contact',
                },
              ],
            }),
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: "What is Tushar Nikumbh's expertise?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tushar Nikumbh is a Principal Biostatistician with expertise in clinical trial statistics, CDISC standards, SAP programming, and statistical analysis in Oncology and Immunology therapeutic areas.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How many years of experience does Tushar Nikumbh have?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tushar Nikumbh has over 10 years of experience in biostatistics and clinical trials, having led 15+ studies across pharmaceutical and CRO organizations.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What data standards does Tushar work with?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tushar is proficient in CDISC (Clinical Data Interchange Standards Consortium) standards and creates Statistical Analysis Plans (SAP) for regulatory compliance and FDA submissions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What programming languages does Tushar use?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tushar is experienced in R, Python, and SAS programming languages for statistical analysis, data management, and clinical trial analysis.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <GravitonFooter />
      </body>
    </html>
  )
}
