import { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { PropTypes } from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext'
import LoginUser from '../../api/User/LoginUser';

const Login = () => {
  const defaultTheme = createTheme();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target; 
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await LoginUser(formData.username, formData.password);
  
      if (response.success) {
        login(response.user.username,response.user.token)
        navigate('/home') 
      } 
      else {
        alert('Login failed:', response.message);
      }
    } catch (error) {
      alert('An error occurred during login:', error);
    }
  };

  const commonTextFieldStyles = {
    bgcolor: '#ffffff',
    '& label': {
      backgroundColor: 'rgb(240, 240, 240)',
    },
  };

  return (
    <>
      <div className='Headbar-no-token'>
        <header>Movie Review</header>
      </div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          marginTop: 15
        }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#1976D2' }}>
              <LockOutlinedIcon sx={{ bgcolor: '#1976D2' }} />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ backgroundColor: 'white' }}>
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, backgroundColor: 'white' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ backgroundColor: 'white' }}>
                  <TextField
                    variant="filled"
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                    value={formData.username}
                    onChange={handleChange}
                    sx={commonTextFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} sx={{ backgroundColor: 'white' }}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    sx={commonTextFieldStyles}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="flex-end" sx={{ backgroundColor: 'white' }}>
                <Grid item sx={{ backgroundColor: 'white' }}>
                  <Link href="/register" variant="body2" sx={{ backgroundColor: 'white' }}>
                    {`Don't have an account? Register`}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;

Login.propTypes = {
  setToken: PropTypes.string
}