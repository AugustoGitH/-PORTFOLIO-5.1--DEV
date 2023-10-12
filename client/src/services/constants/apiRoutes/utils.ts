type TObjectRoutes<T extends string> = Record<T, string>

const assignRoutes = <T extends string>(
  baseUrl: string,
  urls: TObjectRoutes<T>
): TObjectRoutes<T> => {
  const removeBarsStartEndRoute = (route: string): string => {
    return `${route[0] === '/' ? '.' : ''}${route}${
      route[route.length - 1] === '/' ? '.' : ''
    }`.replace(/(\.\/|\/\.)/g, '')
  }

  const baseUrlTrated = removeBarsStartEndRoute(baseUrl)
  return Object.fromEntries(
    Object.entries(urls).map(([name, routeUrl]) => {
      const routeUrlTrated = removeBarsStartEndRoute(routeUrl as string)
      return [name, `/${baseUrlTrated}/${routeUrlTrated}`]
    })
  ) as TObjectRoutes<T>
}

export default assignRoutes
