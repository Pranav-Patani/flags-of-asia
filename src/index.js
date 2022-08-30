import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const el = document.getElementById(`root`);

const root = ReactDOM.createRoot(el);

//-----------------------------------------

function App() {
  const flagDictionary = {
    "🇦🇪": `United Arab Emirates`,
    "🇻🇳": `Vietnam`,
    "🇹🇯": `Tajikistan`,
    "🇮🇱": `Israel`,
    "🇹🇷": `Turkey`,
    "🇮🇷": `Iran`,
    "🇧🇹": `Bhutan`,
    "🇱🇦": `Laos`,
    "🇹🇭": `Thailand`,
    "🇱🇧": `Lebanon`,
    "🇰🇬": `Kyrgyzstan`,
    "🇹🇲": `Turkmenistan`,
    "🇸🇬": `Singapore`,
    "🇲🇲": `Myanmar`,
    "🇲🇻": `Maldives`,
    "🇰🇷": `South Korea`,
    "🇰🇵": `North Korea`,
    "🇴🇲": `Oman`,
    "🇵🇸": `State of Palestine`,
    "🇧🇳": `Brunei`,
    "🇰🇼": `Kuwait`,
    "🇮🇶": `Iraq`,
    "🇬🇪": `Georgia`,
    "🇦🇫": `Afghanistan`,
    "🇸🇦": `Saudi Arabia`,
    "🇺🇿": `Uzbekistan`,
    "🇲🇳": `Mongolia`,
    "🇲🇾": `Malaysia`,
    "🇾🇪": `Yemen`,
    "🇦🇲": `Armenia`,
    "🇳🇵": `Nepal`,
    "🇶🇦": `Qatar`,
    "🇮🇩": `Indonesia`,
    "🇵🇰": `Pakistan`,
    "🇱🇰": `Sri Lanka`,
    "🇰🇿": `Kazakhstan`,
    "🇸🇾": `Syria`,
    "🇧🇭": `Bahrain`,
    "🇰🇭": `Cambodia`,
    "🇧🇩": `Bangladesh`,
    "🇨🇳": `China`,
    "🇹🇱": `Timor-Leste`,
    "🇯🇵": `Japan`,
    "🇨🇾": `Cyprus`,
    "🇵🇭": `Philippines`,
    "🇯🇴": `Jordan`,
    "🇦🇿": `Azerbaijan`,
    "🇮🇳": `India`,
    "🇭🇰": `Hong Kong`,
    "🇲🇴": `Macao`,
    "🇹🇼": `Taiwan`,
  };

  const asianFlags = Object.keys(flagDictionary);

  let [country, setCountry] = useState(``);
  let [message, setMessage] = useState(``);
  function inputChangeHandler(event) {
    let userInput = event.target.value;
    let country = flagDictionary[userInput];
    setCountry(country);

    if (userInput in flagDictionary) {
      message = `The Country is in Asia.`;
      setMessage(message);
    } else if (userInput === ``) {
      message = ``;
      setMessage(message);
    } else {
      message = `The country is not in Asia.`;
      setMessage(message);
    }
  }

  function flagClickHandler(flags) {
    country = flagDictionary[flags];
    setCountry(country);
  }
  return (
    <div className="App">
      <div className="heading">
        <h1>Flags of Asia</h1>
      </div>

      <div className="in-out-container">
        <input
          placeholder="Enter your flag here."
          onChange={inputChangeHandler}
          className="input-field"
        />

        <div className="output-field">
          <span style={{ display: "block" }}>
            <strong>{country}</strong>
          </span>

          <span style={{ display: "block", marginTop: "0.5rem" }}>
            {message}
          </span>
        </div>
      </div>

      <div className="flag-container">
        <h2>Asian Flags</h2>
        <div className="flag-picker">
          {asianFlags.map((flags) => {
            return (
              <li
                key={flags}
                className="flag-list"
                onClick={() => flagClickHandler(flags)}
              >
                {flags}
              </li>
            );
          })}
        </div>
      </div>

      <div className="about">
        <h3>About</h3>
        <p>
          Welcome to the Flags of Asia! This is a web-app that can identify the
          flags of Asian countries and show the country names. You can either
          enter the flag manually or choose from the flags above. Have FUN!
        </p>
      </div>
    </div>
  );
}

//-------------------

root.render(<App />);
