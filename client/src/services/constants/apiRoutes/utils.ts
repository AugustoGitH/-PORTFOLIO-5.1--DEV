const assignRoutes = <T>(baseUrl: string, urls: Record<string, string>): T => {
  const removeBarsStartEndRoute = (route: string): string => {
    return `${route[0] === '/' ? '.' : ''}${route}${
      route[route.length - 1] === '/' ? '.' : ''
    }`.replace(/(\.\/|\/\.)/g, '');
  };

  const baseUrlTrated = removeBarsStartEndRoute(baseUrl);
  return Object.fromEntries(
    Object.entries(urls).map(([name, routeUrl]) => {
      const routeUrlTrated = removeBarsStartEndRoute(routeUrl);
      return [name, `/${baseUrlTrated}/${routeUrlTrated}`];
    })
  ) as T;
};

export default assignRoutes;
