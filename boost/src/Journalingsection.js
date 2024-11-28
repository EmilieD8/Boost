import React, { useState } from 'react';
import './Journal.css';



const JournalingSection = () => {
  // State to hold the current text being entered
  const [currentEntry, setCurrentEntry] = useState("");

  // State to hold saved journal entries
  const [journalEntries, setJournalEntries] = useState([]);

  // Handle text input change
  const handleTextChange = (event) => {
    setCurrentEntry(event.target.value);
  };

  // Handle saving the journal entry
  const handleSaveEntry = () => {
    if (currentEntry.trim() !== "") {
      setJournalEntries([...journalEntries, currentEntry]);
      setCurrentEntry(""); // Clear the input field
    }
  };

  return (
    <div className="journal-section">
      <h2>Journaling Section</h2>

      {/* Textarea for entering journal */}
      <textarea
        value={currentEntry}
        onChange={handleTextChange}
        placeholder="Write your thoughts here..."
        rows="6"
        cols="50"
        className="journal-textarea"
      ></textarea>

      {/* Save button */}
      <button onClick={handleSaveEntry} className="save-button">
        Save Entry
      </button>

      {/* Display saved journal entries */}
      <div className="journal-entries">
        <h3>Your Journal Entries:</h3>
        {journalEntries.length > 0 ? (
          <ul>
            {journalEntries.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        ) : (
          <p>No entries yet. Start journaling above!</p>
        )}
      </div>
    </div>
  );
};

export default JournalingSection;
