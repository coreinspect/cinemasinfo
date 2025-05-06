"use client";

import ListBox from "@/components/ListBox";
import Navbar from "@/components/Navbar";
import WatchedBox from "@/components/WatchedBox";
import { useState } from "react";
import { tempMovieData, tempWatchedData } from "@/Data/TempData";
import { Movie, WatchedMovie } from "@/types";
import Logo from "@/components/Logo";
import Searchbar from "@/components/Searchbar";
import NavResult from "@/components/NavResult";
import MovieList from "@/components/MovieList";
import WatchedSummary from "@/components/WatchedSummary";
import Watched from "@/components/Watched";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);
  const [watched, setWatched] = useState<WatchedMovie[]>(tempWatchedData);
  return (
    <>
      <div className="flex flex-col min-h-screen @container mx-auto">
        <Navbar>
          <Logo />
          <Searchbar />
          <NavResult movies={movies} />
        </Navbar>
        <div className="flex flex-1 flex-col md:flex-row gap-4 p-4">
          <div className="w-full md:w-1/2">
            <ListBox>
              <MovieList movies={movies} />
            </ListBox>
          </div>
          <div className="w-full md:w-1/2">
            <WatchedBox>
              <WatchedSummary watched={watched} />
              <Watched watched={watched} />
            </WatchedBox>
          </div>
        </div>
      </div>
    </>
  );
}
