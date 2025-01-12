import { useForm } from 'react-hook-form';
import axios from 'axios';
import Button from './Button';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, handleSubmit, formState, getValues, setError } = useForm();
  const { errors } = formState;

  const createUser = async (userData) => {
    try {
      const res = await axios.post('http://localhost:4000/users', userData);
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data); // Email already exists
      setError('email', {
        type: 'server',
        message: error.response.data,
      });
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    const { name, email, password } = data;
    const userData = { name, email, password };

    createUser(userData);
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
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input input-bordered grow"
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
      <div className="flex flex-col gap-1">
        <label htmlFor="passwordConfirm" className="font-semibold">
          Confirm password
        </label>
        <input
          type="password"
          id="passwordConfirm"
          className="input input-bordered grow"
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

      <div className="mt-4 flex justify-center">
        <Button type="primary">Sign up</Button>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        <p>Already have an account?</p>
        <Button to="/login" type="link">
          Login
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
