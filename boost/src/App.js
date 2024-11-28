import React from "react";
import Footer from "./Footer";
import Slider from "./Slider";
import YesNo from "./YesNo";
import JournalingSection from "./Journalingsection";

function App() {
  return (
    <>
      <p>
        How are you doing ?
      </p>
      <div className="Slider">
        <Slider />
      </div>

      <p>
        Did you sleep well ?
      </p>
      <div className="YesNo">
        <YesNo />
      </div>

      <div>
        <JournalingSection />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
