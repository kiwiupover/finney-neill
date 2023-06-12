'use client'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY, EMAIL } from '@/utils/const'

import { useEffect, useRef } from 'react'

import { useIntersectionObserver } from 'usehooks-ts'
import { track } from '@amplitude/analytics-browser'

let hasNotFooterBeenSeenOnThisPage = ''

export function Footer({ content }) {
  const ref = useRef()
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible && hasNotFooterBeenSeenOnThisPage !== window.location.href) {
      hasNotFooterBeenSeenOnThisPage = window.location.href
      track('Footer Was Viewed', {
        'Page URL': window.location.href,
      })
    }
  }, [isVisible])

  return (
    <footer className="bg-slate-100">
      <Container>
        <div className="py-16">
          <nav className="mt-10 text-base" aria-label="quick links" ref={ref}>
            <div className="-my-1 flex flex-col justify-center gap-x-4 text-center lg:flex-row">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Doula Services</NavLink>
              <NavLink href="/birth-doulas">Birth Doulas</NavLink>
              <NavLink href="/postpartum-doula">Postpartum Doulas</NavLink>
              <NavLink href="/#How-Seattle-Birth-Doulas-Works">
                How Seattle Birth Doulas Works
              </NavLink>
              <NavLink href="/resources">Resources</NavLink>
              <NavLink href="/testimonials">Testimonials</NavLink>
            </div>
          </nav>
          <div className="mt-10 flex flex-col items-center justify-center space-x-4 text-center text-lg font-medium text-slate-800 lg:flex-row">
            <div>
              <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_DISPLAY}</a>
            </div>
            <div>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-slate-500 p-10 text-center text-sm text-slate-50">
        {content.subfooter}
      </div>
      <div className="text-50 flex flex-col items-center border-t border-slate-700/10 bg-slate-800 p-4">
        <div className="flex flex-col items-center justify-center space-x-4 space-y-2 sm:flex-row sm:space-y-0">
          <p className="mt-6 text-center text-sm text-slate-50 sm:mt-0 ">
            Copyright &copy; {new Date().getFullYear()} {content.title}. All
            rights reserved.
          </p>
          <a
            className="text-sm text-gray-100 hover:text-gray-300 "
            href="/terms-of-service"
          >
            Terms of Service
          </a>
          <a
            className="text-sm text-gray-100 hover:text-gray-300"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
