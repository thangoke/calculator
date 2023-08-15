import React from 'react';
import './App.css';
import Button from './component/Button';
import StyleSheet from './type/StyleSheet';

function App() {
  return (
    <div style={styles.calculatorContainer}>
      <div style={styles.resultBox}>Result Box</div>
      <div style={styles.operandBox}>Operand Box</div>
      <div style={styles.gridContainer}>
        <Button background="#d57c52">C</Button>
        <Button background="#d57c52">+/-</Button>
        <Button background="#d57c52">%</Button>
        <Button background="#b05fff">/</Button>
        <Button background="#525f7d">1</Button>
        <Button background="#525f7d">2</Button>
        <Button background="#525f7d">3</Button>
        <Button background="#b05fff">X</Button>
        <Button background="#525f7d">4</Button>
        <Button background="#525f7d">5</Button>
        <Button background="#525f7d">6</Button>
        <Button background="#b05fff">+</Button>
        <Button background="#525f7d">7</Button>
        <Button background="#525f7d">8</Button>
        <Button background="#525f7d">9</Button>
        <Button background="#b05fff">-</Button>
        <Button background="#525f7d">.</Button>
        <Button background="#525f7d">0</Button>
        <Button background="#525f7d">=</Button>
      </div>
    </div>
  );
}

const styles: StyleSheet = {
  calculatorContainer: {
    display: "flex",
    flexDirection: "column",
    border: "5px solid #9e5ab4",
    borderRadius: "20px",
    backgroundColor: "white",
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
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "50px 50px 50px 50px",
    gridTemplateRows: "50px 50px 50px 50px 50px",
    paddingTop: "10px",
    paddingBottom: "30px",
    paddingLeft: "10px",
    paddingRight: "10px",
    gap: "10px",
    width: "max-content",
  },
}

export default App;
