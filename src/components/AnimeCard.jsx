import PropTypes from 'prop-types';
import { Pencil, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { AnimeContext } from '../context/anime-context';
import Button from './Button';

function AnimeCard({ anime }) {
  const { deleteAnimeById } = useContext(AnimeContext);

  return (
    <article className="p-4 grid grid-cols-3 items-center bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xl shadow-gray-500/10">
      <img
        className="h-40 w-full rounded-lg object-cover object-center"
        src={anime.img}
        alt="Anime Image"
      />

      <div className="col-span-2 ml-4">
        <h1 className="mb-1 text-brand font-bold text-xl">{anime.title}</h1>
        <p className="">{anime.desc.slice(0, 48)}</p>
      </div>

      <div className="col-span-3 mt-4 grid grid-cols-2 gap-2">
        <Button type="secondary" to="/edit">
          <Pencil size={16} className="mr-1 mb-0.5" /> Edit
        </Button>
        <Button type="warning" onClick={() => deleteAnimeById(anime.id)}>
          <Trash2 size={16} className="mr-1 mb-0.5" /> Delete
        </Button>
      </div>
    </article>
  );
}

AnimeCard.propTypes = {
  anime: PropTypes.object,
};

export default AnimeCard;
