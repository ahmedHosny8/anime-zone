import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';
import Button from './Button';

// Email regex: /\S+@\S+\.\S+/

function LoginForm() {
  const { isLoading, handleLogin } = useContext(AuthContext);

  const { register, handleSubmit, formState, setError } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);

    handleLogin(data, setError);
  };

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="relative z-10 mt-40 min-w-xs max-w-md mx-auto py-10 px-4 flex flex-col gap-4 bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xl shadow-gray-500/10"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input input-bordered grow"
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
          className="input input-bordered grow"
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

      <div className="mt-4 flex justify-center gap-4">
        <Button
          type="reset"
          disabled={isLoading}
          variation={isLoading ? 'disabled' : 'accent'}
        >
          {isLoading ? 'Login...' : 'Reset'}
        </Button>

        <Button
          disabled={isLoading}
          variation={isLoading ? 'disabled' : 'primary'}
        >
          {isLoading ? 'Login...' : 'Login'}
        </Button>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        <p>Don&apos;t have an account?</p>
        <Button to="/signup" variation="link">
          Signup
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
