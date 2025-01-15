import { useContext, useEffect } from 'react';
import { AnimeContext } from '../context/anime-context';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from './Button';

function EditAnimeForm() {
  const { id } = useParams();
  // console.log(id);

  const { getAnimeById, isLoading } = useContext(AnimeContext);

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  useEffect(() => {
    getAnimeById(id, reset);
  }, [id, reset, getAnimeById]);

  const onSubmit = (data) => {
    console.log(data);
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
        <Button to="/" variation={isLoading ? 'disabled' : 'accent'}>
          {isLoading ? 'Creating...' : 'Cancel'}
        </Button>
        <Button
          disabled={isLoading}
          variation={isLoading ? 'disabled' : 'primary'}
        >
          {isLoading ? 'Creating...' : 'Add'}
        </Button>
      </div>
    </form>
  );
}

export default EditAnimeForm;
