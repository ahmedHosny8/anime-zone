import { Frown } from 'lucide-react';
import Button from '../components/Button';

function NotFoundPage() {
  return (
    <>
      <section className="h-screen bg-gray-50 py-14 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center">
            <Frown size={144} className="text-gray-400" />
            <h1 className="font-extrabold text-5xl text-gray-500">404</h1>
            <p className="mb-4 font-semibold text-lg text-gray-500">
              Page no found
            </p>

            <Button to="/" variation="accent">
              Go Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
