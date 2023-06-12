'use client'
import Image from 'next/image'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { Modal } from '@/components/ui/Modal'

import { ArrowLeftIcon } from '@heroicons/react/20/solid'

import { track } from '@amplitude/analytics-browser'
import { NavLink } from '@/components/NavLink'

const Certifications = ({ certifications }) => {
  return (
    <>
      {certifications && (
        <div className="prose prose-sm pb-6">
          <h3 className="font-display text-lg text-amber-700">
            Certifications
          </h3>
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

export function Doula({ doula }) {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  let [isOpen, setIsOpen] = useState(false)

  function setOpen(value) {
    if (value) {
      track('Doula Meet and Greet', { doula: `doula: ${doula.name}` })
    }

    setIsOpen(value)
  }

  function setSuccessOpen(value) {
    const queryParams = { ...router.query }

    delete queryParams.success

    const updatedUrl = {
      pathname: router.pathname,
      query: queryParams,
    }

    router.push(updatedUrl)
    setShowSuccessModal(!value)
  }

  const { certifications } = doula
  const doulaCertifications = certifications
    ? certifications.split(/\r?\n/)
    : null

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <div className="space-y-10 lg:sticky lg:top-32">
          <Image
            src={doula.images[0].secure_url}
            alt={`${doula.name} birth doula`}
            width={500}
            height={500}
            property={true}
            className="rounded-md"
          />
          <div className="hidden lg:block">
            <Certifications certifications={doulaCertifications} />
          </div>
        </div>

        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <div className="sm:flex sm:items-baseline">
            <h1 className="inline font-display text-3xl font-bold tracking-normal text-amber-700 sm:text-4xl">
              {doula.name}
            </h1>
            <span className="block text-base font-light text-slate-900 sm:ml-4 sm:inline">
              {doula.pro_nouns}
            </span>
          </div>

          <div className="mt-6">
            <h2 className="sr-only">Doula Description</h2>

            {doula.long_description && (
              <div
                className="prose-md mb-4 space-y-4 text-base text-slate-700"
                dangerouslySetInnerHTML={{ __html: doula.long_description }}
              />
            )}
          </div>

          <div className="mt-3">
            <h2 className="sr-only">Doula information</h2>
            <p className="font-display text-3xl font-bold tracking-tight text-amber-900">
              <span className="align-super text-lg">$</span>
              {doula.price}
            </p>
          </div>

          {doula.seventeen_hats_lead_link && (
            <div className="sm:flex-col1 mt-10 flex">
              <Button onClick={() => setOpen(true)}>Book Meet and Greet</Button>
              <Modal
                isOpen={isOpen}
                setOpen={setOpen}
                title={`Schedule an Appointment with ${doula.name}`}
              >
                <div className="flex max-w-4xl items-center pt-6">
                  <iframe
                    name="lc_contact_form"
                    title={`Schedule a meet and greet with ${doula.name}`}
                    width="100%"
                    height="800"
                    src={doula.seventeen_hats_lead_link}
                  ></iframe>
                  <Script
                    type="text/javascript"
                    src="https://673031.17hats.com/vendor/iframeSizer.min.js"
                  ></Script>
                </div>
              </Modal>
            </div>
          )}

          {doula.service_description && (
            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
              <div className="divide-y divide-slate-200">
                <div>
                  <div className="prose prose-sm pb-6">
                    <h3 className="font-display text-xl text-amber-700">
                      Birth Support Package
                    </h3>
                    <div
                      className="prose-sm"
                      dangerouslySetInnerHTML={{
                        __html: doula.service_description,
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
      </div>
      <div className="flex items-center">
        <NavLink
          href="/birth-doulas"
          variant="outline"
          size="small"
          color="amber"
          className="mt-8 flex items-center space-x-2"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Birth Doulas
        </NavLink>
      </div>
    </div>
  )
}
