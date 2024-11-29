import React, { useState, useEffect } from 'react';
import Slider from '../components/InputTools/Slider'; // Adjust the path as necessary
import './HomePage.css'; // Assuming you have a stylesheet
import YesNo from '../components/InputTools/YesNo'; // Adjust the path as necessary
import Footer from '../components/InputTools/Footer'; // Adjust the path as necessary

const HomePage = () => {
    const [name, setName] = useState('');
    const [today] = useState(new Date().toISOString().split('T')[0]); // Today's date in ISO format (YYYY-MM-DD)
    const [answers, setAnswers] = useState([]);
    const [dateDifference, setDateDifference] = useState(0);

    useEffect(() => {
        // Retrieve name from localStorage
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        }

        // Retrieve the stored date and calculate the difference
        const storedDate = localStorage.getItem('date');
        console.log('Stored date:', storedDate);
        console.log('Today\'s date:', today);

        if (storedDate) {
            const savedDate = new Date(storedDate); // Stored date as Date object
            const todayDate = new Date(today); // Current date as Date object

            console.log('Parsed savedDate:', savedDate);
            console.log('Parsed todayDate:', todayDate);

            if (!isNaN(savedDate) && !isNaN(todayDate)) {
                const daysElapsed = Math.floor((todayDate - savedDate) / (1000 * 60 * 60 * 24)) + 1; // Including current day
                console.log(`Days elapsed since stored date: ${daysElapsed}`);
                setDateDifference(daysElapsed);
            } else {
                console.error('Invalid date parsing for savedDate or todayDate.');
            }
        }

        // Retrieve onboarding answers from localStorage
        const storedAnswers = localStorage.getItem('onboardingAnswers');
        if (storedAnswers) {
            setAnswers(JSON.parse(storedAnswers));
        }
    }, [today]); // Add `today` as a dependency

    const handleSliderChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);

        // Save daily progress under the current date as the key
        localStorage.setItem(today, JSON.stringify(newAnswers));
    };

    return (
        <div className="home-page">
            <h1 className="home-greeting">Hi, {name}!</h1>
            <p className="home-date">Das ist Tag {dateDifference}!</p>
            <div className="home-trackers">
                <p className="home-questions">Wie geht es dir heute?</p>
                <Slider/>
                <p className="home-questions">Wie hast du geschlafen?</p>
                <Slider/>
                <p className="home-questions">Hast du heute trainiert?</p>
                <YesNo/>
                <p className="home-questions">Wie war dein Energielevel heute?</p>
                <Slider/>
                <p className="home-questions">Hattest du Zeit, mit deinen Freunden oder deiner Familie zu sprechen?</p>
                <YesNo/>
            </div>
        <Footer/>
        </div>
    );
};

export default HomePage;
