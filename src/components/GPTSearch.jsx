import GptMovieSuggestions from "./GptMovieSuggestions";

import GptSearchBar from "./GptSearchBar";

import { backGROUND } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={backGROUND} />
      </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  );
};

export default GPTSearch;
