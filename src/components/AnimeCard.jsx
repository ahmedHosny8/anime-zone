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
    <article className="relative p-4 grid grid-cols-3 items-center bg-[var(--color-gray-0)] border border-[var(--color-gray-100)] rounded-2xl overflow-hidden shadow-sm shadow-[var(--color-shadow-sm)]">
      <img
        className="h-40 w-full rounded-lg object-cover object-center"
        src={imageSrc}
        onError={handleImageFailsToLoadError}
        alt="Anime Image"
      />

      <div className="col-span-2 h-full w-full py-4 px-4">
        <h1 className="mt-6 mb-1 font-bold text-xl text-[var(--color-brand-600)]">
          {anime.title}
        </h1>
        <p className="font-semibold text-sm">{anime.desc.slice(0, 48)}</p>
      </div>

      {userInfo?.id === anime.user && (
        <div className="absolute top-2 right-2 flex gap-2 items-center">
          <Button variation="iconAction" to={`/edit/${anime.id}`}>
            <Pencil size={16} color="var(--color-gray-700)" />
          </Button>
          <Button
            variation="iconWarning"
            onClick={() => deleteAnimeById(anime.id)}
          >
            <Trash2 size={16} color="white" />
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
