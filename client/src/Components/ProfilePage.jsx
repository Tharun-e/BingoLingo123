import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';

const ProfilePage = () => {
  const { mail } = useContext(UserContext); 
  const [userData, setUserData] = useState({
    language: localStorage.getItem('language') || '',
    progress: localStorage.getItem('progress') || '',

  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/bom/n/${mail}`);
        console.log(response,"---------------------------");
        const { language, progress } = response.data;
        
        
        localStorage.setItem('language', language);
        localStorage.setItem('progress', progress);
        localStorage.setItem('mail', mail);
        
      
        setUserData({ language, progress });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (mail) {
      fetchUserData();
    }
  }, [mail]);

  return (
    <div style={styles.profileContainer}>
      <h2>Profile Page</h2>
      {localStorage.getItem('mail') ? (
        <div style={styles.profileDetails}>
          <p><strong>Email:</strong> {localStorage.getItem('mail')}</p>
          <p><strong>Language:</strong> {localStorage.getItem('language')}</p>
          <p><strong>Progress:</strong> {localStorage.getItem('progress')}</p>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  profileDetails: {
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ProfilePage;
