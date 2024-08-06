// /users/:id is a route path that can be used to delete a user by ID.
export function buildRoutePath(path) {
  const routeParamsRegex = /:([a-zA-Z]+)/g;
  // prettier-ignore
  const pathWithParams = path.replaceAll(routeParamsRegex, '(?<$1>[a-z0-9\-_]+)');

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
