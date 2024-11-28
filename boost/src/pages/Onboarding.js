import React, { useState } from 'react';
import './Onboarding.css';
import Button from '../components/Button';

const Onboarding = () => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Welcome, ${name}!`);
    };

    return (
        <div className="onboarding-container">
            <form onSubmit={handleSubmit} className="onboarding-form">
                <h1>Onboarding</h1>
                <label className="onboarding-label">How can we call you?</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="onboarding-input"
                />
                <Button text="Let's go" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default Onboarding;
