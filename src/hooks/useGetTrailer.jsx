import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useGetTrailer = (movieID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const videoJson = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieID + "/videos",
      API_OPTIONS
    );

    const realdata = await videoJson.json();

    const Trailer = realdata?.results?.filter((e) => {
      if (e.type == "Trailer") {
        return true;
      }
    });

    if (Trailer.length == 0) {
      dispatch(addTrailer(realdata.results[0]));
    } else {
      dispatch(addTrailer(Trailer[0]));
    }
  };
};

export default useGetTrailer;
