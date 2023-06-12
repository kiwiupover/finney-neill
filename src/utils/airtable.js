import Airtable from 'airtable'
import { markdownParse } from '@/utils/markdown'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID
)

export function tableByID(tableID) {
  return base(tableID)
}

const table = base(process.env.AIRTABLE_TABLE_ID)

export function minifyItems(records) {
  return records.map((record) => getMinifiedItem(record))
}

export function minifyItem(record) {
  return getMinifiedItem(record)
}

export function updateRecord(record, baseTable = 'Doulas') {
  try {
    base(baseTable).update(record)
  } catch (error) {
    console.log({ error })
  }
}

function getMinifiedItem(record) {
  return {
    id: record.id,
    ...record.fields,
  }
}

export async function contentPage({ tableId, view, slug, fields = [] }) {
  const records = await tableByID(tableId)
    .select({
      view,
      filterByFormula: `slug = '${slug}'`,
    })
    .firstPage()

  const page = minifyItem(records[0]) || null

  if (!page) return null

  return await markdownParse(page, fields)
}

export { table }
