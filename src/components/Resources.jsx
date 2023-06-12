import { Article } from '@/components/Article'
import { CallToAction } from '@/components/CallToAction'
import { ArticleHorizontal } from '@/components/ArticleHorizontal'

export function Resources({ articles }) {
  const topThreeArticles = articles.slice(0, 3)
  const remainingArticles = articles.slice(3)
  return (
    <div className="relative overflow-hidden bg-white isolate">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-cyan-500/30 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg
          x="50%"
          y={-1}
          className="overflow-visible fill-cyan-700/10 blur-lg"
        >
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={2}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 w-[69.25rem] max-w-none transform-gpu blur-2xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#a5f3fc" />
            <stop offset={1} stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="py-24 sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto text-left">
            <h1 className="text-3xl font-bold tracking-tight font-display text-amber-700 sm:text-4xl">
              Pregnancy, Birth and Postpartum Resources
            </h1>
            <h2 className="mt-2 text-lg leading-8 text-slate-600">
              Helpful articles and guides for your Pregnancy, Birth and
              Postpartum journey.
            </h2>
          </div>

          <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {topThreeArticles.map((article) => {
              return <Article key={article.id} article={article} />
            })}
          </div>

          <div className="grid mx-auto mt-24 space-y-6">
            {remainingArticles.map((article) => {
              return <ArticleHorizontal key={article.id} article={article} />
            })}
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  )
}
