export default async function fetchWrapper(url: string, options?: any) {
  const defaultOptions = {
    url: process.env.NEXT_PUBLIC_API_URL + url,
    method: "GET",
    credentials: "include",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const res = await fetch(defaultOptions.url, { ...defaultOptions, ...options })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
}
