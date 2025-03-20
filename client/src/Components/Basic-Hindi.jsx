import React from 'react';

const LearnBasicHindi = () => {
    const speak = (text, lang) => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = lang;
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

                .hindi-lesson {
                    text-align: center;
                }

                .hindi-lesson h1 {
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

                .know-your-knowledge-button {
                    background-color: #00aaff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    text-align: center;
                    margin-top: 20px;
                    display: inline-block;
                    text-decoration: none;
                }

                .know-your-knowledge-button:hover {
                    background-color: #0088cc;
                }

            
                footer {
                    background: #00aaff;
                    color: #fff;
                    text-align: center;
                    padding: 10px 20px;
                    width: 100%;
                    position: relative;
                    bottom: 0;
                }

                
                .main-banner {
                    background: url('/Photos/hbb.gif') no-repeat center center;
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
                    <h1 style={{color:'black'}}>Learn Basic Hindi</h1>
                    <p style={{color:'black'}}> Home / Learn Basic Hindi</p>
                </div>
            </section>
            <main>
                <section className="hindi-lesson">
                    <h1>Learn Basic Hindi</h1>
                    <div className="lesson">
                        <p>Hindi: <strong>नमस्ते</strong> - English: <strong>Hello</strong> <button onClick={() => speak('नमस्ते', 'hi-IN')}>🔊</button></p>
                        <p>Hindi: <strong>धन्यवाद</strong> - English: <strong>Thank you</strong> <button onClick={() => speak('धन्यवाद', 'hi-IN')}>🔊</button></p>
                        <p>Hindi: <strong>आप कैसे हैं?</strong> - English: <strong>How are you?</strong> <button onClick={() => speak('आप कैसे हैं?', 'hi-IN')}>🔊</button></p>
                        <p>Hindi: <strong>हाँ</strong> - English: <strong>Yes</strong> <button onClick={() => speak('हाँ', 'hi-IN')}>🔊</button></p>
                        <p>Hindi: <strong>नहीं</strong> - English: <strong>No</strong> <button onClick={() => speak('नहीं', 'hi-IN')}>🔊</button></p>
                        <p>Hindi: <strong>मेरा नाम है</strong> - English: <strong>My name is</strong> <button onClick={() => speak('मेरा नाम है', 'hi-IN')}>🔊</button></p>
                        <p>Hindi: <strong>मुझे माफ करें</strong> - English: <strong>Excuse me</strong> <button onClick={() => speak('मुझे माफ करें', 'hi-IN')}>🔊</button></p>
                    </div>
                    <a href="/hindi-quiz" className="know-your-knowledge-button">Know Your Knowledge</a>
                </section>
            </main>
            
        </div>
    );
};

export default LearnBasicHindi;
