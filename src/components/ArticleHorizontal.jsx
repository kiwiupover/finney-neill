'use client'

import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { track } from '@amplitude/analytics-browser'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const SmilingBaby =
  'https://res.cloudinary.com/dhqv889nh/image/upload/v1682399854/birth-doulas/doulas/baby-933097_1280_1.jpg'

export function ArticleHorizontal({ article, homepage = false }) {
  const image = article?.images?.[0]?.secure_url || SmilingBaby

  return (
    <article className="relative flex flex-col gap-8 isolate lg:flex-row">
      <div className="relative aspect-[1/1] sm:aspect-[2/1] lg:aspect-[1/1] lg:w-44 lg:shrink-0">
        <Link href={`/resources/${article.slug}`} className="relative w-full">
          <Image
            src={image}
            alt={article.title}
            width={200}
            height={200}
            className="mt-3 aspect-[1/1] w-full rounded-md bg-slate-100 object-cover sm:aspect-[1/1]"
          />
          <div className="absolute inset-0 rounded-md" />
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center text-small gap-x-4">
          <div className="relative z-10 py-1.5 font-medium text-amber-700">
            {article.super_title}
          </div>
        </div>
        <div className="relative max-w-xl group">
          <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 font-display group-hover:text-gray-600">
            <Link href={`/resources/${article.slug}`}>
              <span className="absolute inset-0" />
              {article.title}
            </Link>
          </h3>
          <p
            className={clsx(
              homepage && 'line-clamp-4',
              'mt-5 text-sm leading-6 text-gray-600'
            )}
          >
            {article.excerpt}
          </p>
        </div>
        {homepage && (
          <Link
            href={`/resources/${article.slug}`}
            className="p-4 -mx-4 text-sm"
            onClick={() =>
              track('Clicked Read More Articles', { article: article.title })
            }
          >
            Article
            <ArrowRightCircleIcon className="inline-block w-4 h-4 ml-1 text-amber-700" />
          </Link>
        )}
      </div>
    </article>
  )
}
