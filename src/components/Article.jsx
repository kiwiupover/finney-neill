import Link from 'next/link'
import Image from 'next/image'

const SmilingBaby =
  'https://res.cloudinary.com/dhqv889nh/image/upload/v1682399854/birth-doulas/doulas/baby-933097_1280_1.jpg'

export function Article({ article }) {
  const image = article?.images?.[0]?.secure_url || SmilingBaby
  return (
    <article className="flex flex-col items-start justify-between">
      <Link href={`/resources/${article.slug}`} className="relative w-full">
        <Image
          src={image}
          alt={article.title}
          width={600}
          height={400}
          className="aspect-[16/9] w-full rounded-2xl bg-slate-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl" />
      </Link>

      <div className="max-w-xl">
        <div className="flex items-center mt-8 text-sm gap-x-4">
          <p className="relative z-10 py-1.5 font-medium text-amber-700">
            {article.super_title}
          </p>
        </div>
        <div className="relative group">
          <h3 className="mt-3 text-xl font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
            <Link href={`/resources/${article.slug}`}>
              <span className="absolute inset-0" />
              {article.title}
            </Link>
          </h3>
          <div className="prose prose-xl prose-amber">
            <div
              className="mt-5 text-base leading-6 prose prose-lg line-clamp-5 text-slate-600"
              dangerouslySetInnerHTML={{
                __html: article.excerpt,
              }}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
