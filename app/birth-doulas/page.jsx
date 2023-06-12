import { fixImages } from '@/utils/fix-images'

import { Doulas as DoulasComponent } from '@/components/Doulas'

import { SEO } from '@/utils/next-seo.config'

import { tableByID, minifyItem } from '@/utils/airtable'

import { getApiDoulas } from '@/api/birth-doulas'

import { PAGE_CONTENT_TABLE_ID, BASE_URL } from '@/utils/const'

export async function getProps() {
  const doulas = getApiDoulas()
  const contentTable = tableByID(PAGE_CONTENT_TABLE_ID)

  const doulasContentRequest = contentTable
    .select({ view: 'pages', filterByFormula: `slug = 'doulas-page'` })
    .firstPage()

  const response = await Promise.all([doulas, doulasContentRequest])

  const doulasArray = response[0].map((doula) => {
    doulas.images = fixImages(doula.images)
    return doula
  })

  const doulasContent = minifyItem(response[1][0])

  return {
    doulas: doulasArray,
    doulasContent,
  }
}

export async function generateMetadata({ params }) {
  const { doulasContent } = await getProps()

  const url = `${BASE_URL}/birth-doulas`
  return {
    ...SEO,
    title: doulasContent.seo_title,
    description: doulasContent.seo_description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...SEO.openGraph,
      title: doulasContent.seo_title,
      description: doulasContent.seo_description,
      url: url,
    },
  }
}

export default async function Doulas() {
  const { doulas, doulasContent } = await getProps()
  return (
    <>
      <main>
        <DoulasComponent doulas={doulas} pageContent={doulasContent} />
      </main>
    </>
  )
}
