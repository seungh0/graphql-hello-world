import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getStories = (limit, rating) => {
  return fetch(`${API_URL}?limit=${limit}&rating=${rating}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
