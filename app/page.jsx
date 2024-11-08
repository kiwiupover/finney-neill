import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/HeroNew'
import { Founder } from '@/components/Founder'
import { Articles } from '@/components/Articles'
import { HowWeWork } from '@/components/HowWeWork'
import { Testimonials } from '@/components/Testimonials'
import { CallToAction } from '@/components/CallToAction'
import { HomePageContentSection } from '@/components/HomePageContentSection'

import { getApiPageBySlug, firstTwoArticles } from '@/api/pages'
import { tableByID, minifyItems, contentPage } from '@/utils/airtable'

import {
  HOW_WE_WORK_TABLE_ID,
  FAQ_TABLE_ID,
  REVIEW_TABLE_ID,
} from '@/utils/const'

import { LocalBusiness } from '@/utils/local-business'

export async function getProps() {
  try {
    const reviewTable = tableByID(REVIEW_TABLE_ID)
    const faqTable = tableByID(FAQ_TABLE_ID)
    const howWeWork = contentPage({
      tableId: HOW_WE_WORK_TABLE_ID,
      view: 'how-we-work',
      slug: 'how-we-work',
    })

    const reviewRecords = reviewTable.select({ view: 'reviews' }).firstPage()
    const faqsRecords = faqTable.select({ view: 'faqs' }).firstPage()

    const response = await Promise.all([
      reviewRecords,
      faqsRecords,
      howWeWork,
      getApiPageBySlug('what-is-a-doula'),
      getApiPageBySlug('why-choose-a-doula-collective'),
      firstTwoArticles({ excludedId: 'why-choose-a-doula-collective' }),
    ])

    const reviews = minifyItems(response[0])
    const faqs = minifyItems(response[1])
    const howWeWorkContent = response[2]
    const homePageContent = response[3]
    const founderContent = response[4]
    const articles = response[5]

    return {
      reviews,
      faqs,
      homePageContent,
      howWeWorkContent,
      founderContent,
      articles,
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

export function generateMetadata() {
  return {
    alternates: {
      canonical: `https://www.seattlebirthdoulas.com/`,
    },
  }
}

export default async function Page() {
  // const {
  //   reviews,
  //   faqs,
  //   homePageContent,
  //   howWeWorkContent,
  //   founderContent,
  //   articles,
  // } = await getProps()

  return (
    <>
      <div className="relative">
        <main>
          <Hero />
          {/* <HowWeWork content={howWeWorkContent} />
          <HomePageContentSection pageContent={homePageContent} />
          <CallToAction />
          <Founder pageContent={founderContent} />
          <Articles articles={articles} homepage={true} />
          <Testimonials reviews={reviews} homepage={true} />
          <Faqs faqs={faqs} /> */}
        </main>
        {/* <LocalBusiness /> */}
      </div>
    </>
  )
}
