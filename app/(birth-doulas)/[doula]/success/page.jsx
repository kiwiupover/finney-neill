import { DoulaSuccessModal } from '@/components/DoulaSuccessModal'

import { getApiDoulaBySlug } from '@/api/birth-doulas'

export async function generateMetadata({ params }) {
  return {
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function Page({ params }) {
  const doula = await getApiDoulaBySlug(params.doula)

  return <DoulaSuccessModal doula={doula} />
}
