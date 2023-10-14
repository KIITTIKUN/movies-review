import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({ userId: '', auth: false, token: '' });

export const AuthProvider = ({ children }) => {
  // Initialize user state based on Local Storage or defaults
  const [user, setUser] = useState(() => {
    const storedAuth = localStorage.getItem('auth');
    const initialAuth = storedAuth === 'true' ? true : false;
    const initialId = localStorage.getItem('id') || '';
    const initialUsername = localStorage.getItem('username') || '';
    return { id: initialId, username: initialUsername, auth: initialAuth };
  });

  useEffect(() => {
    localStorage.setItem('auth', user.auth.toString());
  }, [user.auth]);

  useEffect(() => {
    localStorage.setItem('id', user.id);
  }, [user.id]);

  useEffect(() => {
    localStorage.setItem('username', user.username);
  }, [user.username]);

  const login = (id,username) => {
    setUser((user) => ({
      id: id,
      username : username,
      auth: true,
    }));
  };

  const logout = () => {
    setUser((user) => ({
      id: '',
      username : '',
      auth: true,
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
