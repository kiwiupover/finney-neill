import Link from 'next/link'
import { notFound } from 'next/navigation'
import { randomArticles } from '@/api/pages'
import { ImageCropUrl } from '@/utils/image-crop'
import { ContentSection } from '@/components/ContentSection'
import { extractPageIds, getApiPageBySlug } from '@/api/pages'
import { ArticleHorizontal } from '@/components/ArticleHorizontal'

const SmilingBaby =
  'https://res.cloudinary.com/dhqv889nh/image/upload/v1682399854/birth-doulas/doulas/baby-933097_1280_1.jpg'

export async function generateStaticParams() {
  const pages = await extractPageIds('resources')

  return pages.map((page) => ({
    slug: page.params.slug,
  }))
}

export async function getProps({ params }) {
  const page = await getApiPageBySlug(params.slug)
  const articles = await randomArticles({ excludedId: params.slug })

  if (!page) {
    notFound()
  }

  return {
    page,
    articles,
  }
}

export async function generateMetadata({ params }) {
  const page = await getApiPageBySlug(params.slug)

  const image = page?.images?.[0]?.secure_url || SmilingBaby

  return {
    title: page?.seo_title || page?.title,
    description: page?.seo_description || page?.subtitle,
    alternates: {
      canonical: `https://www.seattlebirthdoulas.com/resources/${page.slug}`,
    },
    openGraph: {
      title: page?.seo_title || page?.title,
      description: page?.seo_description || page?.subtitle,
      type: 'website',
      url: `https://www.seattlebirthdoulas.com/resources/${page.slug}`,
      images: [
        {
          url: ImageCropUrl({
            imageUrl: image,
            width: 1200,
            height: 630,
          }),
          width: 1200,
          height: 630,
          alt: `${page?.title}`,
        },
      ],
    },
  }
}

export default async function Page({ params }) {
  const { page, articles } = await getProps({ params })

  return (
    <main>
      <ContentSection pageContent={page} />
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight font-display text-amber-800 sm:text-4xl">
              <Link href="/resources">
                Birth, Pregnancy, and Postpartum Articles
              </Link>
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Navigating your journey through pregnancy, birth, and beyond with
              our resources and guides.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {articles.map((article) => (
                <ArticleHorizontal article={article} key={article.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
