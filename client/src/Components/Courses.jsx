import React from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const navigate = useNavigate();

    const handleEnroll = (courseName) => {
        navigate(`/login?course=${encodeURIComponent(courseName)}`);
    };
    return (
        <>
            <style jsx>{`
                
                html, body {
                    margin-top: 10px;
                    padding: 0;
                    overflow-x: hidden;
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box; 
                }

                .main-banner {
                    background: url('/Photos/cb.gif') no-repeat center center;
                    background-size: cover;
                    color: #fff;
                    text-align: center;
                    width: 100vw; 
                    height: 60vh; 
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 70px; 
                    box-sizing: border-box; 
                    animation: fadeInUp 1s ease-in-out forwards;
                    margin-top: 0px;
                }

                .banner-content {
                    text-align: center;
                }

                .main-banner h1 {
                    font-size: 3em;
                    margin-bottom: 20px;
                    color: black;
                }

                .main-banner p {
                    font-size: 1.2em;
                    margin-bottom: 20px;
                }

                @keyframes fadeInUp {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .course-list {
                    display: flex;
                    flex-direction: row; 
                    justify-content: center;
                    gap: 20px;
                    flex-wrap: wrap;
                    padding: 20px;
                }
                
                .course-card {
                    background: #fff;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    max-width: 300px;
                    padding: 10px 20px;
                    text-align: center;
                    margin: 10px;
                    min-height: 400px; 
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                
                .course-card img {
                    max-width: 100%;
                    border-radius: 5px;
                    margin-bottom: 20px;
                }
                
                .cta-button {
                    display: inline-block;
                    padding: 10px 20px;
                    background: #1e90ff;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background 0.3s ease;
                }
                
                .cta-button:hover {
                    background: #4169e1;
                }

                .content {
                    flex: 1;
                    padding-bottom: 70px; 
                }

                
                @media (max-width: 1200px) {
                    .main-banner h1 {
                        font-size: 2.5em;
                    }
                    .main-banner p {
                        font-size: 1em;
                    }
                }

                @media (max-width: 992px) {
                    .main-banner h1 {
                        font-size: 2em;
                    }
                    .main-banner p {
                        font-size: 0.9em;
                    }

                    .course-list {
                        flex-direction: column; 
                        align-items: center;
                    }
                }

                @media (max-width: 768px) {
                    .main-banner h1 {
                        font-size: 1.8em;
                    }
                    .main-banner p {
                        font-size: 0.8em;
                    }
                }

                @media (max-width: 576px) {
                    .main-banner h1 {
                        font-size: 1.5em;
                    }
                    .main-banner p {
                        font-size: 0.7em;
                    }
                }
            `}</style>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
                <section id="home" className="main-banner">
                    <div className="banner-content">
                        <h1 style={{ color: 'black' }}>Our Courses</h1>
                        <p style={{ color: 'black' }}>Home / Courses</p>
                    </div>
                </section>
                <main className="content">
                    <h1>Available Courses</h1>
                    <div className="course-list">
                        <div className="course-card">
                            <img src="/Photos/french.jpg" alt="French Course" style={{ width: '305px', height: '200px' }} />
                            <h3>French for Beginners</h3>
                            <p>Start with the basics of French and build your skills progressively.</p>
                            <button className="cta-button" onClick={() => handleEnroll('French for Beginners')}>Enroll Now</button>
                        </div>
                        <div className="course-card">
                            <img src="/Photos/hindi.jpg" alt="Hindi Course" style={{ width: '240px', height: '200px' }} />
                            <h3>Hindi for Beginners</h3>
                            <p>Learn Hindi from scratch with interactive exercises and quizzes.</p>
                            <button className="cta-button" onClick={() => handleEnroll('Hindi for Beginners')}>Enroll Now</button>
                        </div>
                        <div className="course-card">
                            <img src="/Photos/port.jpg" alt="Portuguese Course" style={{ width: '305px', height: '200px' }} />
                            <h3>Portuguese for Beginners</h3>
                            <p>Discover the essentials of Portuguese through engaging lessons and activities.</p>
                            <button className="cta-button" onClick={() => handleEnroll('Portuguese for Beginners')}>Enroll Now</button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Courses;