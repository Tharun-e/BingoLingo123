import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      
      <style jsx>{`
        body {
          font-family: 'Heebo', sans-serif;
        }
        .page-header {
          background: url('/Photos/prib.png') no-repeat center center;
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
      `}</style>

      
      <div className="page-header">
        <div className="container">
          <h1 className="display-3" style={{color:'black'}}>Privacy Policy</h1>
        </div>
      </div>
      

      
      <div className="container content">
        <h2 className="section-title">Privacy Policy for BingoLingo</h2>
        <p>
          At BingoLingo, we value your privacy and are committed to protecting your personal data. This privacy policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We collect information to provide better services to our users. This includes personal details you provide directly (e.g., name, email address), and information we collect automatically (e.g., browsing behavior, device information).
        </p>

        <h3>2. How We Use Your Information</h3>
        <p>
          The information we collect is used to:
          <ul>
            <li>Enhance your experience on our platform.</li>
            <li>Provide customer support and respond to your inquiries.</li>
            <li>Analyze usage patterns to improve our services.</li>
            <li>Send you updates and promotional content if you have opted in.</li>
          </ul>
        </p>

        <h3>3. Sharing Your Information</h3>
        <p>
          We do not sell or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website, conducting business, or providing services, but they are obligated to keep the information confidential.
        </p>

        <h3>4. Security Measures</h3>
        <p>
          We implement various security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your data, but we cannot guarantee its absolute security.
        </p>

        <h3>5. Your Rights</h3>
        <p>
          You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at [your contact email].
        </p>

        <h3>6. Changes to This Privacy Policy</h3>
        <p>
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. We encourage you to review this policy periodically.
        </p>

        <h3>7. Contact Us</h3>
        <p>
          If you have any questions or concerns about this privacy policy or our data practices, please contact us at [your contact email].
        </p>

        <p>
          Thank you for trusting BingoLingo with your information. We are dedicated to protecting your privacy and ensuring a secure online experience.
        </p>
      </div>
      
    </div>
  );
};

export default PrivacyPolicy;