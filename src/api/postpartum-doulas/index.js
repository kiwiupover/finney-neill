import { markdownParse } from '@/utils/markdown'
import { tableByID, minifyItems, minifyItem } from '@/utils/airtable'

import { processRecordImages } from '@/utils/process-images'
import { POSTPARTUM_TABLE_ID } from '@/utils/const'

const localImageDirectory = `${process.cwd()}/public/images/doulas`
const updateTable = 'Postpartum Doulas'

let doulasMaps = []

export async function getApiPostpartumDoulas(view = 'viewable') {
  const table = tableByID(POSTPARTUM_TABLE_ID)

  const data = await table.select({ view, maxRecords: 20 }).firstPage()

  const doulas = minifyItems(data)

  const promisedDoulas = await Promise.allSettled(
    doulas.map(async (doula) => {
      return await processRecordImages(doula, localImageDirectory, updateTable)
    })
  )

  const processedDoulas = promisedDoulas.map((doula) => {
    const { id, slug } = doula.value
    doulasMaps.push({ id, slug })
    return doula.value
  })

  return processedDoulas
}

export async function getApiPostpartumDoulaBySlug(slug) {
  const table = tableByID(POSTPARTUM_TABLE_ID)

  const data = await table
    .select({
      view: 'viewable',
      filterByFormula: `slug = '${slug}'`,
    })
    .firstPage()

  const doula = minifyItem(data[0])

  const markdownProcessedPage = await markdownParse(doula, [
    'long_description',
    'service_description',
  ])
  const processedDoula = await processRecordImages(
    markdownProcessedPage,
    localImageDirectory,
    updateTable
  )

  return processedDoula
}

export async function extractPostpartumDoulaIds(view = 'viewable') {
  const doulas = await getApiDoulas(view)
  const params = doulas.map((doula) => {
    return {
      params: {
        id: doula.id,
        slug: doula.slug,
      },
    }
  })

  return params
}

export default async function handler(req, res) {
  const doulas = await getApiPostpartumDoulas()
  res.status(200).json(doulas)
}
