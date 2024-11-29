import React, { useState } from 'react';
import './EmotionWheel.css';

const EmotionWheel = ({ onEmotionSelect }) => {
    const [selectedEmotion, setSelectedEmotion] = useState(null);

    const emotions = [
        'Joy', 'Sadness', 'Anger', 'Fear', 'Surprise',
        'Trust', 'Anticipation', 'Disgust', 'Love', 'Guilt',
        'Shame', 'Pride', 'Relief', 'Embarrassment', 'Hope',
        'Boredom', 'Curiosity', 'Gratitude', 'Loneliness', 'Confusion'
    ];

    const handleSliceClick = (emotion) => {
        setSelectedEmotion(emotion);
        console.log(`Selected Emotion: ${emotion}`);
        onEmotionSelect(emotion); // Pass selected emotion back to parent
    };

    return (
        <div className="emotion-wheel-container">
            <svg viewBox="-120 -120 240 240" className="emotion-wheel">
                {emotions.map((emotion, index) => {
                    const angle = (360 / emotions.length) * index;
                    const radians = (angle * Math.PI) / 180;
                    const x1 = Math.cos(radians) * 100;
                    const y1 = Math.sin(radians) * 100;
                    const x2 = Math.cos((radians + Math.PI / 10)) * 100;
                    const y2 = Math.sin((radians + Math.PI / 10)) * 100;

                    // Position for the text
                    const textAngle = angle + 9; // Adjust for center alignment of text
                    const textRadians = (textAngle * Math.PI) / 180;
                    const textX = Math.cos(textRadians) * 75; // Position closer to the center
                    const textY = Math.sin(textRadians) * 75;

                    // Rotate text for readability
                    const textRotation =
                        angle <= 45
                            ? textAngle // Keep as is for 0-180 degrees
                            : textAngle + 180; // Rotate upside-down for 180-360 degrees

                    return (
                        <g key={emotion} onClick={() => handleSliceClick(emotion)}>
                            {/* Slice */}
                            <path
                                d={`M 0 0 L ${x1} ${y1} A 100 100 0 0 1 ${x2} ${y2} Z`}
                                className="emotion-slice"
                                style={{
                                    fill: `hsl(${(index * 18)}, 70%, 60%)`,
                                    cursor: 'pointer',
                                }}
                            />
                            {/* Text */}
                            <text
                                x={textX}
                                y={textY}
                                fill="white"
                                fontSize="10"
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                transform={`rotate(${textRotation} ${textX} ${textY})`} /* Rotate text */
                                style={{ pointerEvents: 'none' }} // Prevent text from interfering with clicks
                            >
                                {emotion}
                            </text>
                        </g>
                    );
                })}
            </svg>
            <div className="emotion-wheel-center">
                {selectedEmotion ? (
                    <p className="emotion-display">{selectedEmotion}</p>
                ) : (
                    <p>Click an emotion!</p>
                )}
            </div>
        </div>
    );
};

export default EmotionWheel;
