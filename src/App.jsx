import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';

import AuthContextProvider from './context/auth-context';
import AnimeContextProvider from './context/anime-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthContextProvider>
        <AnimeContextProvider>
          <Root />
        </AnimeContextProvider>
      </AuthContextProvider>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/create',
        element: <CreatePage />,
      },
      {
        path: '/edit',
        element: <EditPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
