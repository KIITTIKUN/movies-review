import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Select } from '@mui/material';
import Swal from 'sweetalert2'

import './index.scss';

import createUser from '../../api/User/createUser';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const defaultTheme = createTheme();
  const [formData, setFormData] = useState({
    username: '',
    gender: '',
    age:0,
    email: '',
    password: '',
    allowExtraEmails: false,
  });
  const navigate = useNavigate();

  function isEmailValid(email) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    console.log(emailPattern.test(email))
    return emailPattern.test(email);
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target; 
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!isEmailValid(formData.email)){

      return Swal.fire('invlid E-mail. Please check E-mail and Sign again');
    }
    const response = await createUser(formData.username,formData.password,formData.email,formData.gender,Number(formData.age));
    if(response.user){
      Swal.fire({
        title: 'Now you have an account. Go to log in?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }else{
    Swal.fire(response.message);
    }
  };

  const ageOptions = Array.from({ length: 101 }, (_, index) => index);

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
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, backgroundColor: 'white' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5} sx={{ backgroundColor: 'white' }}>
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
                <Grid item xs={12} sm={3.5} sx={{ backgroundColor: 'white'}}>
                <Select
                native
                variant='filled'
                required
                fullWidth
                id="age"
                name="age"
                label="Age"
                value={formData.age}
                onChange={handleChange}
                inputProps={{
                  type: 'number', 
                  min: 0, 
                  max: 100, 
                }}
                >
                <option value="" disabled>Age</option>
                {ageOptions.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </Select>
            </Grid>
        <Grid item xs={12} sm={3.5} sx={{ backgroundColor: 'white' }}> 
        <Select
          variant="filled"
          native
          required
          fullWidth
          id="gender"
          label='gender'
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
                </Grid>
                <Grid item xs={12} sx={{ backgroundColor: 'white' }}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
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
                <Grid item xs={12} sx={{ backgroundColor: 'white' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.allowExtraEmails}
                        onChange={handleChange}
                        name="allowExtraEmails"
                        color="primary"
                        sx={{ color: '#1976D2' }}
                      />
                    }
                    label={
                      <Typography variant="body2" color="textPrimary" sx={{ backgroundColor: 'white' }}>
                        I want to receive inspiration, marketing promotions and updates via email.
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end" sx={{ backgroundColor: 'white' }}>
                <Grid item sx={{ backgroundColor: 'white' }}>
                  <Link href="/login" variant="body2" sx={{ backgroundColor: 'white' }}>
                    Already have an account? Log in
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

export default Register;