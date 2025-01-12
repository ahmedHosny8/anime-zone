// import axios from 'axios';
import SignupForm from '../components/SignupForm';
import narutoImage from '../assets/naruto-04.png';

// const createUser = async (userData) => {
//   try {
//     const res = await axios.post('http://localhost:4000/signup', userData);
//     console.log(res.data);
//   } catch (error) {
//     console.error(
//       'Error creating user:',
//       error.response?.data || error.message
//     );
//   }
// };

function SignupPage() {
  // const userData = {
  //   email: 'Ali@mail.com',
  //   password: 'bestPassw0rd',
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('now');

  //   createUser(userData);
  // };

  return (
    <section className="min-h-screenh-screen bg-gray-50 py-14 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="relative">
          <h1 className="relative z-10 font-extrabold text-4xl text-center">
            Create your account
          </h1>

          <img
            className="absolute z-0 h-80 top-10 left-1/2 -translate-x-1/2"
            src={narutoImage}
            alt="Naruto"
          />
        </div>

        <SignupForm />
      </div>
    </section>
  );
}

export default SignupPage;
