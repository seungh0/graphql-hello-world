import { getMovies, getById, addMovie, deleteMovie } from "./db";
import { getStories } from "./api";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),

    stories: (_, { limit, rating }) => getStories(limit, rating),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
