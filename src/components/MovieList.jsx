import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="px-4">
      <h1 className="text-3xl pb-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((mv) => {
            return (
              <MovieCard key={mv.id} poster_path={mv.poster_path}></MovieCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
