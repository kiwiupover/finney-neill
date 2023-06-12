import { NextSeo } from 'next-seo'

import { fixImages } from '@/utils/fix-images'
import { ImageCropUrl } from '@/utils/image-crop'

import { PostpartumDoula } from '@/components/PostpartumDoula'

import { getApiPostpartumDoulaBySlug } from '@/api/postpartum-doulas'

export async function generateMetadata({ param }) {
  const postpartumDoula = await getApiPostpartumDoulaBySlug('jen-laird')
  return {
    title: postpartumDoula.seo_title,
    description: postpartumDoula.seo_description,
    alternates: {
      canonical: `https://www.seattlebirthdoulas.com/postpartum-doula`,
    },
    openGraph: {
      title: `${postpartumDoula.name} | Seattle Postpartum Doula`,
      description: `${postpartumDoula.seo_description}`,
      url: `https://www.seattlebirthdoulas.com/postpartum-doula`,
      type: 'website',
      images: [
        {
          url: ImageCropUrl({
            imageUrl: postpartumDoula.images[0].secure_url,
            width: 1200,
            height: 630,
          }),
          width: 1200,
          height: 630,
          alt: `${postpartumDoula.name} | Seattle Postpartum Doula`,
        },
      ],
    },
  }
}

export async function getProps() {
  const postpartumDoula = await getApiPostpartumDoulaBySlug('jen-laird')

  postpartumDoula.images = fixImages(postpartumDoula.images)

  return {
    postpartumDoula,
  }
}

export default async function Doulas() {
  const { postpartumDoula } = await getProps()
  return (
    <>
      <main>
        <PostpartumDoula postpartumDoula={postpartumDoula} />
      </main>
    </>
  )
}
