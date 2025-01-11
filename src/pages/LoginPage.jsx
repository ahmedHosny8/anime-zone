import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <section className="h-screen bg-gray-50 py-14 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="mb-10 font-extrabold text-4xl text-center">
          Login to your account
        </h1>
        <LoginForm />
      </div>
    </section>
  );
}

export default LoginPage;
