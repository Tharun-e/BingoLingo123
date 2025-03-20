import React from "react";

const AboutUs = () => {
  return (
    <div>
    
      <style jsx>{`
        body {
          font-family: 'Heebo', sans-serif;
        }
        .spinner-border {
          width: 3rem;
          height: 3rem;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .display-3 {
          font-size: 3rem;
          font-weight: bold;
        }
        .breadcrumb-item a {
          color: white;
        }
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .about-content {
          max-width: 800px;
        }
        
        .main-banner {
          background: url('/Photos/ab.gif') no-repeat center center;
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
      `}</style>

      
      <section className="main-banner">
        <div className="banner-content">
          
          
        </div>
      </section>
     

     
      <div className="container-xxl py-5">
        <div className="container about-container">
          <div className="about-content">
            <h6 className="section-title text-start pe-3">About Us</h6>
            <h1 className="mb-4" style={{ color: "#fb873f" }}>Welcome to BingoLingo</h1>
            <p className="mb-4">
              At BingoLingo, we believe in making language learning accessible, engaging, and fun. Join us in exploring new languages and cultures through our innovative online courses.
            </p>
            <p className="mb-4">
              BingoLingo is where the world of languages is at your fingertips. Our mission is to empower individuals worldwide by offering diverse and comprehensive language learning resources. Here's what makes us unique:
            </p>

            <h3 className="mb-4">Our Vision</h3>
            <p className="mb-4">
              We envision a world where language is no barrier to communication and understanding. We strive to make language learning a transformative and inclusive experience for all.
            </p>

            <h3 className="mb-4">A Commitment to Excellence</h3>
            <p className="mb-4">
              We are dedicated to providing top-quality language education. Our courses are developed by experienced linguists and educators to ensure our learners receive valuable and up-to-date knowledge.
            </p>

            <h3 className="mb-4">Empowering Learners</h3>
            <p className="mb-4">
              We believe in the power of language to open doors and connect people. BingoLingo is designed to empower individuals to learn new languages, enhance their communication skills, and broaden their cultural horizons.
            </p>

            <h3 className="mb-4">Innovation in Learning</h3>
            <p className="mb-4">
              Leveraging the latest technology, we offer innovative learning methods and tools. From interactive exercises to live conversation sessions, we're committed to providing a dynamic and engaging language learning experience.
            </p>

            <h3 className="mb-4">Community-Centric Approach</h3>
            <p className="mb-4">
              BingoLingo is more than just courses; it's a global community. We encourage collaboration, discussion, and cultural exchange among learners, creating an environment of mutual growth and understanding.
            </p>

            <h3 className="mb-4">Diverse and Inclusive Education</h3>
            <p className="mb-4">
              We celebrate diversity in languages, cultures, and perspectives. Our wide range of language courses caters to different interests and skill levels, ensuring everyone can find a learning path that suits them.
            </p>

            <h3 className="mb-4">Continuous Improvement</h3>
            <p className="mb-4">
              We are constantly evolving. Feedback from our learners helps us continually improve our platform, ensuring it remains effective, user-friendly, and aligned with the latest trends in language education.
            </p>

            <p className="mt-5 mb-4">
              Thank you for being a part of BingoLingo. Together, let's embark on a journey of linguistic and cultural discovery.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
