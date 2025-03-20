import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:3000/test/b'); 
        setTestimonials(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching testimonials: {error.message}</p>;

  return (
    <div style={styles.body}>
      <section style={styles.mainBanner}>
        <div style={styles.bannerContent}>
          <h1 style={styles.mainBannerH1}>Testimonials</h1>
          <p style={styles.mainBannerP}>Here’s what people have to say</p>
        </div>
      </section>
      <div style={styles.container}>
        <div style={styles.testimonialsList}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <div style={styles.content}>
                <h2 style={styles.name}>{testimonial.username}</h2>
                <p style={styles.language}>Language: {testimonial.language}</p>
                <p style={styles.feedback}>{testimonial.feed}</p>
              </div>
            </div>
          ))}
        </div>
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
    background: "url('/Photos/testo.gif') no-repeat center center/cover",
    color: '#fff',
    textAlign: 'center',
    padding: '100px,20px',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    
  },
  bannerContent: {
    animation: 'fadeInUp 1s ease-in-out forwards'
  },
  mainBannerH1: {
    fontSize: '3em',
    margin: 0,
    color: 'black'
  },
  mainBannerP: {
    fontSize: '1.2em',
    margin: '10px 0 0',
    color: 'black'
  },
  testimonialsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  testimonialCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: '1.2em',
    margin: '0',
  },
  language: {
    fontStyle: 'italic',
    color: '#555',
  },
  feedback: {
    marginTop: '10px',
  },
};

export default Testimonial;
