import React from "react";

interface Movie {
  imdbRating: number;
  userRating: number;
  runtime: number;
}

interface WatchedSummaryProps {
  watched: Movie[];
}

const average = (arr: number[]): number => {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((acc, cur) => acc + cur / arr.length, 0);
};

const WatchedSummary = ({ watched }: WatchedSummaryProps) => {
  // Ensure watched is an array before using it
  const movies = Array.isArray(watched) ? watched : [];

  const avgImdbRating = average(movies.map((movie) => movie.imdbRating));
  const avgUserRating = average(movies.map((movie) => movie.userRating));
  const avgRuntime = average(movies.map((movie) => movie.runtime));

  return (
    <>
      <div className="bg-slate-50 dark:bg-slate-900 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100">
            Movies you watched
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <span className="text-sm">#️⃣</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {movies.length} movies
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">⭐️</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {avgImdbRating.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">🌟</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {avgUserRating.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">⏳</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {Math.round(avgRuntime)} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchedSummary;
