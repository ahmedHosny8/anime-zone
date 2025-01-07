import PropTypes from 'prop-types';

function AnimeCard({ anime }) {
  return (
    <article className="bg-white border border-gray-200/80 rounded-xl overflow-hidden shadow-2xl shadow-gray-500/10">
      <img
        className="h-80 w-full object-cover object-center"
        src={anime.img}
        alt="Anime Image"
      />
      <div className="p-4">
        <h1 className="mb-2 text-brand font-extrabold text-2xl">
          {anime.title}
        </h1>
        <p className="text-lg">{anime.desc}</p>
      </div>
    </article>
  );
}

AnimeCard.propTypes = {
  anime: PropTypes.object,
};

export default AnimeCard;
