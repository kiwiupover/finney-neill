import { markdownParse } from '@/utils/markdown'
import { tableByID, minifyItems } from '@/utils/airtable'

import { DOULA_TABLE_ID } from '@/utils/const'

import { processRecordImages } from '@/utils/process-images'

const localImageDirectory = `${process.cwd()}/public/images/doulas`

let doulasMaps = []
let doulaSlugs

const processDoula = async (doula) => {
  const markdownProcessedPage = await markdownParse(doula, [
    'long_description',
    'service_description',
  ])

  const processedDoula = await processRecordImages(
    markdownProcessedPage,
    localImageDirectory
  )

  return processedDoula
}

export async function getApiDoulas(view = 'viewable') {
  const table = tableByID(DOULA_TABLE_ID)

  const data = await table.select({ view, maxRecords: 100 }).firstPage()

  const doulas = minifyItems(data)

  const promisedDoulas = await Promise.allSettled(
    doulas.map(async (doula) => {
      return await processDoula(doula)
    })
  )

  const processedDoulas = promisedDoulas.map((doula) => {
    doulasMaps.push(doula.value)
    return doula.value
  })

  return processedDoulas
}

export async function getApiDoulaBySlug(slug) {
  if (doulasMaps.length > 0) {
    return doulasMaps.find((doula) => doula.slug === slug)
  }

  await getApiDoulas()

  return doulasMaps.find((doula) => doula.slug === slug)
}

export async function extractDoulaIds(view = 'viewable') {
  if (doulaSlugs) return doulaSlugs

  const doulas = await getApiDoulas(view)
  const params = doulas.map((doula) => {
    return {
      params: {
        id: doula.id,
        name: doula.name,
        slug: doula.slug,
      },
    }
  })

  doulaSlugs = params
  return params
}

export default async function handler(req, res) {
  const doulas = await getApiDoulas()
  res.status(200).json(doulas)
}
