import { extractDoulaIds, getApiDoulaBySlug } from '@/api/birth-doulas'

import { notFound } from 'next/navigation'

import { ImageCropUrl } from '@/utils/image-crop'

export async function generateStaticParams() {
  const doulas = await extractDoulaIds()

  return doulas.map((doula) => ({
    doula: doula.params.slug,
  }))
}

export async function generateMetadata({ params }) {
  const doula = await getApiDoulaBySlug(params.doula)

  if (!doula) {
    notFound()
  }

  return {
    title: doula.seo_title,
    description: doula.seo_description,
    alternates: {
      canonical: `https://www.seattlebirthdoulas.com/${doula.slug}`,
    },
    twitter: {
      cardType: 'summary_large_image',
      handle: '@seattlebirthdoulas',
      title: doula.seo_title,
      description: doula.seo_description,
    },
    openGraph: {
      title: doula.seo_title,
      description: doula.seo_description,
      type: 'website',
      url: `https://www.seattlebirthdoulas.com/${doula.slug}`,

      images: [
        {
          url: ImageCropUrl({
            imageUrl: doula.images[0].secure_url,
            width: 1200,
            height: 630,
          }),
          width: 1200,
          height: 630,
          alt: `${doula.name} | Seattle Birth Doula`,
        },
      ],
    },
  }
}

export default function Page({ params }) {
  const { slug } = params
  return <></>
}
