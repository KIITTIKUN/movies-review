import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({ userId: '', auth: false });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ token: '', auth: false });

  const login = (token) => {
    setUser((user) => ({
        token: token,
        auth: true,
      }));
  };

  const logout = () => {
    setUser((user) => ({
        token: '',
        auth: false,
      }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
