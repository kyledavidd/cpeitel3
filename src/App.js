import './App.css';
import { useState } from "react";

function Key({ label, clickHandler, className }) {
  return (
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState("C-PEITEL3 EXPECTATIONS");
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const fullName = "YHUAN KYLE DAVID";

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    const expectations = {
      "1": "Being On Time",
      "2": "Making An Effort",
      "3": "Being High Energy",
      "4": "Having A Positive Attitude",
      "5": "Being Passionate",
      "6": "Using Good Body Language",
      "7": "Being Coachable",
      "8": "Doing A Little Extra",
      "9": "Being Prepared",
      "0": "Having A Strong Work Ethic",
    };

    if (expectations[value]) {
      setDisp(expectations[value]);
    } else if (num1 === null) {
      setNum1(value);
      setDisp(value);
    } else if (op === null) {
      setNum1(num1 + value);
      setDisp(num1 + value);
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
  };

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  };

  const equalsClickHandler = () => {
    if (num1 !== null && num2 !== null && op !== null) {
      let result;
      switch (op) {
        case "+":
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case "*":
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case "÷":
        case "/":
          result = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          result = 0;
      }
      setDisp(result);
      setNum1(null);
      setNum2(null);
      setOp(null);
    }
  };

  const clearClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
    setNum1(null);
    setNum2(null);
    setOp(null);
  };

  const surnameClickHandler = () => {
    setDisp(fullName.toUpperCase());
  };

  const whatILearnedHandler = () => {
    setDisp("I learned the basics of REACT, JAVA, and Bootstrap and I was able to create simple websites.");
  };

  const whatIWantToLearnHandler = () => {
    setDisp("I want to learn how to build functional websites that are easy to use, ensuring they work well on both mobile and desktop devices, and effectively connect the frontend and backend.");
  };

  const howWillILearnHandler = () => {
    setDisp("I'll learn by practicing coding at home and using online resources like video tutorials on Youtube to guide me and improve my skills step by step.");
  };

  return (
    <div className="App">
      <h1>{fullName} - IT3A</h1>

      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ExtraButtons">
          <Key label="What I learned?" clickHandler={whatILearnedHandler} />
          <Key label="What I want to learn?" clickHandler={whatIWantToLearnHandler} />
          <Key label="How will I learn?" clickHandler={howWillILearnHandler} />
        </div>
        <div className="ButtonsContainer">
          <Key label={1} clickHandler={numClickHandler} />
          <Key label={2} clickHandler={numClickHandler} />
          <Key label={3} clickHandler={numClickHandler} />
          <Key label={4} clickHandler={numClickHandler} />
          <Key label={5} clickHandler={numClickHandler} />
          <Key label={6} clickHandler={numClickHandler} />
          <Key label={7} clickHandler={numClickHandler} />
          <Key label={8} clickHandler={numClickHandler} />
          <Key label={9} clickHandler={numClickHandler} />
          <Key label={0} clickHandler={numClickHandler} />
          <Key label="RESET" clickHandler={clearClickHandler} />
          <Key label="NAME" clickHandler={surnameClickHandler} className="surname" />
        </div>
      </div>
    </div>
  );
}

export default App;
