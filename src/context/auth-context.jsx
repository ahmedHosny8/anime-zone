import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // This func will run one time only
  // (immediately after first render)
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const createUser = async (userData, setError) => {
    setIsLoading(true);

    try {
      const res = await axios.post('http://localhost:4000/users', userData);
      console.log(res.data);

      // Save accessToken inside localStorage
      localStorage.setItem('authToken', res.data.accessToken);
      // Save user data inside localStorage
      localStorage.setItem('user', JSON.stringify(res.data.user));

      setIsLoggedIn(true);

      navigate('/', { replace: true });
    } catch (error) {
      console.error(error.response.data); // Email already exists
      setError('email', {
        type: 'server',
        message: error.response.data,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const valueToShare = {
    isLoggedIn,
    isLoading,
    createUser,
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext };
export default AuthContextProvider;
