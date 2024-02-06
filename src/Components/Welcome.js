import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const WelcomePage = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95vh',
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1663090686054-f46750c77799?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer', // add pointer cursor
    margin: '0 10px', // add margin between buttons
    transition: 'background-color 0.3s', // smooth transition for hover effect
    textDecoration: 'none', // remove underline
    textAlign: 'center', // center text
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3', // darker color on hover
  };

  // function handleGetStarted() {
  //   // Add functionality here if needed
  //   console.log('Get Started clicked');
  // }

  const handleLogin = () => {
    // Redirect to login page
    navigate('/login');
  };

  const handleSignup = () => {
    // Redirect to signup page
    navigate('/signup');
  };

  return (
    <div style={containerStyle}>
      <Paper variant="outlined" style={{ width: '900px', borderRadius: '25px', opacity: '0.8', padding: '20px' }}>
        <h1 style={titleStyle}>Welcome to Polling App</h1>
        <p style={descriptionStyle}>The polling app allows users to create and participate in polls. Users can create polls by providing a question and a set of options. </p>
        <div style={buttonContainerStyle}>
          <button 
            style={{ ...buttonStyle, ...(hovered ? buttonHoverStyle : null) }} // apply hover style when hovered
            onMouseEnter={() => setHovered(true)} // set hovered state to true on mouse enter
            onMouseLeave={() => setHovered(false)} // set hovered state to false on mouse leave
            onClick={handleLogin}
          >
            Login
          </button>
          <button 
            style={{ ...buttonStyle, backgroundColor: '#28a745' }} // different style for login button
            onClick={handleSignup}
          >
            Signup
          </button>
          
        </div>
      </Paper>
    </div>
  );
};

export default WelcomePage;
