'use client'
import Image from 'next/image'
import Script from 'next/script'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Modal } from '@/components/ui/Modal'

const Certifications = ({ certifications }) => {
  return (
    <>
      {certifications && (
        <div className="pb-6 prose-sm prose">
          <h3 className="text-lg font-display text-rose-700">Certifications</h3>
          <ul role="list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export function PostpartumDoula({ postpartumDoula }) {
  let [isOpen, setIsOpen] = useState(false)

  function setOpen(value) {
    setIsOpen(value)
  }
  const { service_description, certifications } = postpartumDoula

  const doulaCertifications = certifications
    ? certifications.split(/\r?\n/)
    : null
  const serviceDescription = service_description

  return (
    <div className="relative overflow-hidden bg-white isolate">
      <svg className="absolute left-[calc(50%-4rem)] top-10 -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
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
        <svg x="50%" y={-1} className="overflow-visible fill-sky-600/10">
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
            <stop stopColor="#bae6fd" />
            <stop offset={1} stopColor="#0369a1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="sm:flex sm:items-baseline">
              <h1 className="text-3xl font-bold tracking-normal font-display text-rose-700 sm:text-4xl">
                {postpartumDoula.title}
              </h1>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold tracking-normal font-display text-slate-700 sm:text-2xl">
                {postpartumDoula.name}
              </h2>
              <h3 className="sr-only">Doula Description</h3>

              <div
                className="mt-6 text-base leading-8 prose text-slate-700"
                dangerouslySetInnerHTML={{
                  __html: postpartumDoula.long_description,
                }}
              />
            </div>

            <div className="mt-3">
              <h2 className="sr-only">Doula information</h2>
              <p className="text-3xl font-bold tracking-tight font-display text-rose-900">
                <span className="text-lg align-super">$</span>
                {postpartumDoula.price}
              </p>
            </div>

            <div className="flex mt-10 sm:flex-col1">
              <Button onClick={() => setIsOpen(true)}>
                Book Postpartum Meet & Greet
              </Button>
              <Modal
                isOpen={isOpen}
                setOpen={setOpen}
                title={`Schedule an postpartum meet & greet with ${postpartumDoula.name}`}
              >
                <div className="flex items-center max-w-4xl pt-6">
                  <iframe
                    name="lc_contact_form"
                    title={`Schedule a postpartum meet & greet with ${postpartumDoula.name}`}
                    frameborder="0"
                    width="100%"
                    height="600"
                    src={postpartumDoula.schedule_link}
                  ></iframe>
                  <Script
                    type="text/javascript"
                    src="https://673031.17hats.com/vendor/iframeSizer.min.js"
                  ></Script>
                </div>
              </Modal>
            </div>

            {serviceDescription && (
              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>
                <div className="divide-y divide-slate-200">
                  <div>
                    <div className="pb-6 prose-sm prose">
                      <h3 className="text-xl font-display text-rose-700">
                        Birth Support Package
                      </h3>
                      <div
                        className="text-base leading-8 prose text-slate-700"
                        dangerouslySetInnerHTML={{
                          __html: serviceDescription,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </section>
            )}
            <div className="block lg:hidden">
              <Certifications certifications={doulaCertifications} />
            </div>
          </div>
          <div className="space-y-10 top-32 lg:sticky">
            <Image
              src={postpartumDoula.images[0].secure_url}
              alt={`${postpartumDoula.name} birth doula`}
              width={500}
              height={500}
              property={true}
              className="rounded-md"
            />
            <div className="hidden lg:block">
              <Certifications certifications={doulaCertifications} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
