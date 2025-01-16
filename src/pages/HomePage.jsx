import { useContext, useEffect } from 'react';
import { AnimeContext } from '../context/anime-context';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import AnimeCard from '../components/AnimeCard';
import pikachuImage from '../assets/pikachu.png';

function HomePage() {
  const { animeList, getAnimeList } = useContext(AnimeContext);

  useEffect(() => {
    getAnimeList();
  }, [getAnimeList]);

  const renderedAnimeList = animeList.map((anime) => {
    return (
      <li key={anime.id}>
        <AnimeCard anime={anime} />
      </li>
    );
  });

  return (
    <>
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex items-center justify-center gap-4">
            <img className="h-48" src={pikachuImage} alt="Pikachu" />
            <h1 className="font-extrabold text-5xl -mt-14">
              <span className="text-brand">Anime</span>
              <br /> List
            </h1>
          </div>
        </div>
      </section>

      <section className="min-h-96 bg-gray-50 px-4">
        <div className="max-w-screen-lg mx-auto">
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {renderedAnimeList}
          </ul>
        </div>
      </section>

      <Link
        to="/create"
        className="fixed bottom-8 right-8 inline-block p-4 rounded-full transition-all duration-300 bg-brand hover:bg-brand-dark"
      >
        <Plus size={24} color="white" />
      </Link>
    </>
  );
}

export default HomePage;
