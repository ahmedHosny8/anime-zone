import AnimeDataForm from '../components/AnimeDataForm';

function CreatePage() {
  return (
    <section className="h-screen bg-gray-50 py-14 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="mb-10 font-extrabold text-4xl text-center">
          Add your favorite anime to the
          <br />
          <span className="text-brand">Anime List</span>
        </h1>
        <AnimeDataForm />
      </div>
    </section>
  );
}

export default CreatePage;
