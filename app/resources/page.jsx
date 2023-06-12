import { getApiPages } from '@/api/pages'
import { notFound } from 'next/navigation'

import { ImageCropUrl } from '@/utils/image-crop'
import { Resources } from '@/components/Resources'

const SmilingBaby =
  'https://res.cloudinary.com/dhqv889nh/image/upload/v1682399854/birth-doulas/doulas/baby-933097_1280_1.jpg'

export async function getProps() {
  const articles = await getApiPages('resources')

  if (!articles) {
    notFound()
  }

  return {
    articles,
  }
}

export async function generateMetadata() {
  const image = SmilingBaby

  const title = 'Resources for Expecting Parents'
  const description =
    'Resources for Pregnancy, Birth, and Postpartum. Uncover expert advice, support, & tools to ensure a confident, empowered birthing journey.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.seattlebirthdoulas.com/resources`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.seattlebirthdoulas.com/resources`,
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
  const { articles } = await getProps()

  return <Resources articles={articles} />
}
