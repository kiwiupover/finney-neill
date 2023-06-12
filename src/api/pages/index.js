import { markdownParse } from '@/utils/markdown'
import { processRecordImages } from '@/utils/process-images'
import { tableByID, minifyItems, minifyItem } from '@/utils/airtable'

import { PAGE_CONTENT_TABLE_ID } from '@/utils/const'

const localImageDirectory = `${process.cwd()}/public/images/pages`

const updateTable = 'Page Content'

const pagesMaps = []

export async function getApiPages(view = 'pages') {
  const table = tableByID(PAGE_CONTENT_TABLE_ID)

  const data = await table.select({ view, maxRecords: 100 }).firstPage()

  const pages = minifyItems(data)

  const promisedPages = await Promise.allSettled(
    pages.map(async (page) => {
      const markedPage = await markdownParse(page, ['subtitle', 'content'])
      return await processRecordImages(
        markedPage,
        localImageDirectory,
        updateTable
      )
    })
  )

  const processedPages = promisedPages.map((page) => {
    pagesMaps.push(page.value)
    return page.value
  })

  return processedPages
}

export async function getApiPageBySlug(slug) {
  if (pagesMaps.length > 0) {
    return pagesMaps.find((article) => article.slug === slug)
  }

  await getApiPages()

  return pagesMaps.find((article) => article.slug === slug)
}

export async function randomArticles({ excludedId = '', count = 2 }) {
  if (pagesMaps.length === 0) {
    await getApiPages()
  }

  const filteredArray = pagesMaps
    .filter((article) => article.visible === true)
    .filter((article) => article.slug !== excludedId)

  const articles = []
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * filteredArray.length)
    if (articles.includes(filteredArray[randomIndex])) {
      i--
      continue
    }
    articles.push(filteredArray[randomIndex])
  }

  return articles
}

export async function firstTwoArticles({ excludedId = '' }) {
  if (pagesMaps.length === 0) {
    await getApiPages()
  }

  const filteredArray = pagesMaps
    .filter((article) => article.visible === true)
    .filter((article) => article.slug !== excludedId)

  return filteredArray.slice(0, 2)
}

export async function extractPageIds(view = 'pages') {
  const pages = await getApiPages(view)
  const params = pages.map((page) => {
    return {
      params: {
        id: page.id,
        title: page.title,
        slug: page.slug,
      },
    }
  })

  return params
}

export default async function handler(req, res) {
  const pages = await getApiDoulas()
  res.status(200).json(pages)
}
