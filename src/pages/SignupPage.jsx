import axios from 'axios';
import SignupForm from '../components/SignupForm';

const createUser = async (userData) => {
  try {
    const res = await axios.post('http://localhost:4000/signup', userData);
    console.log(res.data);
  } catch (error) {
    console.error(
      'Error creating user:',
      error.response?.data || error.message
    );
  }
};

function SignupPage() {
  const userData = {
    email: 'Ali@mail.com',
    password: 'bestPassw0rd',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('now');

    createUser(userData);
  };

  return (
    <section className="h-screen bg-gray-50 py-14 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="mb-10 font-extrabold text-4xl text-center">
          Create your account
        </h1>
        <SignupForm />

        <form onSubmit={handleSubmit}>
          <input type="text" />

          <button>Create</button>
        </form>
      </div>
    </section>
  );
}

export default SignupPage;
