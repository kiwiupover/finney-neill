'use client'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { NavLink } from '@/components/NavLink'

import Baby from '@/images/babies/baby-hat.jpg'

import { track } from '@amplitude/analytics-browser'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white isolate">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-green-500/30 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
        <svg x="50%" y={-1} className="overflow-visible fill-green-400/10">
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
            <stop stopColor="#66e546" />
            <stop offset={1} stopColor="#99ff80" />
          </linearGradient>
        </defs>
      </svg>
      <div className="px-6 pt-10 pb-24 mx-auto max-w-7xl sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="flex-shrink-0 max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-0 text-3xl font-medium tracking-tight font-display text-slate-900 sm:mt-6 sm:text-4xl lg:mt-24">
            <span className="hidden block text-2xl font-normal sm:block lg:text-3xl">
              Seattle Birth Doulas
            </span>
            <h1>
              <span className="relative whitespace-wrap text-amber-700 sm:whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 hidden h-[0.58em] w-full fill-amber-500/40 sm:block"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative font-semibold">
                  Empowering Your Journey
                </span>
              </span>{' '}
              Comprehensive Doula Support in Seattle
            </h1>
          </div>
          <h2 className="mt-6 text-lg leading-8 tracking-tight text-slate-700 lg:text-xl">
            Birth and Postpartum Doulas to guide you and your family through
            pregnancy, birth, and beyond with compassionate care, expertise, and
            experience.
          </h2>
          <div className="flex items-center mt-10 gap-x-6">
            <Button
              href="/birth-doulas"
              variant="solid"
              size="large"
              aria-label={'Get started'}
              onClick={() =>
                track('Call To Action Clicked', {
                  name: 'Meet the Doulas Home Page',
                })
              }
            >
              Meet the Doulas
            </Button>
            <NavLink
              href="#How-Seattle-Birth-Doulas-Works"
              className="text-sm font-semibold leading-6 text-slate-600"
              onClick={() =>
                track('Call To Action Clicked', {
                  name: 'Learn More Home Page',
                })
              }
            >
              How it works <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        </div>
        <div className="flex max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none overflow-hidden rounded-md bg-[#c7cddd] sm:max-w-5xl lg:max-w-none">
            <Image
              src={Baby}
              alt="Family in bed with their newborn baby"
              width={1600}
              height={1191}
              placeholder="blur"
              priority={true}
              className="w-[32rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:w-[48rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
