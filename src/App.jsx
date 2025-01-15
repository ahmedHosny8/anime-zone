import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';
import Gard from './components/Gard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: (
          <Gard page="login">
            <LoginPage />
          </Gard>
        ),
      },
      {
        path: '/signup',
        element: (
          <Gard page="signup">
            <SignupPage />
          </Gard>
        ),
      },
      {
        path: '/create',
        element: (
          <Gard page="create">
            <CreatePage />
          </Gard>
        ),
      },
      {
        path: '/edit/:id',
        element: (
          <Gard page="edit">
            <EditPage />
          </Gard>
        ),
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
