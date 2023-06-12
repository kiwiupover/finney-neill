import { contentPage } from '@/utils/airtable'
import { notFound } from 'next/navigation'

import { Services } from '@/components/Services'
import { markdownParse } from '@/utils/markdown'
import { ImageCropUrl } from '@/utils/image-crop'

import { SERVICES_TABLE_ID, BASE_URL } from '@/utils/const'

const BabyWithEyes =
  'https://res.cloudinary.com/dhqv889nh/image/upload/v1684262441/baby-with-eyes_ixrja1.jpg'

export async function getProps() {
  let servicesPage = await contentPage({
    tableId: SERVICES_TABLE_ID,
    view: 'services',
    slug: 'services',
  })

  servicesPage = await markdownParse(servicesPage, [
    'our_philosophy_subtitle',
    'our_philosophy_content',
    'birth_doula_content',
    'postpartum_doula_content',
    'bottom_content',
    'call_to_action_content',
  ])

  if (!servicesPage) {
    notFound()
  }

  return {
    servicesPage,
  }
}

export async function generateMetadata() {
  const { servicesPage } = await getProps()
  const image = BabyWithEyes

  const title = servicesPage.seo_title
  const description = servicesPage.seo_description

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/services`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${BASE_URL}/services`,
      images: [
        {
          url: ImageCropUrl({
            imageUrl: image,
            width: 1200,
            height: 630,
          }),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export default async function Page() {
  const { servicesPage } = await getProps()

  return <Services content={servicesPage} />
}
