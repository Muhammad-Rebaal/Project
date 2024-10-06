import React, { useState, useEffect } from 'react';
import { Button, Container, Table, TableHead, TableRow, TableCell, TableBody, Typography, IconButton, Box, Paper } from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showTable) {
      axios.get('http://localhost:8081/user')
        .then(res => setData(res.data))
        .catch(err => console.error(err));
    }
  }, [showTable]);

  useEffect(() => {
    const user = localStorage.getItem('authUser');
    if (!user) {
      navigate('/login'); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authUser'); 
    navigate('/login');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Dashboard</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleLogout} 
        >
          Logout
        </Button>
      </Box>
      
      <Button 
        variant="contained" 
        onClick={() => setShowTable(!showTable)} 
        sx={{ mb: 2 }}
      >
        {showTable ? 'Hide Table' : 'Show Table'}
      </Button>
      
      {showTable && (
        <Paper elevation={3} sx={{ p: 2 }}>
          <IconButton 
            onClick={() => setShowTable(false)} 
            sx={{ float: 'right', mb: 1 }}
          >
            <CloseIcon />
          </IconButton>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>{user.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  );
};

export default Dashboard;
