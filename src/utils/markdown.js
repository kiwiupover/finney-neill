import Showdown from 'showdown'

const markdownToHtml = (markdown) => {
  const converter = new Showdown.Converter()
  const html = converter.makeHtml(markdown)
  return html
}

export function markdownParse(object, fields = []) {
  fields.forEach((field) => {
    if (!object[field]) {
      console.error(`Field ${field} does not exist in ${object.id}`)
      return (object[field] = '')
    }

    object[field] = markdownToHtml(object[field])
  })
  return object
}
