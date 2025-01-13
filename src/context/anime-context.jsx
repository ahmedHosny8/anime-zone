import { createContext, useCallback, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AnimeContext = createContext();

function AnimeContextProvider({ children }) {
  const [animeList, setAnimeList] = useState([]);

  const getAnimeList = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:4000/animeList/');
      // console.log(res.data);

      setAnimeList(res.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const addAnime = async (animeObj) => {
    try {
      const res = await axios.post(
        'http://localhost:4000/animeList/',
        animeObj
      );
      console.log(res.data);

      const updatedAnimeList = [...animeList, res.data];

      setAnimeList(updatedAnimeList);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteAnimeById = async (id) => {
    console.log('inside deleteAnime by id fund');
    console.log(id);

    try {
      const res = await axios.delete(`http://localhost:4000/animeList/${id}`);
      console.log(res.data);

      const updatedAnimeList = animeList.filter((anime) => {
        return anime.id !== id;
      });

      console.log(updatedAnimeList);

      setAnimeList(updatedAnimeList);
    } catch (err) {
      console.error(err);
    }
  };

  const valueToShare = {
    animeList,
    getAnimeList,
    addAnime,
    deleteAnimeById,
  };

  return (
    <AnimeContext.Provider value={valueToShare}>
      {children}
    </AnimeContext.Provider>
  );
}

AnimeContextProvider.propTypes = {
  children: PropTypes.node,
};

export { AnimeContext };
export default AnimeContextProvider;
