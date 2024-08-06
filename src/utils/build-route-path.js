// /users/:id is a route path that can be used to delete a user by ID.
export function buildRoutePath(path) {
  const routeParamsRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(
    routeParamsRegex,
    "(?<$1>[a-z0-9i_]+)"
  );

  const pathRegex = new RegExp(`^${pathWithParams}`);

  return pathRegex;
}
