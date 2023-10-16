const extractStringFromHTML = (html: string): string => {
  return html.replace(/<[^>]+>/g, '').trim()
}

export default extractStringFromHTML
