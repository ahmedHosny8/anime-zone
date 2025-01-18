import SignupForm from '../components/SignupForm';
import narutoImage from '../assets/naruto-04.png';

function SignupPage() {
  return (
    <section className="min-h-screen bg-[var(--color-gray-50)] py-14 px-4">
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
