import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

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
          <ProtectedRoute page="login">
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          <ProtectedRoute page="signup">
            <SignupPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/create',
        element: (
          <ProtectedRoute page="create">
            <CreatePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/edit/:id',
        element: (
          <ProtectedRoute page="edit">
            <EditPage />
          </ProtectedRoute>
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
