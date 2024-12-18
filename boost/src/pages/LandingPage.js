import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import photo from '../images/landing_axe.png';
import './LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();

    const navigateToOnboarding = () => {
        if (localStorage.getItem('onboardingAnswers')) {
            navigate('/home');
            return;
        }
        navigate('/onboarding');
    };

    return (
        <div className="landing-container">
            {/* Content Wrapper */}
            <div className="landing-content">
                <h2 className="landing-heading">
                     {/* Willkommen bei  */}
					 BOOST
                </h2>
                <p className="landing-subheading">
                    Deinem persönlichen Tool für mehr Energie und Fokus.
                </p>
                <div className="landing-button-container">
                    <Button style="home-button" text="Continue" onClick={navigateToOnboarding} />
                </div>
            </div>
            {/* Image */}
            <img 
                src={photo}
                alt="Happy"
                className="landing-image" 
            />
        </div>
    );
}

export default LandingPage;
