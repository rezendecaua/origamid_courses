import qs from "querystring";

export function serialize(path, obj) {
  return `/${path}?${qs.stringify({ _limit: 10, ...obj })}`;
}
