import { Frown } from 'lucide-react';
import Button from '../components/Button';

function NotFoundPage() {
  return (
    <>
      <section className="min-h-screen bg-[var(--color-gray-50)] py-14 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center">
            <Frown
              size={144}
              strokeWidth={1}
              color="var(--color-gray-300)"
              className="mb-2"
            />
            <h1 className="font-bold text-center text-4xl">404</h1>
            <p className="mb-4 font-semibold text-3xl">Page no found</p>

            <Button to="/" variation="secondary">
              Go Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
