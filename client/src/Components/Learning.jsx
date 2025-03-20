import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const LearningPage = () => {
    const { language } = useParams();
    const [content, setContent] = useState({
        title: 'Course Not Found',
        introText: 'Sorry, we could not find the course you are looking for.',
        videoSrc: '',
        learnMoreHref: '#',
    });

    useEffect(() => {
        switch (language) {
            case 'french':
                setContent({
                    title: 'Learn French',
                    introText: 'Welcome to the French language course. You will start with basic greetings, vocabulary, and essential grammar.',
                    videoSrc: 'https://www.youtube.com/embed/wtiFx1TRCq0?si=diAR8WO4jAjTip1I',
                    learnMoreHref: '/basic-french',
                });
                break;
            case 'hindi':
                setContent({
                    title: 'Learn Hindi',
                    introText: 'Welcome to the Hindi language course. Begin with learning basic pronunciation, essential vocabulary, and simple sentences.',
                    videoSrc: 'https://www.youtube.com/embed/1lrz11BbqCA?si=amNu91gGxdSEJ7uJ',
                    learnMoreHref: '/basic-hindi',
                });
                break;
            case 'portuguese':
                setContent({
                    title: 'Learn Portuguese',
                    introText: 'Welcome to the Portuguese language course. Start with basic expressions, common phrases, and introductory grammar.',
                    videoSrc: 'https://www.youtube.com/embed/RkOqjkero10?si=-Uvw-GXl89-pFRk1',
                    learnMoreHref: '/basic-portuguese',
                });
                break;
            default:
                setContent({
                    title: 'Course Not Found',
                    introText: 'Sorry, we could not find the course you are looking for.',
                    videoSrc: '',
                    learnMoreHref: '#',
                });
                break;
        }
    }, [language]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <style jsx>{`
                html, body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Arial', sans-serif;
                    background: #f4f4f9;
                    color: #333;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .main-container {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                main {
                    padding: 20px;
                    background: #fff;
                    margin: 0 auto;
                    max-width: 800px;
                    text-align: center;
                    flex: 1;
                }

                #learning-title {
                    font-size: 2.5rem;
                    color: #0077ff;
                    margin-bottom: 20px;
                    font-weight: 700;
                }

                .learning-content {
                    margin-top: 20px;
                }

                .intro-section {
                    margin-bottom: 30px;
                }

                .intro-section h2 {
                    font-size: 1.8rem;
                    margin-bottom: 15px;
                    color: #333;
                    font-weight: 600;
                }

                #intro-text {
                    font-size: 1.2rem;
                    line-height: 1.8;
                    color: #666;
                    margin-bottom: 20px;
                }

                .video-container {
                    margin-top: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .video-container h3 {
                    font-size: 1.4rem;
                    margin-bottom: 10px;
                    color: #333;
                    font-weight: 600;
                }

                iframe {
                    width: 60%;
                    max-width: 800px;
                    height: 250px !important;
                    border: none;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .learn-more-section {
                    margin-top: 30px;
                }

                .learn-more-button {
                    background-color: #0077ff;
                    color: #fff;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.1rem;
                    text-decoration: none;
                    transition: background-color 0.3s, transform 0.3s;
                    display: inline-block;
                }

                .learn-more-button:hover {
                    background-color: #0056b3;
                    transform: scale(1.05);
                }

                .main-banner {
                    background: url('/Photos/lb1.gif') no-repeat center center;
                    background-size: cover;
                    color: #fff;
                    text-align: center;
                    width: 100vw;
                    height: 50vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    animation: fadeInUp 1s ease-in-out forwards;
                }

                .banner-content {
                    text-align: center;
                }

                .main-banner h1 {
                    font-size: 3em;
                    margin-bottom: 20px;
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

                    iframe {
                        width: 100%;
                        height: 400px !important;
                    }
                }
            `}</style>

            <section className="main-banner">
                <div className="banner-content">
                    <h1 style={{ color: 'white' }}>{content.title}</h1>
                    <p style={{ color: 'white' }}>Home / {language.charAt(0).toUpperCase() + language.slice(1)}</p>
                </div>
            </section>

            <div className="main-container">
                <main>
                    <div className="learning-content">
                        <div className="intro-section">
                            <h2>Introduction</h2>
                            <p id="intro-text">{content.introText}</p>
                            <div className="video-container">
                                <h3>Introduction Video</h3>
                                <iframe
                                    src={content.videoSrc}
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Introduction Video"
                                    style={{ height: '250px' }}  
                                ></iframe>
                            </div>
                        </div>
                        <div className="learn-more-section">
                            <Link to={content.learnMoreHref} className="learn-more-button">Learn More</Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LearningPage;
