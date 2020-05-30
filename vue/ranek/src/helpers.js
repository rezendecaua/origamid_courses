import qs from "querystring";

export function serialize(path, obj) {
  console.log(`/${path}?${qs.stringify({ _limit: 10, ...obj })}`);
  return `/${path}?${qs.stringify({ _limit: 10, ...obj })}`;
}
