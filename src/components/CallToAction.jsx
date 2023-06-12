'use client'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import { track } from '@amplitude/analytics-browser'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative py-32 overflow-hidden b bg-gradient-to-r from-amber-400 via-amber-700 to-amber-800"
    >
      <Container className="relative">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl">
            Let&apos;s meet!
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Ready for an empowering birth experience? Connect with our
            compassionate doulas, dedicated to supporting you every step of the
            way—before, during, and after your baby&apos;s arrival.
          </p>
          <Button
            href="/birth-doulas"
            color="white"
            className="mt-10"
            onClick={() =>
              track('Call To Action Clicked', { name: 'Meet the Doulas' })
            }
          >
            Meet the Doulas
          </Button>
        </div>
      </Container>
    </section>
  )
}
