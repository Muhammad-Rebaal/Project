import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    location: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    axios.post('http://localhost:8081/signup', formData)
      .then(res => {
        alert(res.data);
        localStorage.setItem('authUser', JSON.stringify(formData)); // Save user data to localStorage
        navigate('/login'); 
      })
      .catch(err => console.error(err));
  };

  const handleLoginRedirect = () => {
    navigate('/login'); 
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>Signup</Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField 
          label="Name" 
          name="name" 
          fullWidth 
          margin="normal" 
          variant="outlined" 
          onChange={handleChange} 
        />
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
        <TextField 
          label="Location" 
          name="location" 
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
          onClick={handleSignup}
        >
          Signup
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account? 
          <Button color="secondary" onClick={handleLoginRedirect}> Login</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
