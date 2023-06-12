import { ImageCropUrl } from '@/utils/image-crop'
import { shuffleArray } from '@/utils/shuffle-array'
import { Testimonials } from '@/components/Testimonials'
import { tableByID, minifyItems } from '@/utils/airtable'

const getProps = async () => {
  const reviewTableId = 'tblkbKKu2L0uadRsw'
  const reviewTable = tableByID(reviewTableId)

  const reviewRecords = await reviewTable
    .select({ view: 'reviews' })
    .firstPage()

  const reviews = minifyItems(reviewRecords)

  const reviewsWithoutRating = reviews.filter((review) => !review.rating)
  const reviewsWithRating = reviews.filter((review) => review.rating)

  return {
    reviews: [
      ...shuffleArray(reviewsWithRating),
      ...shuffleArray(reviewsWithoutRating),
    ],
  }
}

export async function generateMetadata() {
  const image =
    'https://res.cloudinary.com/dhqv889nh/image/upload/v1682869348/baby-hands_xd5aqh.jpg'

  const title = "Testimonials of Seattle Birth Doulas' Impact"
  const description =
    "Learn from clients' birth experiences with Seattle Birth Doulas. Visit our testimonials page to discover how our doulas can support you during pregnancy & childbirth."

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.seattlebirthdoulas.com/testimonials`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.seattlebirthdoulas.com/testimonials`,
      images: [
        {
          url: ImageCropUrl({
            imageUrl: image,
            width: 1200,
            height: 630,
          }),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export default async function TestimonialsPage() {
  const { reviews } = await getProps()
  return (
    <div className="relative isolate">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-amber-500/30 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
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
      <div className="absolute top-0 right-0 -ml-24 overflow-hidden left-1/2 -z-10 transform-gpu blur-3xl lg:ml-24 xl:ml-48">
        <svg
          viewBox="0 0 801 1036"
          aria-hidden="true"
          className="w-[50.0625rem]"
        >
          <path
            fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
            fillOpacity=".3"
            d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
          />
          <defs>
            <linearGradient
              id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
              x1="508.179"
              x2="-28.677"
              y1="-116.221"
              y2="1091.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fca489" />
              <stop offset={1} stopColor="#ffb580" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Testimonials reviews={reviews} />
    </div>
  )
}
