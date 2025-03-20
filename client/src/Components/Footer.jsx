import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <footer className="footer">
            <style>
                {`
                    .footer {
                        background: linear-gradient(135deg,hsl(200, 100.00%, 50.00%), #00ff99);
                        padding: 20px 0;
                        font-family: Arial, sans-serif;
                        color: #fff;
                    }

                    .footer .container {
                        display: flex;
                        justify-content: space-between;
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 20px;
                    }

                    .footer .column {
                        flex: 1;
                        margin-right: 20px;
                    }

                    .footer .column h3 {
                        font-size: 1.5em;
                        margin-bottom: 10px;
                    }

                    .footer .column ul {
                        list-style: none;
                        padding: 0;
                    }

                    .footer .column ul li {
                        margin-bottom: 5px;
                    }

                    .footer .column ul li a {
                        color: #fff;
                        text-decoration: none;
                    }

                    .footer .column ul li a:hover {
                        text-decoration: underline;
                    }

                    .footer .contact-info i {
                        margin-right: 10px;
                    }

                    .footer .social-icons {
                        margin-top: 10px;
                    }

                    .footer .social-icons a {
                        margin-right: 10px;
                        color: black;
                        font-size: 1.5em; 
                        text-decoration: none;
                        background-color: #FFDAB9; 
                        border-radius: 50%; 
                        padding: 10px; 
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .footer .social-icons a:hover {
    background-color: #ff4a29;
}

                    .footer .newsletter input {
                        width: 100%;
                        padding: 10px;
                        margin-bottom: 10px;
                        border: none;
                        border-radius: 5px;
                        font-size: 1em;
                    }

                    .footer .newsletter button {
                        padding: 10px 20px;
                        background: #fff;
                        color: #00aaff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1em;
                    }

                    .footer .newsletter button:hover {
                        background: #f0f0f0;
                    }

                    .footer .bottom-text {
                        text-align: center;
                        padding: 10px 0;
                        background: #0077cc;
                        color: #fff;
                        margin-bottom: 0px;
                    }

                    .footer .bottom-text a {
                        color: #00ff99;
                        text-decoration: none;
                    }

                    .footer .bottom-text a:hover {
                        text-decoration: underline;
                    }

                    
                    @media (max-width: 768px) {
                        .footer .container {
                            flex-direction: column;
                            align-items: center;
                        }

                        .footer .column {
                            margin-right: 0;
                            margin-bottom: 20px;
                        }

                        .footer .newsletter input {
                            width: calc(100% - 22px);
                        }
                    }

                    @media (max-width: 576px) {
                        .footer h3 {
                            font-size: 1.2em;
                        }

                        .footer .column {
                            margin-bottom: 15px;
                        }
                    }
                `}
            </style>
            <div className="container">
                <div className="column">
                    <h3>Quick Link</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms & Condition</a></li>
                        <li><a href="/feedback">FAQs & Help</a></li>
                        <li><a href="/review">Review</a></li>
                    </ul>
                </div>
                <div className="column contact-info">
                    <h3>Contact</h3>
                    <div><i className="fas fa-map-marker-alt"></i><span>83 MP Street, Kovaipudhur, Coimbatore</span></div>
                    <div><i className="fas fa-phone-alt"></i><span>+91 8683045908</span></div>
                    <div><i className="fas fa-envelope"></i><span>bingolingo@gmail.com</span></div>
                    <div className="social-icons">
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><WhatsAppIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                        <a href="#"><EmailIcon /></a>
                    </div>
                </div>
                <div className="column newsletter">
                    <h3>Subscribe to our Newsletter</h3>
                    <p>Subscribe now and join our growing community of learners committed to lifelong education!</p>
                    <input type="email" placeholder="Your email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="bottom-text">
                &copy; BingoLingo, All Rights Reserved. <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;
