import { createContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const valueToShare = {};

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext };
export default AuthContextProvider;
