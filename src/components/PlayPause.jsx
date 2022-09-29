import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePasue, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePasue} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
