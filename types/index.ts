// Basic Movie type with common properties
export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

// WatchedMovie extends Movie with additional properties
export interface WatchedMovie extends Movie {
  runtime: number;
  imdbRating: number;
  userRating: number;
}

// Props types for components
export interface MovieProps {
  movie: Movie;
}

export interface MovieListProps {
  movies: Movie[];
}

export interface WatchedProps {
  watched: WatchedMovie[];
}

export interface WatchedSummaryProps {
  watched: WatchedMovie[];
}
