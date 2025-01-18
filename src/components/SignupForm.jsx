import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';
import Button from './Button';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { isLoading, handleSignup } = useContext(AuthContext);

  const { register, handleSubmit, formState, getValues, setError } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    const { name, email, password } = data;
    const userData = { name, email, password };

    handleSignup(userData, setError);
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="relative z-10 mt-40 min-w-xs max-w-md mx-auto py-8 px-4 flex flex-col gap-4 bg-[var(--color-gray-0)] border border-[var(--color-gray-100)] rounded-2xl overflow-hidden shadow-sm shadow-[var(--color-shadow-sm)]"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input input-bordered grow bg-[var(--color-gray-50)]"
          {...register('name', {
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'Must be at least 2 characters',
            },
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input input-bordered grow bg-[var(--color-gray-50)]"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input input-bordered grow bg-[var(--color-gray-50)]"
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="passwordConfirm" className="font-semibold">
          Confirm password
        </label>
        <input
          type="password"
          id="passwordConfirm"
          className="input input-bordered grow bg-[var(--color-gray-50)]"
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
        />
        {errors.passwordConfirm && (
          <span className="text-red-500 text-sm">
            {errors.passwordConfirm.message}
          </span>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <Button
          type="reset"
          disabled={isLoading}
          variation={isLoading ? 'disabled' : 'secondary'}
        >
          {isLoading ? 'Creating' : 'Reset'}
        </Button>

        <Button
          disabled={isLoading}
          variation={isLoading ? 'disabled' : 'primary'}
        >
          {isLoading ? 'Creating' : 'Sign up'}
        </Button>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        <p>Already have an account?</p>
        <Button to="/login" variation="link">
          Login
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
