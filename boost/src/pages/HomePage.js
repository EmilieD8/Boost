import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [answers, setAnswers] = useState([0, 0, 0, 0, 0]);

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        } else {
            const userName = prompt('Please enter your name:');
            localStorage.setItem('name', userName);
            setName(userName);
        }
    }, []);

    const handleSliderChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
        localStorage.setItem(date, JSON.stringify(newAnswers));
    };

    return (
        <div>
            <h1>Hi, {name}!</h1>
            <p>Today is {date}</p>
            <div>
                {['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'].map((question, index) => (
                    <div key={index}>
                        <label>{question}</label>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={answers[index]}
                            onChange={(e) => handleSliderChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;