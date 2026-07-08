export function extractQueryParams(query) {
  return query
    .substr(1)
    .splice("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});
}
