import SignupForm from '../components/SignupForm';

function SignupPage() {
  return (
    <section className="h-screen bg-gray-50 py-14 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="mb-10 font-extrabold text-4xl text-center">
          Create your account
        </h1>
        <SignupForm />
      </div>
    </section>
  );
}

export default SignupPage;
