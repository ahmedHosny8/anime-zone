import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

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
        </AnimeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default Root;
