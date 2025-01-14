import LoginForm from '../components/LoginForm';
import narutoImage from '../assets/naruto-01.png';

function LoginPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-14 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="relative">
          <h1 className="mb-10 font-extrabold text-4xl text-center">
            Login to your account
          </h1>

          <img
            className="absolute z-0 h-60 top-10 left-1/2 -translate-x-1/2"
            src={narutoImage}
            alt="Naruto"
          />
        </div>

        <LoginForm />
      </div>
    </section>
  );
}

export default LoginPage;
