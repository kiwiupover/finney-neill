import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'

import { BASE_URL } from '@/utils/const'

import { SEO } from '@/utils/next-seo.config'

import { tableByID, minifyItems, contentPage } from '@/utils/airtable'

export async function getProps() {
  const reviewTableId = 'tblCjQPLzeLPMxcYi'
  const aboutTableId = 'tbl00tSMeE16pYl4r'
  const valuesTableId = 'tblK1YEmIRi3um0SD'

  try {
    const reviewTable = tableByID(reviewTableId)
    const valuesTable = tableByID(valuesTableId)
    const aboutFetch = contentPage({
      tableId: aboutTableId,
      view: 'about',
      slug: 'about',
      fields: ['our_mission_content'],
    })
    const reviewRecords = reviewTable.select({ view: 'reviews' }).firstPage()
    const valuesRecords = valuesTable
      .select({ view: 'values', maxRecords: 6 })
      .firstPage()

    const response = await Promise.all([
      aboutFetch,
      reviewRecords,
      valuesRecords,
    ])

    const aboutContent = response[0]
    const reviews = minifyItems(response[1])
    const values = minifyItems(response[2]) || []

    return {
      aboutContent,
      reviews,
      values,
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        err: 'Something went wrong 😕',
      },
    }
  }
}

export async function generateMetadata({ params }) {
  const { aboutContent } = await getProps()

  const url = `${BASE_URL}/about`
  return {
    ...SEO,
    title: aboutContent.seo_title,
    description: aboutContent.seo_description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...SEO.openGraph,
      title: aboutContent.seo_title,
      description: aboutContent.seo_description,
      url,
    },
  }
}

export default async function Page() {
  const { aboutContent, reviews, values } = await getProps()
  return (
    <>
      <div className="relative">
        <main>
          <About content={aboutContent} values={values} />
          <Testimonials reviews={reviews} homepage={true} />
        </main>
      </div>
    </>
  )
}
