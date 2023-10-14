import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({ username: '', token:'', auth: false });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedAuth = localStorage.getItem('auth') === 'true';
    const initialUsername = localStorage.getItem('username') || '';
    const initialToken = localStorage.getItem('token') || '';
    return {  username: initialUsername,token: initialToken, auth: storedAuth };
  });

  useEffect(() => {
    localStorage.setItem('auth', user.auth.toString());
    localStorage.setItem('username', user.username);
    localStorage.setItem('token', user.token);
  }, [user.auth, user.username,user.token]);

  const login = (username,token) => {
    setUser({
      username,
      token,
      auth: true,
    });
  };

  const logout = () => {
    setUser({
      username: '',
      token: '',
      auth: false,
    });
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
