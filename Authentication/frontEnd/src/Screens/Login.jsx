import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    axios.post('http://localhost:8081/login', credentials)
      .then(res => {
        if (res.data.loggedIn) {
          localStorage.setItem('authUser', JSON.stringify(res.data.user)); // Save user data to localStorage
          navigate('/dashboard'); 
        } else {
          alert(res.data.message);
        }
      })
      .catch(err => console.error(err));
  };

  const handleSignupRedirect = () => {
    navigate('/signup'); 
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>Login</Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField 
          label="Username" 
          name="username" 
          fullWidth 
          margin="normal" 
          variant="outlined" 
          onChange={handleChange} 
        />
        <TextField 
          label="Password" 
          name="password" 
          type="password" 
          fullWidth 
          margin="normal" 
          variant="outlined" 
          onChange={handleChange} 
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }} 
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account? 
          <Button color="secondary" onClick={handleSignupRedirect}> Sign up</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
