import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimeContext } from '../context/anime-context';
import Button from './Button';

function CreateAnimeForm() {
  const { addAnime } = useContext(AnimeContext);

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    img: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      userId: '01',
    };
    console.log(dataToSend);

    addAnime(dataToSend);
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-xs max-w-md mx-auto py-8 px-4 flex flex-col gap-4 bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xl shadow-gray-500/10"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="font-semibold">
          Title
        </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          className="input input-bordered grow"
        />
        <span className="text-red-500 text-sm">Some error</span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="desc" className="font-semibold">
          Description
        </label>
        <textarea
          id="desc"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          type="text"
          className="textarea textarea-bordered textarea-lg w-full"
        />
        <span className="text-red-500 text-sm">Some error</span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="img" className="font-semibold">
          Image URL
        </label>
        <input
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
          type="text"
          className="input input-bordered grow"
        />
        <span className="text-red-500 text-sm">Some error</span>
      </div>

      <div className="mt-4 flex gap-4 justify-end">
        <Button to="/" type="secondary">
          Cancel
        </Button>
        <Button type="primary">Add</Button>
      </div>
    </form>
  );
}

export default CreateAnimeForm;
