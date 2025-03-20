import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.put('http://localhost:3000/bom/n', {
                email,
                newPassword,
            });

            if (response.status === 200) {
                setMessage('Password updated successfully');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setMessage(response.data.message || 'Failed to update password');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div style={styles.body}>
            <section id="home" style={styles.mainBanner}>
                <div style={styles.bannerContent}>
                    <h1 style={styles.mainBannerH1}>Forgot Password</h1>
                    <p style={styles.mainBannerP}>Home / Forgot Password</p>
                </div>
            </section>
            <div style={styles.container}>
                <h2 style={styles.heading}>Forgot Password</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>New Password:</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <button type="submit" style={styles.button}>Update Password</button>
                </form>
                {message && <p style={{ ...styles.message, color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
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
        minHeight: '100vh',
    },
    mainBanner: {
        background: "url('/Photos/slbb.gif') no-repeat center center/cover",
        color: '#fff',
        textAlign: 'center',
        padding: '100px 20px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeInUp 1s ease-in-out forwards',
        marginTop: '-80px',
    },
    bannerContent: {
        animation: 'fadeInUp 1s ease-in-out forwards',
    },
    mainBannerH1: {
        fontSize: '3em',
        margin: 0,
        color: 'white',
    },
    mainBannerP: {
        fontSize: '1.2em',
        margin: '10px 0 0',
        color: 'white',
    },
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        position: 'relative',
        top: '-50px',
        zIndex: 1,
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '1.8rem',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: '90%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        transition: 'border-color 0.3s',
    },
    button: {
        padding: '10px',
        backgroundColor: '#00aaff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        marginTop: '10px',
    },
    message: {
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '1rem',
    },
};

export default ForgotPassword;
