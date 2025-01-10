import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AnimeContext } from '../context/anime-context';
import Button from './Button';

function CreateAnimeForm() {
  const { addAnime } = useContext(AnimeContext);

  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);

    const dataToSend = {
      ...data,
      userId: '01',
    };
    console.log(dataToSend);

    addAnime(dataToSend);
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="min-w-xs max-w-md mx-auto py-8 px-4 flex flex-col gap-4 bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xl shadow-gray-500/10"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="input input-bordered grow"
          {...register('title', {
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'Must be at least 2 characters',
            },
            maxLength: {
              value: 16,
              message: 'Maximum number of characters 16',
            },
          })}
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="desc" className="font-semibold">
          Description
        </label>
        <textarea
          type="text"
          id="desc"
          className="textarea textarea-bordered textarea-lg w-full"
          {...register('desc', {
            required: 'This field is required',
            minLength: {
              value: 16,
              message: 'Must be at least 16 characters',
            },
          })}
        />
        {errors.desc && (
          <span className="text-red-500 text-sm">{errors.desc.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="img" className="font-semibold">
          Image URL
        </label>
        <input
          type="text"
          id="img"
          className="input input-bordered grow"
          {...register('img', {
            required: 'This field is required',
          })}
        />
        {errors.img && (
          <span className="text-red-500 text-sm">{errors.img.message}</span>
        )}
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
