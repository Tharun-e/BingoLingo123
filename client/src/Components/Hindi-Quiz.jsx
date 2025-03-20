import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const HindiQuiz = () => {
    const [score, setScore] = useState(null);
    const [showTryAgain, setShowTryAgain] = useState(false);
    const [showDoneButton, setShowDoneButton] = useState(false);
    const navigate = useNavigate();
    const questions = [
        { question: '1. What does "नमस्ते" mean in English?', answers: ['Hello', 'Goodbye', 'Thank you', 'Sorry'], correctAnswer: 'Hello' },
        { question: '2. What does "धन्यवाद" mean in English?', answers: ['Hello', 'Goodbye', 'Thank you', 'Sorry'], correctAnswer: 'Thank you' },
        { question: '3. What is the Hindi word for "Water"?', answers: ['पानी', 'दूध', 'जूस', 'चाय'], correctAnswer: 'पानी' },
        { question: '4. How do you say "Good morning" in Hindi?', answers: ['सुप्रभात', 'शुभ रात्रि', 'नमस्ते', 'शुभ संध्या'], correctAnswer: 'सुप्रभात' },
        { question: '5. What does "मित्र" mean in English?', answers: ['Friend', 'Enemy', 'Neighbor', 'Teacher'], correctAnswer: 'Friend' },
        { question: '6. How do you say "How are you?" in Hindi?', answers: ['आप कैसे हैं?', 'नमस्ते', 'धन्यवाद', 'मुझे माफ़ करें'], correctAnswer: 'आप कैसे हैं?' },
        { question: '7. What does "खुश" mean?', answers: ['Happy', 'Sad', 'Angry', 'Excited'], correctAnswer: 'Happy' },
        { question: '8. What is the Hindi word for "Family"?', answers: ['परिवार', 'मित्र', 'समुदाय', 'पड़ोसी'], correctAnswer: 'परिवार' },
        { question: '9. How do you say "Yes" in Hindi?', answers: ['हां', 'नहीं', 'शायद', 'कभी नहीं'], correctAnswer: 'हां' },
        { question: '10. What does "अलविदा" mean in English?', answers: ['Goodbye', 'Hello', 'Thank you', 'Please'], correctAnswer: 'Goodbye' }
    ];

    const updateUserLevel = async (email, level) => {
        try {
            const response = await axios.put('http://localhost:3000/n/language', {
                email,
                language: 'Hindi',
                progress: level
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

        
        const progress = (tempScore / totalQuestions) * 100;

        
        localStorage.setItem('progress', progress);

       
        const email = localStorage.getItem('email');
        if (email) {
            await updateUserLevel(email, progress);
        } else {
            console.error('Email not found in localStorage');
        }

       
        if (tempScore >= 7) {
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
        navigate('/courses')
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
                    <h1>Hindi Quiz</h1>
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

export default HindiQuiz;
