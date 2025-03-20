import React, { useState } from "react";
import axios from 'axios';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('');
  const [language, setLanguage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/test/b', {
        username,
        language,
        feed: comment, 
        rating, 
      });
      console.log(response.data);
      setSubmitted(true);
    } catch (err) {
      setError(err);
      console.error('Error submitting feedback:', err);
    }
  };

  return (
    <div>
      <style jsx>{`
        body {
          font-family: 'Heebo', sans-serif;
        }
        .page-header {
          background: url('/Photos/rb.gif') no-repeat center center;
          background-size: cover;
          color: white;
          padding: 3rem 0;
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .display-3 {
          font-size: 3rem;
          font-weight: bold;
        }
        .content {
          margin-top: 2rem;
        }
        h3 {
          margin-top: 2rem;
          color: #fb873f;
        }
        p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .rating-container {
          display: flex;
          justify-content: center;
          margin: 2rem 0;
        }
        .rating-star {
          font-size: 2rem;
          color: #e4e5e9;
          cursor: pointer;
          transition: color 0.3s ease, transform 0.2s ease;
        }
        .rating-star.active {
          color: #ffc107;
        }
        .rating-star:hover,
        .rating-star.active {
          transform: scale(1.2);
        }
        .input-box {
          width: 100%;
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        .input-box input,
        .input-box textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          background-color: white;
          color: black;
          margin-bottom: 1rem;
        }
        .input-box textarea {
          resize: none;
        }
        .submit-button {
          display: block;
          width: 100%;
          max-width: 200px;
          margin: 2rem auto;
          padding: 0.75rem 1.5rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .submit-button:hover {
          background-color: #0056b3;
        }
        .thank-you-message {
          text-align: center;
          margin-top: 2rem;
          font-size: 1.2rem;
          color: #28a745;
        }
      `}</style>

      <div className="page-header">
        <div className="container">
          <h1 className="display-3" style={{color: 'black'}}>Reviews</h1>
        </div>
      </div>

      <div className="container content">
        <h2 className="section-title">Share Your Experience</h2>
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`rating-star ${rating >= star ? 'active' : ''}`}
              onClick={() => handleRatingClick(star)}
            >
              ★
            </span>
          ))}
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="text"
            placeholder="Enter language"
            value={language}
            onChange={handleLanguageChange}
          />
        </div>

        <div className="input-box">
          <textarea
            rows="5"
            placeholder="Enter your feedback here..."
            value={comment}
            onChange={handleCommentChange}
          />
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          Submit Rating
        </button>

        {submitted && (
          <p className="thank-you-message">
            Thank you for your feedback! <br />
          </p>
        )}

        {error && (
          <p className="thank-you-message">
            There was an error submitting your feedback. Please try again.
          </p>
        )}

        <h3>We Value Your Feedback!</h3>
        <p>
          Your feedback is important to us. Please share your experience with our service by providing a rating and a comment. We appreciate your time and input as it helps us improve and serve you better.
        </p>

        <h3>How to Leave a Review</h3>
        <p>
          To leave a review, simply select the number of stars that best reflects your experience and enter your comments in the box provided. Your review will help others make informed decisions and allow us to enhance our services.
        </p>

        <p>
          Thank you for taking the time to review our services!
        </p>
      </div>
    </div>
  );
};

export default ReviewPage;
