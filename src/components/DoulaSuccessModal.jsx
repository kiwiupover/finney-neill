'use client'

import Script from 'next/script'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Modal } from '@/components/ui/Modal'
import { track } from '@amplitude/analytics-browser'

export function DoulaSuccessModal({ doula }) {
  const router = useRouter()
  const [showSuccessModal, setShowSuccessModal] = useState(true)

  function setSuccessOpen(showSuccessModal) {
    setShowSuccessModal(!showSuccessModal)
    router.push(`${doula.slug}`)
  }

  useEffect(() => {
    track('Success modal rendered', {
      doula: `doula: ${doula.name}`,
    })
  }, [doula.name])

  return (
    <Modal
      isOpen={showSuccessModal}
      setOpen={() => {
        setSuccessOpen(showSuccessModal)
      }}
      title={`Schedule an Appointment with ${doula.name}`}
    >
      <div className="flex max-w-4xl items-center pt-6">
        <iframe
          id="acuity-embed"
          src={doula.acuity_link}
          title={`Schedule a meet and greet with ${doula.name}`}
          width="100%"
          height="800"
        ></iframe>
        <Script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></Script>
      </div>
    </Modal>
  )
}
