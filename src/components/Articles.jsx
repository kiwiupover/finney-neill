'use client'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { ArticleHorizontal } from '@/components/ArticleHorizontal'

import { track } from '@amplitude/analytics-browser'

export function Articles({ articles }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <h2 className="font-display text-3xl font-bold tracking-tight text-amber-800 sm:text-4xl">
            <Link href="/resources">Birth and Pregnancy Articles</Link>
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Helpful articles for Your Pregnancy and Birth Journey
          </p>
          <div className="mt-10 grid w-full grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-2 ">
            {articles.map((article) => (
              <ArticleHorizontal article={article} key={article.id} />
            ))}
          </div>
          <Button
            href="/resources"
            color="amber"
            className="mt-10"
            onClick={() => track('Clicked More Articles')}
          >
            More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
