import EditAnimeForm from '../components/EditAnimeForm';

function EditPage() {
  return (
    <section className="h-screen bg-gray-50 py-14 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="mb-10 font-extrabold text-4xl text-center">
          Edit your favorite anime
        </h1>

        <EditAnimeForm />
      </div>
    </section>
  );
}

export default EditPage;
