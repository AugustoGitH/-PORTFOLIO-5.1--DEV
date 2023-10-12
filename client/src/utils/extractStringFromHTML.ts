const extractStringFromHTML = (html: string): string => {
  return html.replace(/<[^>]+>/g, '')
}

export default extractStringFromHTML
