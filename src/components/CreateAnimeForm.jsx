import { useContext } from 'react';
import { AnimeContext } from '../context/anime-context';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';
import Button from './Button';

function CreateAnimeForm() {
  const { addAnime, isLoading } = useContext(AnimeContext);
  const { userInfo } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;
  console.log(errors);

  // Only called if there is NO validation error
  // It's going to receve the data collected from the form automatically
  const onSubmit = (data) => {
    console.log(data);

    const dataToSend = {
      ...data,
      user: userInfo.id,
    };

    addAnime(dataToSend);
  };

  // Called if an validation error found
  // It's going to receve the errors object from validation process
  const onError = (errors) => {
    console.log(errors); // {title: {type: required, message: "This field is required", ref: ...}}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="min-w-xs max-w-md mx-auto py-8 px-4 flex flex-col gap-4 bg-[var(--color-gray-0)] border border-[var(--color-gray-100)] rounded-2xl overflow-hidden shadow-sm shadow-[var(--color-shadow-sm)]"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="input input-bordered grow bg-[var(--color-gray-50)]"
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
          className="textarea textarea-bordered textarea-lg w-full bg-[var(--color-gray-50)]"
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
          className="input input-bordered grow  bg-[var(--color-gray-50)]"
          {...register('img', {
            required: 'This field is required',
          })}
        />
        {errors.img && (
          <span className="text-red-500 text-sm">{errors.img.message}</span>
        )}
      </div>

      <div className="mt-4 flex gap-4 justify-end">
        <Button to="/" variation={isLoading ? 'disabled' : 'secondary'}>
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

export default CreateAnimeForm;
