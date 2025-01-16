import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Navigate } from 'react-router-dom';
import { UserRound } from 'lucide-react';
import PropTypes from 'prop-types';
import Button from './Button';

function ProtectedRoute({ children, page }) {
  const { isLoggedIn } = useContext(AuthContext);
  // console.log(isLoggedIn);

  if (isLoggedIn && (page === 'signup' || page === 'login')) {
    return <Navigate to="/" />;
  }

  if (!isLoggedIn && (page === 'create' || page === 'edit')) {
    return (
      <section className="min-h-screen bg-gray-50 py-14 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center">
            <UserRound
              size={144}
              strokeWidth={1}
              className="mb-2 text-gray-400"
            />
            <h1 className="max-w-96 mb-4 font-semibold text-center text-gray-500 text-3xl">
              You should log in to add your favorite anime
            </h1>

            <Button to="/login" variation="accent">
              Login
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return <>{children}</>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  page: PropTypes.string,
};

export default ProtectedRoute;
