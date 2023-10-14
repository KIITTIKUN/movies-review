import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({ id: '', username: '', auth: false });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedAuth = localStorage.getItem('auth') === 'true';
    const initialId = localStorage.getItem('id') || '';
    const initialUsername = localStorage.getItem('username') || '';
    return { id: initialId, username: initialUsername, auth: storedAuth };
  });

  useEffect(() => {
    localStorage.setItem('auth', user.auth.toString());
    localStorage.setItem('id', user.id);
    localStorage.setItem('username', user.username);
  }, [user.auth, user.id, user.username]);

  const login = (id, username) => {
    setUser({
      id,
      username,
      auth: true,
    });
  };

  const logout = () => {
    setUser({
      id: '',
      username: '',
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
