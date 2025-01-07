import { useState } from "react";
import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { Main } from "./Main";
import { NumResults } from "./NumResults";
import { Search } from "./Search";
import { ErrorMessage } from "./ErrorMessage";
import { Box } from "./Box";
import { Loader } from "./Loader";
import { MovieList } from "./MovieList";
import { WatchedMovie } from "./WatchedMovie";
import { WatchedSummary } from "./WatchedSummary";
import { WatchedMoviesList } from "./WatchedMoviesList";
import { Movie } from "./Movie";
import { MovieDetails } from "./MovieDetails";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

//const key = "d2350dc3";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    //localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
          {/*{isLoading ? <Loader /> : <MovieList movies={movies} />}*/}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

<Loader />;

<ErrorMessage />;

<NavBar />;

<Logo />;

<Search />;

<NumResults />;

<Main />;

<Box />;

<MovieList />;

<MovieDetails />;

<Movie />;

<WatchedSummary />;

<WatchedMoviesList />;

<WatchedMovie />;
