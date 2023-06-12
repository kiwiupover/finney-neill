'use client'
import { Button } from '@/components/Button'
import { Review } from '@/components/ui/Review'
import { Container } from '@/components/Container'
import clsx from 'clsx'
import Image from 'next/image'

import GoogleReviews from '@/images/google-reviews.svg'
import Link from 'next/link'

const googleReviewsLink =
  'https://www.google.com/maps/place/Seattle+Birth+Doulas/@47.4710857,-122.4645161,9z/data=!4m16!1m7!3m6!1s0x8c786fa2231b7edb:0x3a8c2ef1b00ca9ce!2sSeattle+Birth+Doulas!8m2!3d47.4729834!4d-121.803803!16s%2Fg%2F11txff1kmd!3m7!1s0x8c786fa2231b7edb:0x3a8c2ef1b00ca9ce!8m2!3d47.4729834!4d-121.803803!9m1!1b1!16s%2Fg%2F11txff1kmd?hl=en-US'

const GoogleReviewComponent = ({ className }) => {
  return (
    <div className={className}>
      <a
        href={googleReviewsLink}
        target="_blank"
        className="flex items-center gap-1 text-base text-slate-500"
      >
        Seattle Birth Doula reviews on{' '}
        <Image
          src={GoogleReviews}
          alt="Seattle Birth Doulas Google Reviews"
          width="80"
          height="40"
          className="inline"
        />
      </a>
    </div>
  )
}

export function Testimonials({ reviews, homepage = false }) {
  if (homepage) {
    reviews = reviews.slice(0, 4)
  }

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className={clsx(
        'relative z-10 py-20 sm:py-32',
        homepage && 'bg-gradient-to-br from-slate-50 to-slate-200'
      )}
    >
      <Container>
        {homepage ? (
          <div className="mx-auto max-w-2xl md:text-center">
            <div className="my-3 text-xl font-semibold text-amber-500">
              Testimonials
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Reviews and Thanks
            </h2>
            <GoogleReviewComponent className="flex justify-center" />
          </div>
        ) : (
          <div className="mx-auto">
            <h2 className="my-3 text-xl font-semibold text-amber-500">
              Testimonials
            </h2>

            <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Seattle Birth Doulas&apos; Impact
            </h1>
            <GoogleReviewComponent />
          </div>
        )}
        <ul
          role="list"
          className={clsx(
            'mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-6 lg:mt-20 lg:max-w-none',
            homepage ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          )}
        >
          {reviews.map((review, index) => (
            <li key={index}>
              <Review review={review} />
            </li>
          ))}
        </ul>
        {homepage && (
          <Button
            size="small"
            color="amber"
            className="mt-12"
            href="/testimonials"
          >
            Read More Reviews
          </Button>
        )}
      </Container>
    </section>
  )
}
