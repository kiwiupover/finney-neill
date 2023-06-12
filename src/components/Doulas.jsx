'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'

import { track } from '@amplitude/analytics-browser'

const ImageFaceCrop = (image, doula) => {
  const { secure_url } = image.image
  const src = secure_url.replace('upload/', 'upload/c_fill,g_face,h_600,w_600/')
  return (
    <Image
      className="aspect-[1/1] w-full rounded-md  object-cover"
      width={600}
      height={600}
      src={src}
      alt={`${doula.name} - Seattle Birth Doulas`}
    />
  )
}

export function Doulas({ doulas, pageContent }) {
  return (
    <div className="relative overflow-hidden bg-white isolate">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-[#fcd49f] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
          className="overflow-visible fill-amber-600/30 blur-2xl"
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
        className="absolute left-[calc(50%-4rem)] top-1 -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
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
            <stop stopColor="#e5b546" />
            <stop offset={1} stopColor="#e3a864" />
          </linearGradient>
        </defs>
      </svg>
      <div className="py-24 md:py-14 lg:py-36">
        <div className="grid grid-cols-1 px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight font-display text-amber-800 sm:text-3xl">
              {pageContent.title}
            </h1>
            <div></div>
            <div
              className="mt-6 text-base leading-8 prose text-slate-700"
              dangerouslySetInnerHTML={{ __html: pageContent.content }}
            />
          </div>
          <ul
            role="list"
            className="grid max-w-2xl grid-cols-1 mx-auto gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {doulas.map((doula) => (
              <li key={doula.id}>
                <Link href={doula.slug}>
                  <ImageFaceCrop image={doula.images[0]} doula={doula} />
                  <div className="sm:flex sm:items-baseline">
                    <h2 className="mt-6 text-2xl font-bold leading-8 font-display text-amber-700">
                      {doula.name}
                    </h2>

                    <span className="block text-base font-light text-slate-600 sm:ml-4 sm:inline">
                      {doula.pro_nouns}
                    </span>
                  </div>
                </Link>
                <p className="text-base leading-7 text-slate-600">
                  {doula.role}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {doula.bio}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-3xl font-extrabold leading-7 font-display text-amber-700">
                    ${doula.price}
                  </p>
                  <Button
                    variant="solid"
                    color="amber"
                    size="small"
                    href={doula.slug}
                    onClick={() =>
                      track('Doula Learn More', {
                        doula: `doula: ${doula.name}`,
                      })
                    }
                  >
                    {doula.name}
                  </Button>
                </div>
                {doula.booking_status && (
                  <p className="mt-4 text-sm font-light leading-4 text-slate-600">
                    {doula.booking_status}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
