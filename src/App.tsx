import React from 'react';
import './App.css';
import Button from './component/Button';
import StyleSheet from './type/StyleSheet';

function App() {
  return (
    <div className="App">
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
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "50px 50px 50px 50px",
    gridTemplateRows: "50px 50px 50px 50px 50px",
    border: "5px solid #9e5ab4",
    borderRadius: "20px",
    backgroundColor: "white",
    paddingTop: "200px",
    paddingBottom: "30px",
    paddingLeft: "10px",
    paddingRight: "10px",
    gap: "10px",
    width: "max-content",
  },
}

export default App;
