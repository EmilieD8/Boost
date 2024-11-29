import React, { useState, useEffect } from 'react';
import Slider from '../components/InputTools/Slider'; // Adjust the path as necessary
import YesNo from '../components/InputTools/YesNo'; // Adjust the path as necessary
import Button from '../components/Button/Button'; // Adjust the path as necessary
import './HomePage.css'; // Assuming you have a stylesheet
import Footer from '../components/InputTools/Footer'; // Adjust the path as necessary

const HomePage = () => {
    const [sliderValues, setSliderValues] = useState([1, 1, 1, 1]); // Example slider values
    const [showMessage, setShowMessage] = useState(false); // State to control showing message after save
    const [saved, setSaved] = useState(false); // Track whether save has been clicked
    const [name, setName] = useState('');
    const [answers, setAnswers] = useState({});
    const today = new Date().toISOString().split('T')[0]; // Get today's date in ISO format (YYYY-MM-DD)
    const [dateDifference, setDateDifference] = useState(0); // Example date difference

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
    }, [today]);
    // Logic to handle slider change
    const handleSliderChange = (index, value) => {
        const newSliderValues = [...sliderValues];
        newSliderValues[index] = value;
        setSliderValues(newSliderValues);
    };

    const handleSave = () => {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in ISO format (YYYY-MM-DD)

        const dataToSave = {
            sliderValues,
            name,
            dateDifference
        };

        // Save the data under today's date in localStorage
        localStorage.setItem(`onboardingData-${today}`, JSON.stringify(dataToSave));
        console.log(`Data saved for ${today}:`, dataToSave);

        // After save, check slider values and show the message if needed
        setSaved(true);

    };

    // Get the appropriate message based on dateDifference
    const getMessageForDateDifference = () => {
        if (sliderValues[0] >= 2) {
            return "test";
        }
        else if (dateDifference === 1) {
            return "Es scheint, als wäre heute nicht dein stärkster Tag. Das passiert jedem mal. Vielleicht tut dir etwas Bewegung oder ein Moment der Ruhe gut, um wieder Energie zu tanken. Bleib am Retreat dran! Dein Kopf verdient genauso viel Aufmerksamkeit wie dein Körper.";
        } else if (dateDifference === 2) {
            return " Es sieht so aus, als wäre deine Energie nicht auf dem Level, das du gewohnt bist. Manchmal signalisiert der Kopf, dass es Zeit ist, einen Gang zurückzuschalten oder den Fokus neu auszurichten. Versuch, dir bewusst kleine Erfolge zu setzen – das gibt Kraft. Und bleib dran!";
        } else if (dateDifference === 3) {
            return `Es scheint, als würdest du gerade mit etwas ringen, das dich zurückhält. Genau wie im Training braucht es auch mental manchmal eine klare Strategie, um wieder auf Kurs zu kommen. Probier es doch mit einer kurzen Übung: Schreib auf, was dir in letzter Zeit Energie raubt und was dir Energie gibt. Das kann helfen, klarer zu sehen. Und dann geht es morgen weiter.`;
        } else if (dateDifference === 4) {
            return "Es scheint dir gerade etwas die Kraft zu rauben. Das ist ein Signal, auf das du hören solltest – so wie du auf deinen Körper hörst, wenn ein Muskel überfordert ist. Vielleicht ist es an der Zeit, mit jemandem zu sprechen, der dir dabei helfen kann, wieder klarer zu denken und stärker zu werden.";
        } else if (dateDifference === 5) {
            return "Es scheint, als würde dich etwas länger ausbremsen, als dir lieb ist. Starke Männer wissen, wann es Zeit ist, Unterstützung zu holen – das ist kein Zeichen von Schwäche, sondern von Fokus und Willenskraft. Hier findest du Angebote, die dir helfen können, wieder voll durchzustarten.";
        } 
        else {
            return "land";
        }
    };

    return (
        <div className="home-page">
            {/* Always show Hi message and date message */}
            <h1 className="home-greeting">Hi, {name}!</h1>
            <p className="home-date">Das ist Tag {dateDifference}!</p>

            {/* Show the home-trackers content only if 'saved' is false */}
            {!saved && (
                <div className="home-trackers">
                    <p className="home-questions">Wie geht es dir heute?</p>
                    <Slider value={sliderValues[0]} onChange={(value) => handleSliderChange(0, value)} />
                    <p className="home-questions">Wie hast du geschlafen?</p>
                    <Slider value={sliderValues[1]} onChange={(value) => handleSliderChange(1, value)} />
                    <p className="home-questions">Hast du heute trainiert?</p>
                    <YesNo />
                    <p className="home-questions">Wie war dein Energielevel heute?</p>
                    <Slider value={sliderValues[2]} onChange={(value) => handleSliderChange(2, value)} />
                    <p className="home-questions">Hatten Sie Zeit, mit Ihren Freunden oder Ihrer Familie zu sprechen?</p>
                    <YesNo />

                    <div className="submit">
                        <Button text="Save" onClick={handleSave} />
                    </div>
                </div>
            )}

            {/* Show the message box based on the dateDifference */}
            {saved && (
                <div className="message-container">
                    <p> Tips:</p>
                        <p className='message-shown'>{getMessageForDateDifference()}</p>
                </div>
            )}


                <Footer />

        </div>
    );
};

export default HomePage;
