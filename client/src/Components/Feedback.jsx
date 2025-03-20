import React from "react";

const FAQAndHelp = () => {
  return (
    <div>
      
      <style jsx>{`
        body {
          font-family: 'Heebo', sans-serif;
        }
        .page-header {
          background: url('/Photos/fab.gif') no-repeat center center;
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
        .faq-item {
          margin-bottom: 2rem;
        }
        .faq-question {
          font-weight: bold;
        }
        .faq-answer {
          margin-top: 0.5rem;
        }
      `}</style>

      
      <div className="page-header">
        <div className="container">
          <h1 className="display-3" style={{color:'black'}}>FAQ & Help</h1>
        </div>
      </div>
      

      
      <div className="container content">
        <h2 className="section-title">Frequently Asked Questions (FAQ)</h2>

        <div className="faq-item">
          <p className="faq-question">What is BingoLingo?</p>
          <p className="faq-answer">
            BingoLingo is an online platform that offers language learning courses. Our goal is to make language learning accessible, engaging, and effective through interactive modules and live sessions.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">How do I create an account?</p>
          <p className="faq-answer">
            To create an account, click on the "Sign Up" button on our homepage. Fill in the required details such as your name, email address, and password, then submit the form. You will receive a confirmation email to activate your account.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">What payment methods do you accept?</p>
          <p className="faq-answer">
            We accept various payment methods including credit/debit cards and PayPal. You can select your preferred payment method during the checkout process.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">How can I reset my password?</p>
          <p className="faq-answer">
            If you’ve forgotten your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and you will receive instructions to reset your password.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">How can I contact customer support?</p>
          <p className="faq-answer">
            You can contact our customer support team via email at [your support email] or through the contact form available on our website.
          </p>
        </div>

        <h2 className="section-title">Need More Help?</h2>
        <p>
          If you have any other questions or need further assistance, please don't hesitate to reach out to us. We're here to help you with any issues or concerns you may have regarding our services.
        </p>
      </div>
    
    </div>
  );
};

export default FAQAndHelp;