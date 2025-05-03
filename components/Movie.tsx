import Image from "next/image";
import React from "react";

interface MovieProps {
  movie: {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
  };
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <>
      <li className="flex flex-col bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-md">
        <div className="relative aspect-[2/3] w-full overflow-hidden">
          <Image
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-lg text-slate-900 dsark:text-white mb-2 line-clamp-2">
            {movie.Title}
          </h3>
          <div className="flex items-center mt-auto">
            <span className="text-slate-500 dark:text-slate-400 mr-1">🗓</span>
            <span className="text-slate-700 dark:text-slate-300">
              {movie.Year}
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default Movie;
