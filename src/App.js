import React, { useState } from "react";
import CounterCard from "./components/CounterCard";

import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const [IncFlag, setIncFlag] = useState(false);
  const [DecFlag, setDecFlag] = useState(false);

  const counterChange = (val) => {
    setCounter(val);
  };

  const pauseInc = () => {
    setIncFlag(true);
    setDecFlag(false);
    document.querySelector(".Increment").setAttribute("disabled", true);
    document.querySelector(".Decrement").removeAttribute("disabled");
  };

  const pauseDec = () => {
    setDecFlag(true);
    setIncFlag(false);
    document.querySelector(".Decrement").setAttribute("disabled", true);
    document.querySelector(".Increment").removeAttribute("disabled");
  };

  return (
    <>
      <div className="container">
        <CounterCard
          title="Increment"
          counter={counter}
          flag={IncFlag}
          setFlag={pauseInc}
          counterChange={counterChange}
        />
        <CounterCard
          title="Decrement"
          counter={counter}
          flag={DecFlag}
          setFlag={pauseDec}
          counterChange={counterChange}
        />
      </div>
    </>
  );
};

export default App;
