import { moviesPoster } from "../utils/constants";

export const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-32 mx-3">
      <img alt="MovieCard" src={moviesPoster + poster_path} />
    </div>
  );
};
