'use client'
import Image from 'next/image'
import { Button } from '@/components/Button'

export function HomePageContentSection({ pageContent }) {
  return (
    <div className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-amber-600/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-amber-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div className="absolute top-0 right-0 -ml-24 overflow-hidden left-1/2 -z-10 transform-gpu blur-3xl lg:ml-24 xl:ml-48">
          <svg
            viewBox="0 0 801 1036"
            aria-hidden="true"
            className="w-[50.0625rem]"
          >
            <path
              fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
              fillOpacity=".3"
              d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
            />
            <defs>
              <linearGradient
                id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                x1="508.179"
                x2="-28.677"
                y1="-116.221"
                y2="1091.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fca489" />
                <stop offset={1} stopColor="#ffb580" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-lg font-semibold leading-7 text-amber-700">
                {pageContent.super_title}
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 font-display sm:text-4xl">
                {pageContent.title}
              </h2>
              <div
                className="mt-6 text-xl leading-8 prose text-gray-700"
                dangerouslySetInnerHTML={{ __html: pageContent.subtitle }}
              />
            </div>
          </div>
        </div>
        <div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            src={pageContent.images[0].secure_url}
            alt={pageContent.title}
            width={1920}
            height={1080}
            className="w-[26rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div
              className="prose-xl line-clamp-[16] max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"
              dangerouslySetInnerHTML={{ __html: pageContent.content }}
            />
            <Button
              href={`resources/${pageContent.slug}`}
              size="small"
              color="amber"
              className="mt-4"
            >
              Article Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
