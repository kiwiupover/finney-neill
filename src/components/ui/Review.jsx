import clsx from 'clsx'
import { useState } from 'react'
import { Avatar } from '@/components/ui/Avatar'
import { track } from '@amplitude/analytics-browser'
import { StarIcon } from '@heroicons/react/20/solid'

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Review({ review }) {
  const [showMore, setShowMore] = useState(false)

  const hasReadMore = review.Review.length > 200

  const setShowMoreReview = (showMore) => {
    setShowMore(!showMore)
    if (showMore) {
      track('Clicked Show More Review', { review: review.Name })
    }
  }

  const initials = (name) => {
    return name.split(' ').reduce((acc, name) => {
      return acc + name[0]
    }, '')
  }

  return (
    <figure className="relative z-50 p-6 bg-white shadow-xl rounded-2xl shadow-slate-900/10">
      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
      <blockquote className="relative">
        <p
          className={`text-lg tracking-tight text-slate-900 ${
            showMore ? '' : 'line-clamp-5'
          }`}
        >
          {review.Review}
        </p>
        {hasReadMore && (
          <button
            className="mt-1 text-sm text-right text-slate-600 hover:text-slate-800"
            onClick={() => setShowMoreReview(!showMore)}
          >
            {showMore ? 'Show less' : 'Show more'}
          </button>
        )}
      </blockquote>
      <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
        <div>
          <div className="text-base font-display text-slate-900">
            {review.Name}
          </div>
          {review.rating && (
            <>
              <div className="flex items-center mt-1">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={clsx(
                      review.rating > rating
                        ? 'text-amber-500'
                        : 'text-slate-300',
                      'h-4 w-4 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{review.rating} out of 5 stars</p>
            </>
          )}
        </div>
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Avatar initials={initials(review.Name)} />
        </div>
      </figcaption>
    </figure>
  )
}
