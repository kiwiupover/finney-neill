const title = 'Expert Doula Services for Pregnancy, Birth & Postpartum Care'
const description =
  'Seattle Birth Doulas offers expert, compassionate guidance for expectant parents through pregnancy, birth, & new baby life. Our dedicated birth doulas and postpartum doulas will support your choices & help navigate challenges.'
export const SEO = {
  titleTemplate: '%s | Seattle Birth Doulas',
  defaultTitle: title,
  title,
  description,
  robots: 'all',
  url: 'https://www.seattlebirthdoulas.com/',
  openGraph: {
    type: 'website',
    locale: 'en_us',
    url: 'https://www.seattlebirthdoulas.com/',
    siteName: 'Seattle Birth Doulas',
    title: title,
    description,
    images: [
      {
        url: 'https://www.seattlebirthdoulas.com/images/seattle-birth-doulas-baby-hat.jpg',
        width: 1200,
        height: 630,
        alt: title,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@BirthDoulas',
    site: 'https://www.seattlebirthdoulas.com',
    cardType: 'summary_large_image',
  },
}
