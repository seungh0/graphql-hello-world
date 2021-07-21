export let movies = [
  {
    id: 1,
    name: "will",
    score: 1,
  },
  {
    id: 2,
    name: "erin",
    score: 8,
  },
  {
    id: 3,
    name: "seungho",
    score: 99,
  },
  {
    id: 4,
    name: "koko",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
