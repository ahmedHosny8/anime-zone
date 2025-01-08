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

  const deleteAnimeById = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/animeList/${id}`);

      const updatedAnimeList = animeList.filter((anime) => {
        return anime.id !== id;
      });

      setAnimeList(updatedAnimeList);
    } catch (err) {
      console.error(err);
    }
  };

  const valueToShare = {
    animeList,
    getAnimeList,
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
