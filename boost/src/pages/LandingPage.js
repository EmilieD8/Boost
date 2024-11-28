import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './LandingPage.css'; // Import the CSS file
import svgImage from '../images/landing_backgnd.svg'; // Adjust the path as needed


function LandingPage() {
    const navigate = useNavigate();

    const navigateToOnboarding = () => {
        navigate('/onboarding');
    };

    return (
        <div className="landing-container">
            <h2 className="landing-heading">
                BOOST
            </h2>
            <p className="landing-subheading">
                Get to the core of your inner forest
            </p>
            <div className="landing-svg">
            <img src={svgImage} alt="Illustration" className="landing-image" />
            </div>
            <div className="landing-button-container">
                <Button text="Continue" onClick={navigateToOnboarding} />
            </div>
        </div>
    );
}

export default LandingPage;
