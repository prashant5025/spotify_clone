import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";


import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const ArtistDetails = ({ song, i }) => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });

  if (isFetchingSongDetails || isFetchingRelatedSongs) return;
  <Loader title="Searching song details..." />;

  const handlePasueClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">Lyrics not available</p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePasueClick={handlePasueClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default ArtistDetails;
