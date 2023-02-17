export const THE_MOVIE_API = "https://api.themoviedb.org/3/";
export const THE_MOVIE_API_KEY = ""
export const THE_MOVIE_API_TOKEN = ""


export const requestConfig = (method) => {
  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${THE_MOVIE_API_TOKEN}`
    },
  }

  return config;
};
