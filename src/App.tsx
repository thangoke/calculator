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
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button background="#b05fff">X</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button background="#b05fff">+</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button background="#b05fff">-</Button>
        <Button>.</Button>
        <Button>0</Button>
        <Button>=</Button>
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
