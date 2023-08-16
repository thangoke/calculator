import React, { useState } from 'react';
import './App.css';
import Button from './component/Button';
import StyleSheet from './type/StyleSheet';
import { ThemeContext } from './context/ThemeContext';

function App() {

  let [operand, setOperand] = useState("");
  let [result, setResult] = useState("");
  let [theme, setTheme] = useState("light");

  const mAdd = (num: number) => {
    let currVal = localStorage.getItem("calculator.thangok/mem") || "0";
    const newVal = Number(currVal) + num;
    localStorage.setItem("calculator.thangok/mem", "" + newVal);
  };

  const mSub = (num: number) => {
    let currVal = localStorage.getItem("calculator.thangok/mem") || "0";
    const newVal = Number(currVal) - num;
    localStorage.setItem("calculator.thangok/mem", "" + newVal);
  };

  const mClear = () => {
    localStorage.setItem("calculator.thangok/mem", "0");
  };

  const mRecall = () => {
    let currVal = localStorage.getItem("calculator.thangok/mem") || "0";
    return currVal;
  };

  const doEval = (expression: string) => {
    let res = "";
    try {
      res = eval(expression);
    } catch (err) {
      res = "Invalid expression, cannot calculate";
    }
    return res;
  }

  const handleButtonPress = (command: string) => {
    if (command == null) return;
    switch (command) {
      case "=": {
        const res = doEval(operand);
        setResult(res);
        return;
      }
      case "M+": {
        const res = doEval(operand);
        setResult(res);
        if (typeof res === "number") {
          mAdd(res);
        }
        return;
      }
      case "M-": {
        const res = doEval(operand);
        setResult(res);
        if (typeof res === "number") {
          mSub(res);
        }
        return;
      }
      case "MR": {
        const res = mRecall();
        setResult(res);
        return;
      }
      case "MC": {
        mClear();
        return;
      }
      case "C": {
        setOperand("");
        setResult("");
        return;
      }
      case "X": {
        command = "*";
        break;
      }
    }
    setOperand(operand + command);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={theme === "light" ? styles.calculatorContainerLight : styles.calculatorContainerDark}>
        <div style={styles.resultBox}>{result}</div>
        <div style={styles.operandBox}>{operand}</div>
        <div style={styles.gridContainer}>
          <Button handleButtonPress={handleButtonPress} background="#d57c52">M+</Button>
          <Button handleButtonPress={handleButtonPress} background="#d57c52">M-</Button>
          <Button handleButtonPress={handleButtonPress} background="#d57c52">MC</Button>
          <Button handleButtonPress={handleButtonPress} background="#b05fff">MR</Button>
          <Button handleButtonPress={handleButtonPress} background="#d57c52">C</Button>
          <Button handleButtonPress={handleButtonPress} background="#d57c52">+/-</Button>
          <Button handleButtonPress={handleButtonPress} background="#d57c52">%</Button>
          <Button handleButtonPress={handleButtonPress} background="#b05fff">/</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">1</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">2</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">3</Button>
          <Button handleButtonPress={handleButtonPress} background="#b05fff">X</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">4</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">5</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">6</Button>
          <Button handleButtonPress={handleButtonPress} background="#b05fff">+</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">7</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">8</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">9</Button>
          <Button handleButtonPress={handleButtonPress} background="#b05fff">-</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">.</Button>
          <Button handleButtonPress={handleButtonPress} background="#525f7d">0</Button>
          <Button handleButtonPress={handleButtonPress} background="#d57c52">=</Button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

const styles: StyleSheet = {
  calculatorContainerLight: {
    display: "flex",
    flexDirection: "column",
    border: "5px solid #9e5ab4",
    borderRadius: "20px",
    backgroundColor: "white",
    width: "250px",
  },
  calculatorContainerDark: {
    display: "flex",
    flexDirection: "column",
    border: "5px solid #9e5ab4",
    borderRadius: "20px",
    backgroundColor: "#282c34",
    width: "250px",
  },
  resultBox: {
    textAlign: "right",
    fontSize: "15px",
    padding: "10px",
    paddingTop: "100px",
    paddingBottom: "0px",
    color: "#7f8b99",
  },
  operandBox: {
    textAlign: "right",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "10px",
    paddingTop: "0px",
    color: "#31475e",
    minHeight: "30px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "50px 50px 50px 50px",
    gridTemplateRows: "50px 50px 50px 50px 50px 50px",
    paddingTop: "10px",
    paddingBottom: "30px",
    paddingLeft: "10px",
    paddingRight: "10px",
    gap: "10px",
    width: "max-content",
  },
}

export default App;
