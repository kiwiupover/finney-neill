import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'
import { Inter, Bitter } from 'next/font/google'

import { contentPage } from '@/utils/airtable'

import { SEO } from '@/utils/next-seo.config'

import { Analytics } from '@vercel/analytics/react'
import { extractDoulaIds } from '@/api/birth-doulas'

import { FOOTER_TABLE_ID } from '@/utils/const'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

import clsx from 'clsx'

const bitter = Bitter({
  variable: '--font-bitter',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export function generateMetadata() {
  return {
    ...SEO,
    robots: 'all',
  }
}

export async function getProps() {
  const birthDoulas = await extractDoulaIds()
  const footer = await contentPage({
    tableId: FOOTER_TABLE_ID,
    view: 'footer',
    slug: 'footer',
    fields: ['our_mission_content'],
  })

  return {
    birthDoulas,
    footer,
  }
}

export default async function RootLayout({ children }) {
  const { birthDoulas, footer } = await getProps()

  return (
    <html
      className={clsx(
        "bg-white  antialiased [font-feature-settings:'ss01']",
        inter.variable,
        bitter.variable
      )}
      lang="en"
    >
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <meta
          name="ahrefs-site-verification"
          content="297d44a8fea016f35a2b3fa8231ff0bbf0de4383514effd561c86d3297e93b0e"
        /> */}
      </head>
      <body
        className={clsx(inter.className, bitter.className, 'vsc-initialized')}
      >
        <div>
          <Header birthDoulas={birthDoulas} />
          {children}
        </div>
        <Footer content={footer} />
      </body>
    </html>
  )
}
