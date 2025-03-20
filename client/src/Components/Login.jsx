import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';

const LoginPage = () => {
  const { mail, setMail, lang, setLang, level, setLevel } = useContext(UserContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');


  const checkCredentials = async (email, password) => {
    try {
      const response = await axios.get('http://localhost:3000/bom/n');
      const data = response.data;
      const user = data.find(user => user.email === email && user.password === password);
      return user;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  const updateUserLanguage = async (email, language) => {
    const progress = 0; 
    
    try {
      const response = await axios.put('http://localhost:3000/bom/n/language', {
        email,
        language,
        progress
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = response.data;
      console.log('Response from update language:', data);
    } catch (error) {
      console.error('Error updating user language:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const user = await checkCredentials(email, password);
    
    if (user) {
     
      setMail(email);
      localStorage.setItem('mail',email);

      
      if (selectedLanguage) {
        await updateUserLanguage(email, selectedLanguage);
      }

      
      if (selectedLanguage) {
        navigate(`/learning/${selectedLanguage}`);
      } else {
        navigate('/');
      }
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div style={styles.body}>
      <section id="home" style={styles.mainBanner}>
        <div style={styles.bannerContent}>
          <h1 style={styles.mainBannerH1}>Login</h1>
          <p style={styles.mainBannerP}>Home / Login</p>
        </div>
      </section>
      <div style={styles.loginContainer}>
        <h1 style={styles.loginFormH1}>Login</h1>
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
            <label htmlFor="language" style={styles.inputGroupLabel}>Select Language</label>
            <select
              id="language"
              name="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              style={styles.inputGroupInput}
            >
              <option value="">Select a language</option>
              <option value="french">French</option>
              <option value="hindi">Hindi</option>
              <option value="portuguese">Portuguese</option>
            </select>
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
            Login
          </button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <p style={styles.signupLink}>
            Don't have an account?{' '}
            <a
              href="/Sign"
              style={styles.signupLinkA}
              onMouseOver={(e) => e.target.style.color = styles.signupLinkAHover.color}
              onMouseOut={(e) => e.target.style.color = styles.signupLinkA.color}
            >
              Sign up
            </a>
          </p>
          
          <p style={styles.forgotPasswordLink}>
            <a
              href="/forget"
              style={styles.forgotPasswordLinkA}
              onMouseOver={(e) => e.target.style.color = styles.forgotPasswordLinkAHover.color}
              onMouseOut={(e) => e.target.style.color = styles.forgotPasswordLinkA.color}
            >
              Forgot Password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
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
    
  },
  bannerContent: {
    animation: 'fadeInUp 1s ease-in-out forwards'
  },
  mainBannerH1: {
    fontSize: '3em',
    margin: 0,
    color: 'white'
  },
  mainBannerP: {
    fontSize: '1.2em',
    margin: '10px 0 0',
    color: 'white'
  },
  loginContainer: {
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
  loginFormH1: {
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
  signupLink: {
    marginTop: '1rem',
    color: '#555'
  },
  signupLinkA: {
    color: '#00aaff',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  signupLinkAHover: {
    color: '#008ecc'
  },
  forgotPasswordLink: {
    marginTop: '1rem',
    color: '#555'
  },
  forgotPasswordLinkA: {
    color: '#00aaff',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  forgotPasswordLinkAHover: {
    color: '#008ecc'
  }
};

export default LoginPage;
