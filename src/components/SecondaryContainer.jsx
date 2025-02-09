import { useSelector } from "react-redux";

import { MovieList } from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-7 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Top Rated Movies"}
          movies={movies.topRated}
        ></MovieList>
        <MovieList
          title={"Popular Movies"}
          movies={movies.popularMovies}
        ></MovieList>
        <MovieList
          title={"Thriller Movies"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Adventure Movies"}
          movies={movies.nowPlayingMovies}
        ></MovieList>

        {/* 
    
    MovieList - Popular
    MovieCard * n
    MovieList - NowPlaying
    MovieList - Trending
    MovieList - Horror
    */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
