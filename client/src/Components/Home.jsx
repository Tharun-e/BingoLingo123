import React from 'react';
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Home = () => {
    const handleNavToggle = () => {
        const navList = document.querySelector('.nav-list');
        const navToggle = document.querySelector('.nav-toggle');
        navList.classList.toggle('active');
        navToggle.classList.toggle('active');
    };

    return (
        <div>
            <style>
                {`
                    
                    body, html {
                        margin: 0;
                        padding: 0;
                        background-color: #ffffff; 
                        height: 100%;
                        font-family: Arial, sans-serif;
                    }

                    
                    #root {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh; 
                    }

            
                    main {
                        flex: 1; 
                    }

                   
                    header {
                        background-color: #00aaff;
                        padding: 1rem 0.5rem;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        position: fixed; 
                        width: 100%; 
                        top: 0; 
                        z-index: 1000; 
                    }

                    
                    .logo img {
                        height: 100px;
                        transition: transform 0.3s ease;
                        border-radius: 20px;
                        margin-right: 100px;
                    }

                    .logo img:hover {
                        transform: scale(1.1);
                    }

                    
                    nav {
                        display: flex;
                        align-items: center;
                    }

                    .nav-toggle {
                        display: none;
                        background: none;
                        border: none;
                        cursor: pointer;
                        font-size: 24px;
                        color: #fff;
                        margin-right: 20px;
                    }

                    
                    .nav-list {
                        list-style: none;
                        padding: 0;
                        display: flex;
                        margin: 0;
                        transition: opacity 0.3s ease;
                    }

                    .nav-list li {
                        margin: 0 15px;
                    }

                    .nav-list li a {
                        color: #fff;
                        text-decoration: none;
                        font-weight: 600;
                        transition: color 0.3s ease;
                    }

                    .nav-list li a:hover {
                        color: #e0f7ff;
                    }

                    
                    @media (max-width: 768px) {
                        .nav-list {
                            display: none;
                            position: absolute;
                            top: 60px;
                            right: 20px;
                            background: #00aaff;
                            flex-direction: column;
                            width: 200px;
                            border-radius: 5px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                            padding: 10px 0;
                            opacity: 0;
                            visibility: hidden;
                            transform: translateY(-20px);
                            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
                        }

                        .nav-list.active {
                            display: flex;
                            opacity: 1;
                            visibility: visible;
                            transform: translateY(0);
                        }

                        .nav-toggle {
                            display: block;
                        }
                    }

                    
                    .hero {
                        text-align: center;
                        padding: 200px 20px;
                        background: #e0f7ff;
                        border-bottom: 2px solid #00aaff;
                        animation: fadeIn 2s ease-out;
                    }

                    .hero h1 {
                        font-size: 2.5rem;
                        margin-bottom: 15px;
                        font-weight: 700;
                        opacity: 0;
                        animation: slideIn 1s ease-out 0.5s forwards;
                    }

                    .hero p {
                        font-size: 1.2rem;
                        margin-bottom: 30px;
                        line-height: 1.6;
                        color: #555;
                        opacity: 0;
                        animation: slideIn 1s ease-out 1s forwards;
                    }

                    .cta-button {
                        display: inline-block;
                        background: #fff;
                        color: #00aaff;
                        padding: 10px 20px;
                        border-radius: 5px;
                        text-decoration: none;
                        font-weight: 700;
                        transition: background 0.3s ease, color 0.3s ease;
                        font-size: 1rem;
                    }

                    .cta-button:hover {
                        background: #00aaff;
                        color: #fff;
                    }

                    
                    .features {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        padding: 30px 20px;
                        background: #fff;
                    }

                    .feature img {
                        width: 100%;
                        border-radius: 8px;
                        transition: transform 0.3s ease;
                    }

                    .feature:hover img {
                        transform: scale(1.05);
                    }

                    .feature h2 {
                        font-size: 1.5rem;
                        margin: 15px 0;
                        font-weight: 600;
                    }

                    .feature p {
                        font-size: 1rem;
                        color: #555;
                    }

                    .feature:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }

                    
                    .popular-courses {
                        padding: 30px 20px;
                        background: #f9f9f9;
                    }

                    .popular-courses h2 {
                        text-align: center;
                        font-size: 2rem;
                        margin-bottom: 20px;
                    }

                    .course-list {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 20px;
                        justify-content: center;
                    }

                    .course-card {
                        background: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        overflow: hidden;
                        width: 100%;
                        max-width: 300px;
                        text-align: center;
                        padding: 15px;
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }

                    .course-card img {
                        width: 100%;
                        border-bottom: 2px solid #00aaff;
                    }

                    .course-card h3 {
                        margin: 15px 0;
                        font-size: 1.25rem;
                        font-weight: 600;
                    }

                    .course-card p {
                        font-size: 1rem;
                        color: #555;
                    }

                    .course-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }

                    
                    .testimonials {
                        padding: 30px 20px;
                        background: #fff;
                    }

                    .testimonials h2 {
                        text-align: center;
                        font-size: 2rem;
                        margin-bottom: 20px;
                    }

                    .testimonial {
                        background: #f9f9f9;
                        border-radius: 8px;
                        padding: 20px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        margin-bottom: 20px;
                        text-align: center;
                        animation: fadeInUp 1s ease-out;
                    }

                    .testimonial img {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        margin-bottom: 10px;
                    }

                    .testimonial p {
                        font-size: 1rem;
                        color: #555;
                    }

                    
                    @media (max-width: 576px) {
                        .feature {
                            width: 100%;
                        }
                    }

                    
                    @media (max-width: 576px) {
                        .course-card {
                            max-width: 100%;
                        }
                    }
                `}
            </style>

            

            <main>
                <section className="hero">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        infiniteLoop
                        autoPlay
                        interval={5000}
                        transitionTime={1000}
                        swipeable
                        emulateTouch
                    >
                        <div>
                            <h1>Welcome to the Language Learning Platform</h1>
                            <p>Your gateway to learning new languages effectively and interactively.</p>
                            {/* <a href="courses.html" className="cta-button">Start Learning</a> */}
                        </div>
                        <div>
                            <h1>Discover New Languages</h1>
                            <p>Explore a wide range of languages and improve your skills.</p>
                            {/* <a href="courses.html" className="cta-button">Browse Courses</a> */}
                        </div>
                        <div>
                            <h1>Join Our Community</h1>
                            <p>Connect with learners and tutors from around the world.</p>
                            {/* <a href="signup.html" className="cta-button">Sign Up Now</a> */}
                        </div>
                    </Carousel>
                </section>

                <section className="features">
                    <div className="feature">
                        <img src="/Photos/interactive.avif" alt="Feature 1" />
                        <h2>Interactive Lessons</h2>
                        <p>Engage with interactive lessons that make learning fun and effective.</p>
                    </div>
                    <div className="feature">
                        <img src="/Photos/los.jpg" alt="Feature 2" />
                        <h2>Native Tutors</h2>
                        <p>Learn from native speakers to enhance your pronunciation and comprehension.</p>
                    </div>
                    <div className="feature">
                        <img src="/Photos/schedule.jpeg" alt="Feature 3" />
                        <h2>Flexible Scheduling</h2>
                        <p>Choose lesson times that fit your schedule and learn at your own pace.</p>
                    </div>
                </section>

                <section className="popular-courses">
                    <h2>Popular Courses</h2>
                    <div className="course-list">
                        <div className="course-card">
                            <img src="/Photos/french.jpg" alt="Course 2" style={{width:'305px',height: '200px'}} />
                            <h3>French Conversation</h3>
                            <p>Improve your French speaking skills with interactive conversation practice.</p>
                        </div>
                        <div className="course-card">
                            <img src="/Photos/hindi.jpg" alt="Course 1" style={{width:'240px',height: '200px'}}/>
                            <h3>Hindi for Beginners</h3>
                            <p>Start your journey with basic Hindi and build a strong foundation.</p>
                        </div>
                        <div className="course-card">
                            <img src="/Photos/port.jpg" alt="Course 3"style={{width:'305px',height: '200px'}} />
                            <h3>Advanced Portuguese</h3>
                            <p>Take your Portuguese to the next level with advanced lessons and practice.</p>
                        </div>
                    </div>
                </section>

                
            </main>
        </div>
    );
};

export default Home;
