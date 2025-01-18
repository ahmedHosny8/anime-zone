import CreateAnimeForm from '../components/CreateAnimeForm';

function CreatePage() {
  return (
    <section className="min-h-screen bg-[var(--color-gray-50)] py-14 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="mb-10 font-extrabold text-4xl text-center">
          Add your favorite anime to the
          <br />
          <span className="text-[var(--color-brand-600)]">Anime List</span>
        </h1>
        <CreateAnimeForm />
      </div>
    </section>
  );
}

export default CreatePage;
