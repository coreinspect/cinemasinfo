import Image from "next/image";
import { WatchedProps } from "@/types";

const Watched = ({ watched }: WatchedProps) => {
  const movies = Array.isArray(watched) ? watched : [];

  return (
    <>
      <div className="p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <li
                key={movie.imdbID}
                className="flex flex-col bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden">
                  <Image
                    src={movie.Poster}
                    alt={`${movie.Title} poster`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {movie.Title}
                  </h4>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐️</span>
                      <span className="font-medium">{movie.imdbRating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-blue-500">🌟</span>
                      <span className="font-medium">{movie.userRating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">⏳</span>
                      <span className="font-medium">{movie.runtime} mins</span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="col-span-full text-center text-slate-500 dark:text-slate-400 py-6">
              No movies in your watchlist yet!
            </p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Watched;
