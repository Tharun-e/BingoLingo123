import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const styles = {
    '@import': "url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap')",
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      background: '#f4f4f4',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    mainBanner: {
      background: "url('/Photos/slbb.gif') no-repeat center center/cover",
      color: '#fff',
      textAlign: 'center',
      padding: '100px 20px',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      marginTop: '-80px',
      justifyContent: 'center',
      animation: 'fadeInUp 1s ease-in-out forwards'
    },
    bannerContent: {
      animation: 'fadeInUp 1s ease-in-out forwards'
    },
    mainBannerH1: {
      fontSize: '3em',
      margin: 0,
      color: "white"
    },
    mainBannerP: {
      fontSize: '1.2em',
      margin: '10px 0 0',
      color: "white"
    },
    fadeInUp: {
      from: {
        transform: 'translateY(20px)',
        opacity: 0
      },
      to: {
        transform: 'translateY(0)',
        opacity: 1
      }
    },
    signupContainer: {
      background: '#fff',
      padding: '2rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      width: '90%',
      maxWidth: '400px',
      margin: '0 auto 2rem',
      textAlign: 'center',
      position: 'relative',
      top: '-50px',
      zIndex: 1
    },
    signupFormH1: {
      marginBottom: '1.5rem',
      fontSize: '2rem',
      color: '#00aaff'
    },
    inputGroup: {
      marginBottom: '1rem',
      textAlign: 'left'
    },
    inputGroupLabel: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
      color: '#333'
    },
    inputGroupInput: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    inputGroupInputFocus: {
      borderColor: '#00aaff',
      outline: 'none'
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      background: '#00aaff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.3s ease, transform 0.3s ease'
    },
    buttonHover: {
      background: '#008ecc',
      transform: 'translateY(-2px)'
    },
    loginLink: {
      marginTop: '1rem',
      color: '#555'
    },
    loginLinkA: {
      color: '#00aaff',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.3s ease'
    },
    loginLinkAHover: {
      color: '#008ecc'
    },
    '@media (maxWidth: 768px)': {
      mainBannerH1: {
        fontSize: '2.5em'
      },
      mainBannerP: {
        fontSize: '1em'
      },
      signupContainer: {
        padding: '1.5rem',
        maxWidth: '90%',
        top: 0
      }
    },
    '@media (maxWidth: 576px)': {
      mainBannerH1: {
        fontSize: '2em'
      },
      mainBannerP: {
        fontSize: '0.9em'
      },
      signupContainer: {
        padding: '1rem',
        maxWidth: '100%'
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/bom/n', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
       
        navigate('/Login');
      } else {
        
        setErrorMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={styles.body}>
      <section id="home" style={styles.mainBanner}>
        <div style={styles.bannerContent}>
          <h1 style={styles.mainBannerH1}>Sign Up</h1>
          <p style={styles.mainBannerP}>Home / Sign Up</p>
        </div>
      </section>
      <div style={styles.signupContainer}>
        <div className="signup-form">
          <h1 style={styles.signupFormH1}>Sign Up</h1>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.inputGroupLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                style={styles.inputGroupInput}
                onFocus={(e) => e.target.style.borderColor = styles.inputGroupInputFocus.borderColor}
                onBlur={(e) => e.target.style.borderColor = styles.inputGroupInput.borderColor}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.inputGroupLabel}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                style={styles.inputGroupInput}
                onFocus={(e) => e.target.style.borderColor = styles.inputGroupInputFocus.borderColor}
                onBlur={(e) => e.target.style.borderColor = styles.inputGroupInput.borderColor}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="confirmPassword" style={styles.inputGroupLabel}>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                style={styles.inputGroupInput}
                onFocus={(e) => e.target.style.borderColor = styles.inputGroupInputFocus.borderColor}
                onBlur={(e) => e.target.style.borderColor = styles.inputGroupInput.borderColor}
              />
            </div>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => {
                e.target.style.background = styles.buttonHover.background;
                e.target.style.transform = styles.buttonHover.transform;
              }}
              onMouseOut={(e) => {
                e.target.style.background = styles.button.background;
                e.target.style.transform = 'none';
              }}
            >
              Sign Up
            </button>
            <p style={styles.loginLink}>
              Already have an account?{' '}
              <a
                href="/Login"
                style={styles.loginLinkA}
                onMouseOver={(e) => e.target.style.color = styles.loginLinkAHover.color}
                onMouseOut={(e) => e.target.style.color = styles.loginLinkA.color}
              >
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
