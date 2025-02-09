import { useDispatch } from "react-redux";

import { addTopRated } from "../utils/moviesSlice";

import { useEffect } from "react";

import { API_OPTIONS } from "../utils/constants";

const useTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    topRated();
  }, []);

  const topRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRated(json.results));
  };
};

export default useTopRated;
