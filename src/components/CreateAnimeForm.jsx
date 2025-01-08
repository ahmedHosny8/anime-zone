import { useState } from 'react';
import Button from './Button';

function CreateAnimeForm() {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    img: '',
  });

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
    console.log('Do Something');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-xs max-w-md mx-auto py-8 px-4 flex flex-col gap-4 bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xl shadow-gray-500/10"
    >
      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className="input input-bordered grow"
        />
        <span className="text-red-500 text-sm">Some error</span>
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="desc">
          Description
        </label>
        <textarea
          id="desc"
          name="desc"
          type="text"
          value={formData.desc}
          onChange={handleChange}
          className="textarea textarea-bordered textarea-lg w-full"
        />
        <span className="text-red-500 text-sm">Some error</span>
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="img">
          Image URL
        </label>
        <input
          id="img"
          name="img"
          type="text"
          value={formData.img}
          onChange={handleChange}
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
