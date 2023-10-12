interface IOptionsNormalizeString {
  specificChar?: string
  toLowerCase?: boolean
  toUpperCase?: boolean
}

const normalizeString = (
  str: string,
  options?: IOptionsNormalizeString
): string => {
  const stringWithoutAccents = str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  const regexRomoveCharsSpecial = new RegExp(
    `[^a-zA-Z0-9 ${options?.specificChar ?? ''}]`,
    'g'
  )

  const normalizeString = stringWithoutAccents.replace(
    regexRomoveCharsSpecial,
    ''
  )
  if (options?.toLowerCase) {
    return normalizeString.toLowerCase()
  }
  if (options?.toUpperCase) {
    return normalizeString.toUpperCase()
  }
  return normalizeString.trim()
}

export default normalizeString
