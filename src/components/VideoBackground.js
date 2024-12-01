import useGetMovieVideo from "../hooks/useGetMovieVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.nowPlayingTrailer);
  useGetMovieVideo(movieId);
  return (
    <div className="w-screen aspect-video relative z-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={
          "https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );

};

export default VideoBackground;
