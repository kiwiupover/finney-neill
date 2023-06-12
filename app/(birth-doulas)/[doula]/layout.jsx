import Link from 'next/link'
import { fixImages } from '@/utils/fix-images'
import { notFound } from 'next/navigation'

import { Doula as DoulaComponent } from '@/components/Doula'

import { extractDoulaIds, getApiDoulaBySlug } from '@/api/birth-doulas'
import { randomArticles } from '@/api/pages'

import { ArticleHorizontal } from '@/components/ArticleHorizontal'

export async function generateStaticParams() {
  const doulas = await extractDoulaIds()

  return doulas.map((doula) => ({
    doula: doula.params.slug,
  }))
}

export async function getProps(params) {
  const doula = await getApiDoulaBySlug(params.doula)
  const articles = await randomArticles({ excludedId: '' })

  if (!doula) {
    notFound()
  }

  doula.images = fixImages(doula.images)

  return {
    doula,
    articles,
  }
}

export default async function Layout({ params, children }) {
  const { doula, articles } = await getProps(params)

  return (
    <>
      <main className="relative isolate bg-white">
        <svg
          className="absolute inset-0 -z-10 hidden h-full w-full stroke-amber-400/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-amber-50">
            <path
              d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
          />
        </svg>
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/4 transform-gpu overflow-hidden opacity-20 blur-xl">
            <svg
              viewBox="0 0 1313 771"
              aria-hidden="true"
              className="ml-[max(50%,38rem)] w-[82.0625rem]"
            >
              <path
                id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
                fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
                d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
              />
              <defs>
                <linearGradient
                  id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
                  x1="1313.17"
                  x2="-88.881"
                  y1=".201"
                  y2="539.417"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#d25c06" />
                  <stop offset={1} stopColor="#f3db40" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-20 blur-3xl xl:justify-end">
            <svg
              viewBox="0 0 1313 771"
              aria-hidden="true"
              className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            >
              <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
            </svg>
          </div>
        </div>
        {doula && <DoulaComponent doula={doula} />}
        {children}
      </main>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-amber-800 group-hover:text-amber-900 sm:text-4xl">
              <Link href="resources">Birth and Postpartum Resources</Link>
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
    </>
  )
}
