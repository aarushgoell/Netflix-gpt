import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoBackground = ({ movieID }) => {
  useGetTrailer(movieID);

  const Trailer = useSelector((store) => store.movies?.Trailer);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          Trailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// We have a API which name is videos which gives the videos of the particular movies

//  There is an API which will give me videos related to that particular movie by giving him id

// Every youtube video has a key

// Inside jsx u always have to write camelcasing
