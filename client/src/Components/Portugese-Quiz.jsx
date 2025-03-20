import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const PortugueseQuiz = () => {
    const [score, setScore] = useState(null);
    const [showTryAgain, setShowTryAgain] = useState(false);
    const [showDoneButton, setShowDoneButton] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const questions = [
        { question: '1. What is "Olá" in English?', answers: ['Hello', 'Goodbye', 'Please', 'Thank you'], correctAnswer: 'Hello' },
        { question: '2. What does "Obrigado" mean?', answers: ['Hello', 'Goodbye', 'Thank you', 'Please'], correctAnswer: 'Thank you' },
        { question: '3. How do you say "Good morning" in Portuguese?', answers: ['Boa tarde', 'Bom dia', 'Boa noite', 'Olá'], correctAnswer: 'Bom dia' },
        { question: '4. What is the Portuguese word for "Water"?', answers: ['Água', 'Leite', 'Suco', 'Café'], correctAnswer: 'Água' },
        { question: '5. How do you say "Friend" in Portuguese?', answers: ['Inimigo', 'Vizinho', 'Amigo', 'Colega'], correctAnswer: 'Amigo' },
        { question: '6. What does "Feliz" mean?', answers: ['Happy', 'Sad', 'Angry', 'Excited'], correctAnswer: 'Happy' },
        { question: '7. What is the Portuguese word for "Family"?', answers: ['Família', 'Amigo', 'Comunidade', 'Vizinhança'], correctAnswer: 'Família' },
        { question: '8. How do you say "Yes" in Portuguese?', answers: ['Sim', 'Não', 'Talvez', 'Nunca'], correctAnswer: 'Sim' },
        { question: '9. What is "Adeus" in English?', answers: ['Hello', 'Goodbye', 'Thank you', 'Please'], correctAnswer: 'Goodbye' },
        { question: '10. How do you say "Excuse me" in Portuguese?', answers: ['Por favor', 'Desculpe', 'Obrigado', 'Com licença'], correctAnswer: 'Com licença' }
    ];

    const updateUserLevel = async (email, progress) => {
        try {
            const response = await axios.put('http://localhost:3000/n/language', {
                email,
                language: 'Portuguese',
                progress
            });

            if (response.status !== 200) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log('Level updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating user level:', error);
        }
    };

    const submitQuiz = async () => {
        let tempScore = 0;
        const totalQuestions = questions.length;

        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.correctAnswer) {
                tempScore++;
            }
        });

        setScore(tempScore);

        if (tempScore >= 7) {
            const progress = (tempScore / totalQuestions) * 100;
            localStorage.setItem('progress', progress);

            const email = localStorage.getItem('email');
            if (email) {
                await updateUserLevel(email, progress);
            } else {
                console.error('Email not found in localStorage');
            }

            setShowDoneButton(true);
        } else {
            setShowTryAgain(true);
        }

        document.getElementById('results').style.display = 'block';
    };

    const handleDone = () => {
        document.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
            input.checked = false;
        });

        setScore(null);
        setShowTryAgain(false);
        setShowDoneButton(false);
        document.getElementById('results').style.display = 'none';

        navigate('/courses'); // Redirect to Courses page
    };

    const closeModal = () => {
        document.getElementById('results').style.display = 'none';
        setShowTryAgain(false);
        setShowDoneButton(false);
    };

    const tryAgain = () => {
        window.location.reload();
    };

    return (
        <div>
            <style jsx>{`
                .quiz-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .quiz-container h1 {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .quiz-container .question {
                    margin-bottom: 20px;
                }

                .quiz-container .question p {
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                }

                .quiz-container .options {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .quiz-container .options label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .quiz-container .options input[type="radio"] {
                    margin-right: 10px;
                }

                .quiz-container button {
                    background-color: #00aaff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    display: block;
                    margin: 20px auto;
                }

                .quiz-container button:hover {
                    background-color: #0088cc;
                }

                #results {
                    display: none;
                    text-align: center;
                    margin-top: 20px;
                }

                #results h2 {
                    margin: 0;
                }

                .score {
                    font-size: 2rem;
                    color: #ff6600;
                    font-weight: bold;
                }

                .modal {
                    display: none; 
                    position: fixed; 
                    z-index: 1; 
                    left: 0;
                    top: 0;
                    width: 100%; 
                    height: 100%; 
                    overflow: auto; 
                    background-color: rgba(0, 0, 0, 0.5); 
                }

                .modal-content {
                    background-color: #fefefe;
                    margin: 15% auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                    max-width: 400px;
                    text-align: center;
                    border-radius: 10px;
                }

                .close {
                    color: #aaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                }

                .close:hover,
                .close:focus {
                    color: black;
                    text-decoration: none;
                    cursor: pointer;
                }

                .modal-button {
                    background-color: #00aaff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    margin: 20px 0 0;
                }

                .modal-button:hover {
                    background-color: #0088cc;
                }
            `}</style>
            <main>
                <section className="quiz-container">
                    <h1>Portuguese Quiz</h1>
                    <form id="quiz-form">
                        {questions.map((q, index) => (
                            <div key={index} className="question">
                                <p>{q.question}</p>
                                <div className="options">
                                    {q.answers.map((answer, i) => (
                                        <label key={i}>
                                            <input type="radio" name={`question-${index}`} value={answer} /> {answer}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button type="button" onClick={submitQuiz}>Submit Answers</button>
                    </form>

                    <div id="results" className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <p id="result-text">You scored {score} out of {questions.length}.</p>
                            {showDoneButton && (
                                <button id="done-button" className="modal-button" onClick={handleDone}>Course Completed Successfully</button>
                            )}
                            {showTryAgain && (
                                <button id="try-again-button" className="modal-button" onClick={tryAgain}>Try Again</button>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PortugueseQuiz;
