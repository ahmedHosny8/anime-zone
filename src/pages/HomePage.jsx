import { useState, useEffect } from 'react';
import AnimeCard from '../components/AnimeCard';
import pikachuImage from '../assets/pikachu.png';

function HomePage() {
  const { animeList, setAnimeList } = useState([]);

  useEffect(() => {}, []);

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

      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div>
            <AnimeCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
