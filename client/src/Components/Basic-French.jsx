import React from 'react';

const LearnBasicFrench = () => {
    const speak = (text) => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = 'fr-FR';
        window.speechSynthesis.speak(msg);
    };

    return (
        <div className="container">
            <style>
                {`
                
                html, body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    background: #f4f4f4;
                    color: #333;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                body {
                    flex: 1;
                }

                
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #00aaff;
                    color: #fff;
                    padding: 10px 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .logo img {
                    height: 50px;
                    transition: transform 0.3s ease;
                }

                .logo img:hover {
                    transform: scale(1.1);
                }

                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    gap: 15px;
                }

                nav ul li {
                    margin: 0;
                }

                nav ul li a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.3s ease;
                }

                nav ul li a:hover {
                    color: #e0f7ff;
                }

                
                main {
                    flex: 1;
                    padding: 20px;
                    background: #fff;
                }

                .french-lesson {
                    text-align: center;
                }

                .french-lesson h1 {
                    font-size: 2rem;
                    margin-bottom: 20px;
                }

                .lesson p {
                    font-size: 1.1rem;
                    margin: 10px 0;
                }

                .lesson button {
                    background: none;
                    border: none;
                    font-size: 1.2rem;
                    cursor: pointer;
                    color: #00aaff;
                }

                .lesson button:hover {
                    color: #0088cc;
                }

            
                .know-your-knowledge-section {
                    margin-top: 30px;
                    text-align: center;
                }

                .know-your-knowledge-button {
                    display: inline-block;
                    background-color: #ff4c4c; 
                    color: #fff; 
                    padding: 10px 20px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-size: 1rem;
                    transition: background-color 0.3s, transform 0.3s;
                }

                .know-your-knowledge-button:hover {
                    background-color: #cc3a3a; 
                    transform: scale(1.05);
                }

        
                footer {
                    background: #00aaff;
                    color: #fff;
                    text-align: center;
                    padding: 10px 20px;
                    width: 100%;
                }

            
                .main-banner {
                    background: url('/Photos/fb.gif') no-repeat center center;
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
                }
                `}
            </style>
            <section className="main-banner">
                <div className="banner-content">
                    <h1 style={{color: 'black'}}>Learn Basic French</h1>
                    <p style={{color: 'black'}}>Home / Learn Basic French</p>
                </div>
            </section>
            
            <main>
                <section className="french-lesson">
                    <h1>Learn Basic French</h1>
                    <div className="lesson">
                        <p>French: <strong>Bonjour</strong> - English: <strong>Hello</strong> <button onClick={() => speak('Bonjour')}>🔊</button></p>
                        <p>French: <strong>Merci</strong> - English: <strong>Thank you</strong> <button onClick={() => speak('Merci')}>🔊</button></p>
                        <p>French: <strong>Comment ça va?</strong> - English: <strong>How are you?</strong> <button onClick={() => speak('Comment ça va?')}>🔊</button></p>
                        <p>French: <strong>Oui</strong> - English: <strong>Yes</strong> <button onClick={() => speak('Oui')}>🔊</button></p>
                        <p>French: <strong>Non</strong> - English: <strong>No</strong> <button onClick={() => speak('Non')}>🔊</button></p>
                        <p>French: <strong>Je m'appelle</strong> - English: <strong>My name is</strong> <button onClick={() => speak('Je m\'appelle')}>🔊</button></p>
                        <p>French: <strong>Excusez-moi</strong> - English: <strong>Excuse me</strong> <button onClick={() => speak('Excusez-moi')}>🔊</button></p>
                    </div>
                    <div className="know-your-knowledge-section">
                        <a href="/french-quiz" className="know-your-knowledge-button">Know Your Knowledge</a>
                    </div>
                </section>
            </main>
            
        </div>
    );
};

export default LearnBasicFrench;
