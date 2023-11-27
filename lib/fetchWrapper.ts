export default function fetchWrapper(url: string, options?: any) {
  const baseUrl = "https://api.themoviedb.org/3";
  const defaultOptions = {
    url: baseUrl + url,
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  return fetch({ ...defaultOptions, ...options })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
