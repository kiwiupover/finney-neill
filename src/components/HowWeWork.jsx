'use client'
import Image from 'next/image'
import { Button } from '@/components/Button'

import { track } from '@amplitude/analytics-browser'

import Image1 from '@/images/babies/pregnancy-sq.jpg'
import Image2 from '@/images/babies/baby-smile-sq.jpg'
import Image3 from '@/images/babies/dad-baby-sq.jpg'

const featuresOld = [
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
]

export function HowWeWork({ content }) {
  const features = []
  if (!content) {
    return null
  }
  for (let i = 1; i <= 3; i++) {
    features.push({
      image: featuresOld[i - 1].image,
      name: content[`step${i}_title`],
      subtitle: content[`step${i}_subtitle`],
    })
  }

  return (
    <div
      id="How-Seattle-Birth-Doulas-Works"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-500 to-slate-800 sm:py-32 "
    >
      <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto lg:text-center">
          <h2 className="text-2xl font-semibold leading-7 text-amber-400">
            {content.super_title}
          </h2>
          <p className="mt-2 text-3xl font-light leading-8 tracking-tight text-white font-display sm:text-4xl">
            {content.title}
          </p>
          <p className="mt-6 text-xl leading-8 text-slate-300">
            {content.subtitle}
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex flex-col items-start text-base font-semibold leading-7 text-white gap-x-3">
                  <div className="mb-2 overflow-hidden rounded aspect-1">
                    <Image
                      src={feature.image}
                      alt={feature.name}
                      width={300}
                      height={300}
                      aria-hidden="true"
                      className="rounded aspect-1"
                    />
                  </div>
                  <div className="mt-2 text-xl font-bold text-amber-500">
                    {feature.name}
                  </div>
                </dt>
                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-300">
                  <p className="flex-auto mt-2">{feature.subtitle}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="max-w-2xl mx-auto mt-12 lg:text-center">
          <Button
            variant="solid"
            color="amber"
            href="/birth-doulas"
            onClick={() =>
              track('Call To Action Clicked', { name: 'How we work' })
            }
          >
            Meet the Doulas
          </Button>
        </div>
      </div>
    </div>
  )
}
