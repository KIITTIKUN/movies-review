import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({ userId: '', auth: false, token: '' });

export const AuthProvider = ({ children }) => {
  // Initialize user state based on Local Storage or defaults
  const [user, setUser] = useState(() => {
    const storedAuth = localStorage.getItem('auth');
    const initialAuth = storedAuth === 'true' ? true : false;
    const initialToken = localStorage.getItem('token') || '';
    return { token: initialToken, auth: initialAuth };
  });

  // Update Local Storage whenever 'user.auth' and 'user.token' change
  useEffect(() => {
    localStorage.setItem('auth', user.auth.toString());
  }, [user.auth]);

  useEffect(() => {
    localStorage.setItem('token', user.token);
  }, [user.token]);

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
