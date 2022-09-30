import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePasueClick,
  handlePlayClick,
  artistId
}) => {

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

      <div>
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            i={i}
            song={song}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePasueClick}
            handlePlayClick={handlePlayClick}

          />
        ))}
      </div>

    </div>
  );
};

export default RelatedSongs;
