'use client'
import Image from 'next/image'
import { Button } from '@/components/Button'

import BabyWithEyes from '@/images/babies/baby-with-eyes.jpg'
import Feet from '@/images/babies/baby-feet-on-a-blanket.jpg'

import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY, EMAIL } from '@/utils/const'

const ServiceContent = ({ title, content, children }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-display text-3xl font-semibold text-slate-800 lg:text-4xl">
        {title}
      </h2>
      <p
        className="prose prose-amber mt-6 max-w-xl leading-7 prose-h2:font-display prose-h2:text-amber-700 prose-h3:font-display prose-h3:text-amber-700"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      {children}
    </div>
  )
}

export function Services({ content }) {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden pt-14">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-[#9089fc]/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
          <svg x="50%" y={-1} className="overflow-visible fill-[#ff80b5]/10">
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
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="font-display text-4xl font-bold text-gray-900 sm:text-6xl">
              {content.title}
            </h1>
            <h2 className="mt-6 text-lg leading-8 text-gray-600">
              {content.subtitle}
            </h2>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="/birth-doulas">Birth Doulas</Button>
              <Button href="/postpartum-doula" color="amber">
                Postpartum Doula
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl overflow-hidden rounded-md sm:mt-24 lg:sticky lg:top-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none overflow-hidden rounded-md sm:max-w-5xl lg:max-w-none">
              <Image
                src={BabyWithEyes}
                alt="Birth & postpartum doulas services"
                width={800}
                height={534}
                property={true}
                className="w-[32rem] rounded-md sm:w-[48rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="mt-2 font-display text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {content.our_philosophy_title}
                </h2>
                <p
                  className="prose prose-lg prose-amber mt-6 font-medium leading-8 prose-h2:font-display prose-h2:text-amber-700 prose-h3:font-display prose-h3:text-amber-700 prose-a:text-amber-700"
                  dangerouslySetInnerHTML={{
                    __html: content.our_philosophy_subtitle,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-md lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:ml-20">
            <Image
              src={Feet}
              alt={content.our_philosophy_title}
              width={925}
              height={616}
              className="w-[26rem] max-w-none rounded-md bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="prose lg:pr-4">
              <div
                className="prose prose-lg prose-amber max-w-xl leading-7 prose-h2:font-display prose-h2:text-amber-700 prose-h3:font-display prose-h3:text-amber-700 prose-a:text-amber-700 lg:max-w-lg"
                dangerouslySetInnerHTML={{
                  __html: content.our_philosophy_content,
                }}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 px-6 lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-y-10 lg:px-8">
          <ServiceContent
            title={content.birth_doula_title}
            content={content.birth_doula_content}
          >
            <div>
              <Button
                className="mt-8"
                size="medium"
                color="amber"
                href="/birth-doulas"
              >
                Birth Doulas
              </Button>
            </div>
          </ServiceContent>
          <ServiceContent
            title={content.postpartum_doula_title}
            content={content.postpartum_doula_content}
          >
            <div>
              <Button
                className="mt-8"
                size="medium"
                color="amber"
                href="/postpartum-doula"
              >
                Postpartum Doulas
              </Button>
            </div>
          </ServiceContent>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 px-8 lg:max-w-7xl">
          <div className="max-w-4xl">
            <h3 className="font-display text-2xl font-semibold">
              {content.bottom_title}
            </h3>
            <p
              className="prose prose-amber mt-4 max-w-xl leading-6 prose-h2:font-display prose-h2:text-amber-700 prose-h3:font-display prose-h3:text-amber-700 prose-a:text-amber-700"
              dangerouslySetInnerHTML={{
                __html: content.bottom_content,
              }}
            />
          </div>

          <div className="mt-16 max-w-4xl">
            <h3 className="font-display text-4xl font-semibold">
              {content.call_to_action_title}
            </h3>
            <p
              className="prose prose-amber mt-4 leading-6 prose-h2:font-display prose-h2:text-amber-700 prose-h3:font-display prose-h3:text-amber-700 prose-a:text-amber-700"
              dangerouslySetInnerHTML={{
                __html: content.call_to_action_content,
              }}
            />

            <div className="mt-10 flex flex-col items-center space-x-4 text-center text-lg font-medium text-slate-800 lg:flex-row">
              <div>
                <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_DISPLAY}</a>
              </div>
              <div>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
