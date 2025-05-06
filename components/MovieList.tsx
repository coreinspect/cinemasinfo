import Movie from "./Movie";
import { MovieListProps } from "@/types";

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies?.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
