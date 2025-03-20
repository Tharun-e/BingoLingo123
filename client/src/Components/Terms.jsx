import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
    
      <style jsx>{`
        body {
          font-family: 'Heebo', sans-serif;
        }
        .page-header {
          background: url('/Photos/tb.gif') no-repeat center center;
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
        ul {
          margin-left: 2rem;
        }
      `}</style>

     
      <div className="page-header">
        <div className="container">
          <h1 className="display-3" style={{color:'black'}}>Terms and Conditions</h1>
        </div>
      </div>
      

      
      <div className="container content">
        <h2 className="section-title">Terms and Conditions for BingoLingo</h2>
        <p>
          Welcome to BingoLingo. These Terms and Conditions outline the rules and regulations for using our website and services. By accessing or using our website, you agree to be bound by these terms.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.
        </p>

        <h3>2. Changes to Terms</h3>
        <p>
          We may update these Terms and Conditions from time to time. Any changes will be posted on this page, and your continued use of the website constitutes your acceptance of the updated terms.
        </p>

        <h3>3. Use of Website</h3>
        <p>
          You agree to use our website and services only for lawful purposes and in accordance with these Terms and Conditions. You are responsible for your use of the website and must not engage in any activity that disrupts or interferes with the website’s functionality.
        </p>

        <h3>4. User Accounts</h3>
        <p>
          To access certain features of our website, you may be required to create an account. You agree to provide accurate and complete information and to keep your account credentials confidential. You are responsible for all activities that occur under your account.
        </p>

        <h3>5. Intellectual Property</h3>
        <p>
          All content on our website, including text, images, and logos, is the property of BingoLingo or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>
          We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services. Our liability is limited to the maximum extent permitted by law.
        </p>

        <h3>7. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites. We do not endorse or take responsibility for the content of any linked sites. Accessing these links is at your own risk.
        </p>

        <h3>8. Termination</h3>
        <p>
          We reserve the right to terminate or suspend your access to our website and services at our sole discretion, without prior notice, for any reason including, but not limited to, violation of these Terms and Conditions.
        </p>

        <h3>9. Governing Law</h3>
        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under or in connection with these terms will be subject to the exclusive jurisdiction of the courts of [Your Country/State].
        </p>

        <h3>10. Contact Us</h3>
        <p>
          If you have any questions or concerns about these Terms and Conditions, please contact us at [your contact email].
        </p>

        <p>
          Thank you for using BingoLingo. We hope you enjoy our services and find them valuable.
        </p>
      </div>
      
    </div>
  );
};

export default TermsAndConditions;