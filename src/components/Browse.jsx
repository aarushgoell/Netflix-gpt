import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header></Header>
      {showGptSearch ? (
        <GPTSearch></GPTSearch>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer></SecondaryContainer>
        </>
      )}
      {/*

         MainContainer
           - VideoBackground
           - VideoTitle
         SecondaryContainer
           - MovieList * n
            - cards * n
        */}
    </div>
  );
};

export default Browse;
