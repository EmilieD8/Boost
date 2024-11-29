import React, { useState } from 'react';
import './Onboarding.css'; // Assuming you have a stylesheet
import Button from '../components/Button/Button';
import photo from '../images/landing_axe.png';
import EmotionWheel from '../components/EmotionWheel/EmotionWheel';


const Onboarding = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''
    });

    // Update answers state
    const handleAnswerChange = (question, value) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [question]: value
        }));
    };

    // Handle the "Next" button click
    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    // Handle the "Previous" button click
    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    // Handle form submission (final step)
    const handleSubmit = () => {
        localStorage.setItem('onboardingAnswers', JSON.stringify(answers));

    };

    return (
        <div className="onboarding-container">
            <div className="onboarding-form">
                {/* Question 1 */}
                {currentStep === 1 && (
                    <div>
                        <label className='onboarding-label'>Wie möchtest du genannt werden?</label>
                        <input
                            className='onboarding-input'
                            type="text"
                            value={answers.question1}
                            onChange={(e) => handleAnswerChange('question1', e.target.value)}
                        />
                    </div>
                )}

                {/* Question 2 */}
                {currentStep === 2 && (
                    <div>
                        <p  className='onboarding-label' >Hier dreht sich alles darum, wie du deinen Alltag optimieren kannst. <br>
                        </br>Wir starten mit ein paar kurzen Fragen, die helfen, dein volles Potenzial auszuschöpfen.</p>
                    </div>
                )}

                {/* Question 3
                {currentStep === 3 && (
                    <div>
                        <label className='onboarding-label'>How are you sleeping lately?</label>
                        <input
                            className='onboarding-input'
                            type="text"
                            value={answers.question3}
                            onChange={(e) => handleAnswerChange('question3', e.target.value)
                            }
                            />
                    </div>
                )}

                {/* Question 4 */}
                {/* {currentStep === 4 && (
                    <div>
                        <p className="onboarding-label">How do you feel?</p>
                        <EmotionWheel
                            onEmotionSelect={(emotion) => {
                                handleAnswerChange('question4', emotion); // Save emotion
                                setCurrentStep((prevStep) => prevStep + 1); // Go to the next step
                            }}
                        />
                    </div>
                )} */}

                {/* Question 5 */}
                {/* {currentStep === 5 && (
                    <div>
                        <label className='onboarding-label'>What's your energy level?</label>
                        <input
                            className='onboarding-input'
                            type="text"
                            value={answers.question5}
                            onChange={(e) => handleAnswerChange('question5', e.target.value)}
                        />
                    </div>
                )} */}

                {/* Navigation Buttons */}
                <div className="onboarding-navigation">
                    {currentStep > 1 && (
                        <Button text="Zurück" onClick={handlePrevious} />
                    )}
                    {currentStep < 2 ? (
                        <Button text="Nächste" onClick={handleNext} />
                    ) : (
                        <Button text="Weiter" onClick={handleSubmit} />
                    )}
                </div>
            </div>
            {/* <img
                src={photo}
                alt="Happy"
                className="landing-image"
            /> */}
        </div>
    );
};

export default Onboarding;
