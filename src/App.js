import React, { useState } from 'react';
import './App.css';
import iconstar from './images/icon-star.svg';
import illustrationthankyou from './images/illustration-thank-you.svg';
import { logMessage } from './script';

function App() {
  const [selectedScore, setSelectedScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleScoreClick = (score) => {
    setSelectedScore(score);
    logMessage(`Selected score: ${score}`);
  };

  const handleSubmit = () => {
    if (selectedScore === 0) {
      document.getElementById('error-msg').classList.remove('d-none');
    } else {
      document.getElementById('error-msg').classList.add('d-none');
      document.getElementById('box-1').classList.add('d-none');
      document.getElementById('box-2').classList.remove('d-none');
      setSubmitted(true);
    }
  };
  <script src='script.js'></script>

  return (
    <div className="App">
      <div className="container">
        <div id="box-1" className={!submitted ? '' : 'd-none'}>
          <div className="star">
            <img src={iconstar} alt="icon-star" />
          </div>
          <div className="box-body">
            <h1>How did we do?</h1>
            <p className="msg">Please let us know how we did with your support request. All feedback is appreciated
              to help us improve our offering!</p>
            <p id="error-msg" className="error-msg d-none">Please select a score!</p>
            <div className="buttons">
              {[1, 2, 3, 4, 5].map((score) => (
                <button
                  key={score}
                  className={selectedScore === score ? "selected" : ""}
                  onClick={() => handleScoreClick(score)}
                >
                  {score}
                </button>
              ))}
            </div>
            <button id="submit" className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div id="box-2" className={submitted ? '' : 'd-none'}>
          <div className="box-body">
            <img src={illustrationthankyou} alt="illustration-thank-you" />
            <div id="selection-msg" className="selection-msg">
              {`You selected ${selectedScore} out of 5`}
            </div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support,
              don’t hesitate to get in touch!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
