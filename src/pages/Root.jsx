import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AuthContextProvider from '../context/auth-context';
import AnimeContextProvider from '../context/anime-context';

function Root() {
  return (
    <>
      <AuthContextProvider>
        <AnimeContextProvider>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </AnimeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default Root;
