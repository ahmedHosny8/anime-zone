import { createContext, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const AnimeContext = createContext();

function AnimeContextProvider({ children }) {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const getAnimeList = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:4000/animeList/');
      // console.log(res.data);

      setAnimeList(res.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getAnimeById = async (id, reset) => {
    try {
      const res = await axios.get(`http://localhost:4000/animeList/${id}`);
      // console.log(res.data);

      const defaultValues = {
        title: res.data.title,
        desc: res.data.desc,
        img: res.data.img,
      };
      reset(defaultValues);
    } catch (error) {
      console.error(error);
    }
  };

  const addAnime = async (animeObj) => {
    setIsLoading(true);
    const accessToken = localStorage.getItem('authToken');

    try {
      const res = await axios.post(
        'http://localhost:4000/664/animeList/',
        animeObj,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res.data);

      const updatedAnimeList = [...animeList, res.data];

      setAnimeList(updatedAnimeList);

      toast.success('Post successfully created');

      navigate('/');
    } catch (err) {
      console.error(err.message);
      toast.error('Unauthorized you should login to make this action');
    } finally {
      setIsLoading(false);
    }
  };

  const editAnimeById = async (id, newTitle, newDesc, newImg) => {
    setIsLoading(true);
    const accessToken = localStorage.getItem('authToken');

    try {
      const res = await axios.patch(
        `http://localhost:4000/664/animeList/${id}`,
        {
          title: newTitle,
          desc: newDesc,
          img: newImg,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res.data);

      const updatedAnimeList = animeList.map((anime) => {
        if (anime.id === id) {
          return { ...anime, ...res.data };
        }

        return anime;
      });
      setAnimeList(updatedAnimeList);

      toast.success('Post successfully edited');

      navigate('/');
    } catch (errors) {
      console.error(errors.message);
      toast.error('Unauthorized you should login to make this action');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAnimeById = async (id) => {
    setIsLoading(true);
    const accessToken = localStorage.getItem('authToken');

    try {
      await axios.delete(`http://localhost:4000/664/animeList/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const updatedAnimeList = animeList.filter((anime) => {
        return anime.id !== id;
      });

      setAnimeList(updatedAnimeList);
      toast.success('Post successfully deleted');
    } catch (err) {
      console.error(err.message);
      toast.error('Unauthorized you should login to make this action');
    } finally {
      setIsLoading(false);
    }
  };

  const valueToShare = {
    animeList,
    isLoading,
    getAnimeList,
    getAnimeById,
    addAnime,
    editAnimeById,
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
