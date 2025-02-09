import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const selectedlang = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%]  flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[selectedlang].gptSearchplaceholder}
          className="pl-3 col-span-9 mt-2 ml-2 bg-white h-12"
        ></input>

        <button className="px-4 py-2 bg-red-800 text-white rounder-lg col-span-3 m-3">
          {lang[selectedlang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
