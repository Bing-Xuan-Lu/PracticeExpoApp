const API_URL = process.env.TYGPS_API_PROD_URL;

//共通Call Api Function
export default function fetchDataAsync(apiRouteUrl, data, method) {
  let httpGetParam =
    method.toUpperCase() == "GET" ? `${data}` : "";
  return fetch(`${API_URL}${apiRouteUrl}${httpGetParam}`, {
    method: method,
    mode: "cors",
    headers: new Headers({
      credentials: "include",
      "Content-Type": "application/json",
      Accept: "application/json",
      Connection: "close",
    }),
    body:
      typeof data === "object"
        ? JSON.stringify({
            ...data,
          })
        : null,
  }).catch((error) => {
    console.log(error);
  });
}
