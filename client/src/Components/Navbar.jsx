import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserContext } from './UserContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const { user } = useContext(UserContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
      setShowEmail(false);
    }
  };

  useEffect(() => {
    if (menuOpen || showEmail) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, showEmail]);

  useEffect(() => {
    setMenuOpen(false);
    setShowEmail(false);
  }, [location]);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <div style={styles.logo}>
          <img src="/Photos/logo.jpeg" alt="Logo" style={styles.logoImage} />
        </div>
        <div style={styles.brandName}>BINGOLINGO</div>
      </div>

      <Link to="/profile" style={styles.profileIcon}>
        <AccountCircleIcon style={styles.profileIconImage} />
        {showEmail && (
          <div style={styles.emailContainer}>
            <div style={styles.email}>{user.email}</div>
            <Link to="/profile" style={styles.profileLink}>Profile</Link>
          </div>
        )}
      </Link>

      <div style={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <ul
        ref={menuRef}
        style={{ ...styles.navList, display: menuOpen ? 'flex' : 'none' }}
      >
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/Courses" style={styles.navLink}>Courses</Link></li>
        <li style={styles.navItem}><Link to="/testimonials" style={styles.navLink}>Testimonials</Link></li>
        
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#FFDAB9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
    fontSize: '1.2rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    marginRight: '20px',
  },
  logoImage: {
    height: '50px',
    cursor: 'pointer',
    borderRadius: '15px',
    border: '2px solid #fff',
  },
  brandName: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: '25px',
    fontFamily: '"Arial Black',
    marginLeft: '20px',
  },
  profileIcon: {
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    position: 'relative',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
  },
  profileIconImage: {
    fontSize: '2rem',
    color: 'black',
  },
  emailContainer: {
    position: 'absolute',
    top: '30px',
    left: '0',
    backgroundColor: '#fff',
    color: '#000',
    padding: '5px 10px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: '1001',
  },
  email: {
    marginBottom: '5px',
  },
  profileLink: {
    display: 'block',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuIcon: {
    color: 'black',
    display: 'block',
    cursor: 'pointer',
    fontSize: '2rem',
    marginRight: '20px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    position: 'absolute',
    top: '60px',
    right: '20px',
    backgroundColor: '#FFDAB9',
    width: '200px',
    flexDirection: 'column',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  navItem: {
    margin: '10px 0',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'block',
    padding: '10px 20px',
    textAlign: 'center',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#b3e0ff',
  },
  '@media (max-width: 992px)': {
    navbar: {
      padding: '10px 15px',
    },
    navItem: {
      margin: '0 15px',
    },
  },
  '@media (max-width: 768px)': {
    menuIcon: {
      marginRight: '15px',
    },
    navList: {
      flexDirection: 'column',
      position: 'absolute',
      top: '60px',
      right: '20px',
      backgroundColor: '#FFDAB9',
      width: '200px',
    },
    navItem: {
      margin: '10px 0',
    },
    logoImage: {
      height: '40px',
    },
  },
  '@media (max-width: 576px)': {
    logoImage: {
      height: '30px',
    },
    navLink: {
      fontSize: '0.9rem',
    },
  },
};

export default Navbar;
