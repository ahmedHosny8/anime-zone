import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Pencil, Trash2 } from 'lucide-react';
import { AnimeContext } from '../context/anime-context';
import { AuthContext } from '../context/auth-context';
import Button from './Button';
import dummyImage from '../assets/dummy-image.jpg';

function AnimeCard({ anime }) {
  const { deleteAnimeById } = useContext(AnimeContext);
  const { userInfo } = useContext(AuthContext);
  // console.log(userInfo);

  const [imageSrc, setImageSrc] = useState(anime.img);

  const handleImageFailsToLoadError = () => {
    setImageSrc(dummyImage);
  };

  return (
    <article className="p-4 grid grid-cols-3 items-center bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xl shadow-gray-500/10">
      <img
        className="h-40 w-full rounded-lg object-cover object-center"
        src={imageSrc}
        onError={handleImageFailsToLoadError}
        alt="Anime Image"
      />

      <div className="col-span-2 ml-4">
        <h1 className="mb-1 text-brand font-bold text-xl">{anime.title}</h1>
        <p className="">{anime.desc.slice(0, 48)}</p>
      </div>

      {userInfo?.id === anime.user && (
        <div className="col-span-3 mt-4 grid grid-cols-2 gap-2">
          <Button variation="secondary" to="/edit">
            <Pencil size={16} className="mr-1 mb-0.5" /> Edit
          </Button>
          <Button variation="warning" onClick={() => deleteAnimeById(anime.id)}>
            <Trash2 size={16} className="mr-1 mb-0.5" /> Delete
          </Button>
        </div>
      )}
    </article>
  );
}

AnimeCard.propTypes = {
  anime: PropTypes.object,
};

export default AnimeCard;
